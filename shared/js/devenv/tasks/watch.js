var Promise = require('bluebird');
var gulp = require('gulp');
var path = require('path');
var ctx = require('../context');

var promises = require('../promises');
var stepThrough = require('../streams/stepThrough');

var globs = require('../globs');
// var streams = require('../streams');

var self = {};
var cycle = function (inputStream, context, options) {
  context.browserBuilt = false;
  context.nodeBuilt = false;

  var builtStream = stepThrough.dummy();
  // inputStream.pipe($.filelog());
  // console.log('devenvFiles: ' + JSON.stringify(globs.devenvFiles));
  // console.log('cycle');
  return promises.conditionalClean(options)

  .then(promises.buildDeploy.bind(null,
    inputStream,
    context,
    options
  ))

  .then(promises.runApp.bind(null,
    context,
    options
  ))

  .then(promises.notifyApp.bind(null,
    context,
    options
  ))

  .then(promises.runCoverage.bind(null,
    context,
    options
  ))

  .then(promises.executeTests.bind(null,
    context,
    {
      // run unit tests if we see files from the tier in the build stream
      unit: 'conditional',
      e2e: false,
      int: false
    }
  ))
  .catch(function (err) {
    console.log(err.stack);
  });
};

var watch = function (cb) {
  var doWatch = function (result) {
    // console.log('not this again');
    $.watch(
      globs.allSrcFiles,
      {
        name: 'source code watch'
      },
      $.batch(function (stream, cb) {
        cycle(
          stream,
          ctx,
          {
            clean: false,
            // finalStreamLog: true
          }
        ).then(function (errs) {
          cb();
        });
      })
    );
    console.log('watching for changes...');
  };

  var srcFiles = gulp.src(globs.allSrcFiles);

  cycle(
    srcFiles,
    ctx,
    {
      clean: true,
      doLiveReload: true,
      // finalStreamLog: false
    }
  ).then(doWatch, doWatch);
  return $.watch(globs.devenvFiles, {
    name: 'devenv watch'
  } , function (file) {
    ctx.restartTask();
  });
};

var self = {};

self.name = 'watch';
self.deps = [];

self.func = function (cb) {
  watch(cb);
};

module.exports = self;
