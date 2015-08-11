var Promise = require('bluebird');
var path = require('path');
var globs = require('../globs');
var childProcess = require('child_process');

var myProcess;
var lrServer;
var liveReloadChanger;

var ensureLiveReload = function (options, cb) {
  if (!lrServer) {
    var tinylr = require('tiny-lr-fork');

    lrServer = new tinylr.Server();
    lrServer.listen(options.liveReloadPort, function () {
      liveReloadChanger = function (files) {
        lrServer.changed({ body: { files: files } });
      };
      cb();
    });
  }
  else {
    cb();
  }
};

var launchChild = function (options) {
  var ctx = require('../context');
  var execArgv = [];


  return new Promise(function (resolve, reject) {
    if (ctx.argv.debugBrk) {
      ctx.argv.debug = ctx.argv.debug || true;
    }
    if (ctx.argv.debug) {
      ctx.findPort(5959).then(resolve);
    }
    else {
      resolve(false);
    }
  })
  .then(function (debugPort) {
    if (debugPort) {
      // launch the child with debegging enabled`
      execArgv.push('--debug=' + debugPort);
      if (ctx.argv.debugBrk) {
        execArgv.push('--debug-brk');
      }
    }

    var child = childProcess.fork(
      path.join(globs.projectDir, 'shared/js/builds/app/main'),
      [],
      { cwd: process.cwd(), execArgv: execArgv }
    );
    process.on('exit', function () {
      child.kill();
    });

    console.log('appServer PID: ' + child.pid);
    return child;
  });
};

var doStart = function (options, cb) {
  try {
    launchChild(options).then(function (childProc) {
      myProcess = childProc;
      myProcess.on('exit', function (code) {
        myProcess = null;
        if (code) {
          console.log('app server exited with code: ' + code);
        }
      });
      cb();
    });
  }
  catch (err) { cb(err); }
};

module.exports = {
  liveReload: function (options, files) {
    // var args = Array.prototype.slice.call(arguments);
    // console.log('try to livereload ' + JSON.stringify(args));
    ensureLiveReload(options, function () {
      liveReloadChanger(files);
    });
  },

  restart: function (options, cb) {
    ensureLiveReload(options, function () {
      if (myProcess) {
        myProcess.on('exit', doStart.bind(null, options, cb));
        myProcess.kill();
      }
      else {
        doStart(options, cb);
      }
    });
  }
};
