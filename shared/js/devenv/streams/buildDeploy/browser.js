var steps = require('../steps');
var lazypipe = require('lazypipe');
var through = require('through2');
var merge = require('merge-stream');
var duplex = require('event-stream').duplex;
var gulp = require('gulp');
var stepThrough = require('../stepThrough');

var processByFileType  = function (context, options) {
  var sass = steps.sass(context, options)
  .on('end', function () {
    // console.log('sass end');
  });
  var browserify = steps.browserify(context, options)
  .on('end', function () {
    // console.log('browserify end');
  });
  var jslint = steps.jslint('browser', context, options)
  .on('end', function () {
    // console.log('jslint end');
  });
  var bowerFiles =  steps.bowerFiles(context, options)
  .on('end', function () {
    // console.log('bowerFiles end');
  });

  var passthrough = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  })
  .on('end', function () {
    // console.log('passthrough end');
  });

  var inStream = through.obj(function (file, enc, cb) {
    context.browserBuilt = true;

    // sort into the processors or the passhtrough
    if (file.isJs) {
      if (/\.browserify\.js$/.test(file.path)) {
        browserify.write(file);
      }
      else {
        jslint.write(file);
      }
    }
    else if (
      /\.bowerrc$/.test(file.path) ||
      /bower\.json$/.test(file.path)
    ) {
      bowerFiles.write(file);
    }
    else if (/\.scss$/.test(file.path)) {
      sass.write(file);
    }
    else {
      passthrough.write(file);
    }
    cb();
  }, function (cb) {
    bowerFiles.end();
    sass.end();
    jslint.end();
    browserify.end();
    passthrough.end();
  });

  var merged = merge(
    bowerFiles,
    sass,
    jslint,
    browserify,
    passthrough
  ).on('end', function () {
  });


  var rebased = merged.pipe(through.obj(function (file, enc, cb) {
    // console.log(file.base);
    var remainder = file.path.substr(file.base.length);
    // console.log(file.base);
    // console.log(remainder);

    if (remainder.indexOf('/browser/test/unit-tests/') === 0) {
      file.isTest = true;
      file.path = file.base + '/static/' +
          file.path.substr(
            (file.base.length + '/browser/test/unit-tests/'.length)
          );
    }
    else if (remainder.indexOf('/browser/src/') === 0) {
      file.path = file.base + '/static/' +
          file.path.substr((file.base.length + '/browser/src/'.length));
    }
    else if (remainder.indexOf('/browser/deps/') === 0) {
      file.path = file.base + '/static/deps/' +
          file.path.substr((file.base.length + '/browser/deps/'.length));
    }
    this.push(file);
    cb();
  }));

  return duplex(
    inStream,
    rebased
  );
};

var cloneForTemplates = function (context, options, templates, nonTemplates) {

  return through.obj(function (file, enc, cb) {
    if ($.match(file, [
      '**/application.js',
      '**/index.html',
      '**/deps.js',
      '**/options.js'
    ])) {
      // console.log('browser says apply template to this: ' + file.path);
      templates.write(file.clone());
    }
    else {
      nonTemplates.write(file);
    }
    this.push(file);
    cb();
  }, function (cb) {
    // console.log('clone for templates flush');
    templates.end();
    nonTemplates.end();
    cb();
  });
};

var postprocess = function (context, options) {
  var embedlr = function () {
    if (options.liveReloadPort) {
      return $.if(['**/index.html'], steps.embedlr(
        context,
        { port: options.liveReloadPort }
        // TODO FIX ME { port: context.envs.app.ports.liveReload }
      ));
    }
    else {
      return stepThrough.dummy();
    }
  };
  return lazypipe()
    .pipe(steps.applyTemplateParams, 'browser', context, { options: options })
    .pipe(embedlr)
    ();
};

var deploy  = function (context, options) {

  return lazypipe()
    .pipe(gulp.dest, 'shared/js/builds/app')
    .pipe(function () {
      return through.obj(function (file, enc, cb) {
         cb();
       }, function (cb) {
         cb();
       });
    })();

};

var postprocessAndDeploy = function (context, options) {
  var templates = stepThrough.dummy();
  var nonTemplates = stepThrough.dummy();

  var toKeep = cloneForTemplates(context, options, templates, nonTemplates);
  var postProcessed = templates
    .pipe(postprocess(context, options));

  var forDeployment = merge(
    postProcessed,
    nonTemplates
  );

  var deployed = forDeployment.pipe(deploy(context, options));

  var merged = merge(deployed, toKeep)
  .on('end', function () {
    // console.log('allDone end browser');
  });

  return duplex(toKeep, merged);
};


module.exports = function (context, options) {
  var head = processByFileType(context, options);
  var tail = head
    .pipe(postprocessAndDeploy(context, options));
  return duplex(head, tail)
  .on('end', function () {
    // console.log('browser end');
  });
};
