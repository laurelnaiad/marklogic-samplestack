var streams = require('../streams');
var Promise = require('bluebird');
var rimraf = require('rimraf');
var path = require('path');
var globs = require('../globs');

module.exports = function (ctx) {
  return new Promise(function (resolve, reject) {
    if (ctx.clean) {
      // console.log('cleaning');
      rimraf(path.join(globs.projectDir, 'shared/js/builds'), resolve);
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
