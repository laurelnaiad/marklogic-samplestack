var path = require('path');
var globs = require('../globs');
var childProcess = require('child_process');
var Promise = require('bluebird');

var myProcess;

var launchChild = function (options) {
  var argsArray = process.argv.slice(2);

  var child = childProcess.fork(
    path.join(globs.projectDir, 'shared/js/builds/coverage/main'),
    argsArray,
    { cwd: process.cwd() }
  );
  process.on('exit', function () {
    child.kill();
  });

  console.log('coverageServer PID: ' + child.pid);
  return child;
  //
  //
  // var server = require(
  //   path.resolve(
  //     globs.projectDir,
  //     'shared/js/builds/coverage/lib/master-process'
  //   )
  // );
  //
  // server.run();
  // return server;
};

var doStart = function (options, cb) {
  try {
    myProcess = launchChild(options);
    myProcess.on('exit', function (code) {
      myProcess = null;
      if (code) {
        console.log('coverage server exited with code: ' + code);
      }
    });
    cb();
  }
  catch (err) { cb(err); }
};

var executeUnit = function () {
  return new Promise(function (resolve, reject) {
    myProcess.on('message', function (message) {
      if (message.executeUnitComplete) {
        resolve();
      }
    });
    myProcess.once('exit', function (code) {
      reject(code);
    });
    myProcess.send({ executeUnit: true });
  });
};

module.exports = {
  restart: function (options, cb) {
    if (myProcess) {
      myProcess.on('exit', doStart.bind(null, options, cb));
      myProcess.kill();
    }
    else {
      doStart(options, cb);
    }
  },
  executeUnit: executeUnit
};
