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
      report: true, //DAM
      // run unit tests if we see files from the tier in the build stream
      unit: true, //DAM
      e2e: true, //DAM
      int: true //DAM
    }
  ));


};

self.name = 'test';
self.deps = [];

self.func = function (cb) {
  var srcFiles = gulp.src(globs.allSrcFiles);

  var onEnd = function (errs) {
    console.log(
      'Coverage report: file://' +
      path.join(globs.projectDir, 'shared/js/reports/lcov-report/index.html')
    );

    if (errs) {
      console.log(errs);
      console.log(errs.stack);
      process.exit(1);
    }
    else {
      cb();
      process.exit(0);
    }
  };

  cycle(srcFiles,
    ctx,
    {
      clean: true,
      doLiveReload: true,
      // finalStreamLog: false
    }
  ).then(onEnd, onEnd);
};

module.exports = self;
