/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



// TODO: docs
//
// TODO in general, we should think about using a port-finding technique
// in case ports are occupied, and/or give clear messages in those cases
// so that the developer can reconfigure

var Promise = require('bluebird');
var _ = require('lodash');
var path = require('path');
var childProcess = require('child_process');
var gulp = require('gulp');

// var minimist = require('minimist');

var globs = require('./globs');




module.exports = function (ctx) {
  var manageWorker = {};

  ctx.managerPid = ctx.argv.managerPid;
  ctx.isWorker = ctx.managerPid !== undefined;

  if (ctx.isWorker) {
    require('./consoleHacks')('worker');
  }
  else {
    require('./consoleHacks')('manager');
  }

  ctx.isManager = !ctx.isWorker;

  var worker;

  manageWorker.restartWorker = function () {
    var start = function () {
      // console.log('manageWorker.restartWorker.start');
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
        var argsArray = process.argv.slice(2);
        worker = childProcess.fork(
          path.resolve(globs.projectDir, 'node_modules/gulp/bin/gulp.js'),
          argsArray.concat('--manager-pid=' + process.pid),
          { cwd: process.cwd(), execArgv: execArgv }
        );
        // worker.on('exit', process.exit);

        console.log(
          'manager PID: ' + process.pid + ', worker PID: ' + worker.pid
        );
        if (debugPort) {
          console.log('worker debug port: ' + debugPort);
        }

        // if the child sends a 'restartChild' message to the parent process
        // then the parent process , have it
        // call the restart
        worker.on('message', function (message) {
          if (message.restartWorker) {
            // console.log('got restartWorker from worker');
            manageWorker.restartWorker();
          }
        });
      });
    };

    if (ctx.isWorker) {
      // send message to manager asking it to restart this process
      // crosses back to parent process' worker.on('message') handler above
      // console.log('send restartWorker to manager');
      process.send( {'restartWorker': true });

    }
    else {
      if (worker) {
        // do a onetime restart
        worker.on('exit', function (code) {
          // console.log('on exit, start');
          start();
        });
        // console.log('killing worker PID: ' + worker.pid);
        worker.kill('SIGINT');
      }
      else {
        // do a fresh start
        start();
      }
    }
  };


  // sigints are used to kill the gulp processes
  process.on('SIGINT', function () {
    // console.log('GOT SIGINT');
    if (ctx.isWorker) {
      ctx.shutdown(0, process.exit);
    }
    else {
      if (worker) {
        worker.on('exit', function () {
          process.exit(0);
        });
        worker.kill('SIGINT');
      }
      else {
        process.exit(0);
      }
    }
  });

  if (ctx.isManager) {
    require('./consoleHacks')('manager');

    // this is like "shelling out the child but in gulp"
    gulp.seq = [];
    gulp._resetAllTasks();
    gulp.reset();
    gulp.task(ctx.taskFromCommand, function (cbNeverComes) {
      manageWorker.restartWorker();
    });
  }
  else {
    ctx.restartTask = manageWorker.restartWorker;
  }

  return manageWorker;
};
