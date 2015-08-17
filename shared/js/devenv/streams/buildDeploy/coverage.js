var stepThrough = require('../stepThrough');
var steps = require('../steps');
var lazypipe = require('lazypipe');
var gulp = require('gulp');
var through = require('through2');
var merge = require('event-stream').merge;
var duplex = require('event-stream').duplex;

var postprocess = function (context, options) {
  return steps.applyTemplateParams('coverage', context, options);
};

var deploy  = function (context, options) {
  return lazypipe()
    .pipe(gulp.dest, 'shared/js/builds/coverage')
    .pipe(function () {
      return through.obj(function (file, enc, cb) {
         cb();
       }, function (cb) {
         cb();
       });
    })();

};

var cloneForTemplates = function (context, options, templates, nonTemplates) {

  // the coverage server needs to postProcess all JS files in order
  // to perform code coverage instrumentation on them
  return through.obj(function (file, enc, cb) {
    if ($.match(file, [
      '**/application.js',
      '**/deps.js',
      '**/options.js',
      '**/index.html'
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
  return stepThrough.tracked({
    name: 'coverage build',
    indentation: 1
  }, postprocessAndDeploy(context, options));
};
