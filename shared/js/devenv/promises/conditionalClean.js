var streams = require('../streams');
var Promise = require('bluebird');
var path = require('path');
var globs = require('../globs');
var async = require('async');
var mkdirp = require('mkdirp');

module.exports = function (options) {
  var rimraf = require('rimraf');
  return new Promise(function (resolve, reject) {
    if (options.clean) {
      async.parallel([
        rimraf.bind(rimraf, path.join(globs.projectDir, 'shared/js/builds')),
        rimraf.bind(rimraf, path.join(globs.projectDir, 'shared/js/reports'))
      ], function () {
        mkdirp.sync(path.join(globs.projectDir, 'shared/js/reports'));
        resolve();
      });
    }
    else {
      resolve();
    }
  });
    //
    // }
    // // var myStream = srcFiles.pipe($.filelog()); //.pipe($.size()); // debug({ title: 'from build' }));
    // var myStream = srcFiles
    //   .pipe(streams.buildApp(srcFiles, ctx, {}));
    // myStream.resume();
    // myStream.on('end', function () {
    //   resolve(myStream);
    // });
    // myStream.on('error', function (err) {
    //   reject(err);
    // });
};
