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
      if (ctx.argv.debugBrk) {
        ctx.argv.debug = ctx.argv.debug || true;
      }
      ctx.debugPort = ctx.argv.debug === true ? 5858 : ctx.argv.debug;
      if (ctx.debugPort) {
        // launch the child with debegging enabled`
        execArgv.push('--debug=' + ctx.debugPort);
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

      // if the child sends a 'restartChild' message to the parent process
      // then the parent process , have it
      // call the restart
      worker.on('message', function (message) {
        if (message.restartWorker) {
          // console.log('got restartWorker from worker');
          manageWorker.restartWorker();
        }
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
  //   console.log('process: ' + process.pid + ' got SIGINT');
  //   // if (ctx.managerPid || !worker) {
  //   //   console.log(
  //   //     'worker or manager with no worker got SIGINT: ' + process.pid
  //   //   );
  //   //   // this is a  worker process or a manager process with no living child
  //   //   // shutdown the context and exit the worker process
  //   //   ctx.shutdown(0, process.exit);
  //   // }
  //   // else {
  //   // as the parent process, a SIGINT means close the child (if there is
  //   // one), then self
  //   if (worker) {
  //     console.log('manager got SIGINT');
  //     // this message will eventually get things cleaned up and then exit
  //     // sigint thus
  //     worker.once('exit', process.exit);
  //     worker.kill('SIGINT');
  //   }
  //   else {
  //     // no chid process means we weren't really doing anything anyway
  //     process.exit(0);
  //   }
  // });

  // process.on('exit', function (code) {
  //   if (ctx.isWorker) {
  //     console.log('worker exit');
  //     process.send
  //     manageWorker.setWorkerExitCode(code);
  //   }
  //   else {
  //     console.log('manager exit with worker code ' + ctx.workerExitCode);
  //     code = ctx.workerExitCode;
  //   }
  //   process.reallyExit(ctx.exitCode);
  // });
  //
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
//
//
// // waht is the name of the task we're assigned to run?
// var currentTask = argv._[0] || 'default',
//
//   // start or gently restart a child version of the process.
//   // as the child is started, set it up to listen for restartChild
//   // messages.. If not currently running as a child, send the message
//   // to the child.
//   // "Gently" restarting a child means sending the child a SIGINT and waiting
//   // for it to exit.
//   // TODO: This code say that if this is the parent process, recurse the
//   // function, but why is that?
//   restartChild: function () {
//     var start = function () {
//       var argsArray = process.argv.slice(2);
//       var execArgv = [];
//       if (argv.debugChild) {
//         execArgv.push('--debug=5859');
//         execArgv.push('--debug-brk');
//       }
//       gulpChild = childProcess.fork(
//         path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//         argsArray.concat('--parent-pid=' + process.pid),
//         { cwd: process.cwd(), execArgv: execArgv }
//       );
//
//       // if the child sends a 'restartChild' message to the parent process
//       // then the parent process , have it
//       // call the restart
//       gulpChild.on('message', function (m) {
//         if (m.restartChild) {
//           self.restartChild();
//         }
//       });
//     };
//
//     if (self.parentPid()) {
//       process.send( {'restartChild': true });
//     }
//     else {
//       if (gulpChild) {
//         gulpChild.on('exit', start);
//         gulpChild.kill('SIGINT');
//       }
//       else {
//         start();
//       }
//     }
//   }
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var manageWorker = {
//
//   restartChild: function () {
//     if (self.parentPid()) {
//       process.send( {'restartChild': true });
//     }
//     else {
//       if (gulpChild) {
//         gulpChild.on('exit', start);
//         gulpChild.kill('SIGINT');
//       }
//       else {
//         start();
//       }
//     }
//
//   };
//
// };
//
// manageWorker.beManager = function(ctx) {
//   ctx.processArgs = require('yargs').argv;
//   ctx.taskFromCommand = ctx.processArgs._[0] || 'default';
//
//
//   if (ctx.processArgs.parentPid) {
//     // not a manager
//
//     manageWorker
//     // return false;
//
//   }
//   // the parent process is just in charge of restarting the child
//   // if it exits because we're trying to restart it
//   // So, create the worker process
//   // fork the worker process in either debug mode or not based on the
//   // --debug[=<portnuber>] flag's presence
//
//   // tell the worker process this master's process id
//   var execArgv = [];
//   if (ctx.debugPort) {
//     // launch the child with debegging enabled`
//     execArgv.push('--debug=' + ctx.debugPort);
//     if (ctx.argv.debugBrk) {
//       execArgv.push('--debug-brk');
//     }
//   }
//   var argsArray = process.argv.slice(2);
//   gulpChild = childProcess.fork(
//     path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//     argsArray.concat('--parent-pid=' + process.pid),
//     { cwd: process.cwd(), execArgv: execArgv }
//   );
//
// };
//
// var configure = function (ctx) {
//   ctx.processArgs = require('yargs').argv;
//   ctx.taskFromCommand = ctx.processArgs._[0] || 'default';
//
//
//   if (ctx.processArgs.managerPid) {
//     // not a manager, just give the child a way to signal the manager
//
//     manageWorker.isManager = false;
//     manageWorker.restartMe = function () {
//       process.send ( { restartMe: true });
//     };
//
//     return manageWorker;
//     // return false;
//
//   }
//   else {
//     manageWorker.isManager = true;
//
//     // tell the worker process this master's process id
//     var execArgv = [];
//     if (ctx.debugPort) {
//       // launch the child with debegging enabled`
//       execArgv.push('--debug=' + ctx.debugPort);
//       if (ctx.argv.debugBrk) {
//         execArgv.push('--debug-brk');
//       }
//     }
//     var argsArray = process.argv.slice(2);
//     gulpChild = childProcess.fork(
//       path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//       argsArray.concat('--parent-pid=' + process.pid),
//       { cwd: process.cwd(), execArgv: execArgv }
//     );
//   }
//   // the parent process is just in charge of restarting the child
//   // if it exits because we're trying to restart it
//   // So, create the worker process
//   // fork the worker process in either debug mode or not based on the
//   // --debug[=<portnuber>] flag's presence
//
//   // tell the worker process this master's process id
//   var execArgv = [];
//   if (ctx.debugPort) {
//     // launch the child with debegging enabled`
//     execArgv.push('--debug=' + ctx.debugPort);
//     if (ctx.argv.debugBrk) {
//       execArgv.push('--debug-brk');
//     }
//   }
//   var argsArray = process.argv.slice(2);
//   gulpChild = childProcess.fork(
//     path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//     argsArray.concat('--parent-pid=' + process.pid),
//     { cwd: process.cwd(), execArgv: execArgv }
//   );
// };
//
//
// module.exports = {
//   configure: functionmanageWorker;
