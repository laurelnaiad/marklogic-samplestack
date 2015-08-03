
module.exports = function (inputStream, ctx, options) {
  var streams = require('../streams');
  var Promise = require('bluebird');
  var portfinder = require('portinder');

  var getLrPort = function (options) {
    if (options.doLiveReload) {
      return new Promise(function (resolve, reject) {
        portfinder.basePort = 35731;
        portfinder.getPort(function (err, port) {
          options.liveReloadPort = port;
          resolve();
        });
      });
    }
    else {
      return Promise.resolve();
    }
  };

  ctx.nodeBuilt = false;
  ctx.browserBuild = false;

  return getLrPort(options)
  .then(function () {
    return new Promise(function (resolve, reject) {
      var myStream = inputStream
        .pipe(streams.buildDeploy(ctx, options));
      myStream.resume();
      myStream.on('end', function () {
        resolve(myStream);
      });
      myStream.on('error', function (err) {
        reject(err);
      });
    });
  });

  // return new Promise(function (resolve, reject) {
  //   // var myStream = srcFiles.pipe($.filelog()); //.pipe($.size()); // debug({ title: 'from build' }));
  //   var myStream = srcFiles
  //     .pipe(streams.buildApp(srcFiles, ctx, {
  //       liveReloadPort:
  //     }));
  //   myStream.resume();
  //   myStream.on('end', function () {
  //     resolve(myStream);
  //   });
  //   myStream.on('error', function (err) {
  //     reject(err);
  //   });
  // });
};
