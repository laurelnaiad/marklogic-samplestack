var path = require('path');
var steps = require('../steps');
var lazypipe = require('lazypipe');
var through = require('through2');
var merge = require('event-stream').merge;
var gulp = require('gulp');
var stepThrough = require('../stepThrough');
var duplex = require('event-stream').duplex;

$.marklogic = require('../../gulp-marklogic');

var processByFileType  = function (context, options) {
  var jslint = steps.jslint('database', context, options);

  var passthrough = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  });

  var inStream = through.obj(function (file, enc, cb) {
    // signal that db files were seen in the build cycle
    context.dbBuilt = true;
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


  return duplex(inStream, merged);
};


var cloneForTemplates = function (context, options, templates, nonTemplates) {

  return through.obj(function (file, enc, cb) {
    // there are no templated db files at this time
    // if ($.match(file, [
    // ])) {
    //   templates.write(file.clone());
    // }
    // else {
    nonTemplates.write(file);
    // }
    this.push(file);
    cb();
  }, function (cb) {
    templates.end();
    nonTemplates.end();
    cb();
  });
};

var postprocess = function (context, options) {
  return steps.applyTemplateParams('database', context, { options: options });
};

var deploy  = function (ctx, options) {
  return $.marklogic(options);
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

  var merged = merge(deployed, toKeep);

  return duplex(toKeep, merged);
};

module.exports = function (context, options) {


  var head = processByFileType(context, options);
  var tail = head
    .pipe(postprocessAndDeploy(context, options));
  return duplex(head, tail);
};
