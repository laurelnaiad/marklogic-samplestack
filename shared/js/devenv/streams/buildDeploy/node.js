var path = require('path');
var steps = require('../steps');
var lazypipe = require('lazypipe');
var through = require('through2');
var merge = require('event-stream').merge;
var gulp = require('gulp');
var stepThrough = require('../stepThrough');
var duplex = require('event-stream').duplex;

var sort = function (contexxt, options) {
  return through.obj(function (file, enc, cb) {
    if (file.path.match('^' + file.base + '/appserver/node-express/')) {
      file.path = file.path.replace('/appserver/node-express/', '/');
      if (file.path.match('^' + file.base + '/test/')) {
        file.isTestFile = true;
      }
      else {
        file.isSrcFile = true;
      }
    }
    else {
      console.log(file.path);
    }
    // if
    // var renamed = function () {
    //   return through.obj(function (file, enc, cb) {
    //     file.path = file.path.replace(
    //       '/browser/bower_components/',
    //       '/static/deps/'
    //     );
    //     this.push(file);
    //     cb();
    //   });
    // };

    this.push(file);
    cb();
  });
};

var processByFileType  = function (context, options) {
  var jslint = steps.jslint('node', context, options);

  var passthrough = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  });

  var inStream = through.obj(function (file, enc, cb) {
    // signal that node files were seen in the build cycle
    context.nodeBuilt = true;
    // sort into the processors or the passhtrough
    if (file.isJs) {
      jslint.write(file);
    }
    else {
      passthrough.write(file);
    }
    cb();
  }, function (cb) {
    jslint.end();
    passthrough.end();
  });

  var merged = merge(
    jslint,
    passthrough
  );

  var rebased = merged.pipe(through.obj(function (file, enc, cb) {
    // console.log(file.base);
    var remainder = file.path.substr(file.base.length);
    // console.log(file.base);
    // console.log(remainder);

    if (remainder.indexOf('/appserver/node-express/') === 0) {
      file.isTest = true;
      file.path = file.base + '/' +
          file.path.substr(
            (file.base.length + '/appserver/node-express/'.length)
          );
    }
    this.push(file);
    cb();
  }));



  return duplex(inStream, rebased);
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
  return steps.applyTemplateParams('node', context, { options: options });
};

var deploy  = function () {
  return lazypipe()
    // .pipe($.debug, { title: 'deployed'} )
    .pipe(gulp.dest, 'shared/js/builds/app')
    // .pipe($.debug, { title: 'deployed' })
  // .pipe(gulp.dest('shared/js/builds/app'))
  // throw away file object refs after writing, we have refs to them
  // in the toKeep stream;
  // deployed will be an empty stream but its timing of completion is what
  // we care about
    .pipe(function () {
      return through.obj(function (file, enc, cb) { cb(); } );
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
    // console.log('allDone end node');
  });

  return duplex(toKeep, merged);

};

module.exports = function (context, options) {


  var head = processByFileType(context, options);
  var tail = head
    .pipe(postprocessAndDeploy(context, options));
  return duplex(head, tail);
};
