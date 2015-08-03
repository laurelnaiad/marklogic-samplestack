/**
 * This gulpfile module:
 *
 * * monkey-patches the console to clean it up a bit.
 * * assigns the tasks which are defined in dev-tasks into the gulp
 * process.
 *
 * The gulpfile does not export anythying, it only has side-effects.
 *
 * All of the actual gulp-based functionality is in the
 * {@link dev-tasks dev-tasks module}.
 *
 * @module browser/gulpfile
 * @see {dev-tasks}
 */

var gulp = require('gulp');
var chalk = require('chalk');

var ctx = require('./context');

if (ctx.isWorker) {
  var services = require('./services');
  var tasks = require('./tasks');

  tasks.configure(ctx, services);
  // now gulp takes over and orchestrates the execution of the task(s)
}
//
// // fork the worker process in either debug mode or not based on the
// // --debug[=<portnuber>] flag's presence
//
// var restartChild = function () {
//
// }
//
// if (ctx.isWorkerProcess) {
//   var tasks = require('./tasks');
//   ctx.initialize();
//   tasks.initialize(ctx);
//   // now let gulp do its thing with the task
// }
// else {
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
//   // if the child sends a 'restartChild' message to the parent process
//   // then the parent process , have it
//   // call the restart
//   gulpChild.on('message', function (m) {
//     if (m.restartChild) {
//       self.restartChild();
//     }
//   });
//
//
//   var argsArray = process.argv.slice(2);
//   var gulpChild = childProcess.fork(
//     path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//     argsArray.concat('--parent-pid=' + process.pid),
//     { cwd: process.cwd(), execArgv: execArgv }
//   );
//
//   // if the child sends a 'restartChild' message to the parent process
//   // then the parent process , have it
//   // call the restart
//   gulpChild.on('message', function (m) {
//     if (m.restartChild) {
//       self.restartChild();
//     }
//   });
//   else {
//     // launch the child "normally"
//
//
//   }
//
// }
//
// restartChild: function () {
//   var start = function () {
//     var argsArray = process.argv.slice(2);
//     var execArgv = [];
//     if (argv.debugChild) {
//       execArgv.push('--debug=5859');
//       execArgv.push('--debug-brk');
//     }
//     gulpChild = childProcess.fork(
//       path.resolve(projectRoot, 'node_modules/gulp/bin/gulp.js'),
//       argsArray.concat('--parent-pid=' + process.pid),
//       { cwd: process.cwd(), execArgv: execArgv }
//     );
//
//     // if the child sends a 'restartChild' message to the parent process
//     // then the parent process , have it
//     // call the restart
//     gulpChild.on('message', function (m) {
//       if (m.restartChild) {
//         self.restartChild();
//       }
//     });
//   };
//
//   if (self.parentPid()) {
//     process.send( {'restartChild': true });
//   }
//   else {
//     if (gulpChild) {
//       gulpChild.on('exit', start);
//       gulpChild.kill('SIGINT');
//     }
//     else {
//       start();
//     }
//   }
// }
// };
//
//
// //
// //
// //
// // var consoleLogOrig = console.log;
// //
// // var ctx = require('./shared/js/dev-tasks/context');
// //
// // // expression to test for task names whose starting and ending log messages
// // // we wish to suppress
// // var taskNoLogExpr = new RegExp([
// //   'watch', 'e2e'
// // ].join('|'));
// //
// // /**
// //  * Returns true if a call to task's console.log should is to be suppressed.
// //  * @param {Array} logArgs The arguments passed to console.log.
// //  */
// // var noLogTask = function (logArgs) {
// //   return logArgs.length > 1 &&
// //       (logArgs[1] === 'Starting' || logArgs[1] === 'Finished') &&
// //       taskNoLogExpr.test(chalk.stripColor(logArgs[2]));
// // };
// //
// // /**
// //  * Mokey-patched version of console.log that suppresses log messages which
// //  * are superfluous or distracting for the developer. Gulp developers assure
// //  * that the next version of gulp will have a cleaner way to manage logging.
// //  */
// // console.log = function () {
// //   var args = Array.prototype.slice.call(arguments);
// //   if (noLogTask(args)) {
// //     return;
// //   }
// //   if (args[1] && args[1].match && args[1].match(/Using gulpfile/)) {
// //     return;
// //   }
// //   consoleLogOrig.apply(console, args);
// // };
// //
// // // loop the tasks and assign them into the gulp process
// // var taskName;
// // for (taskName in tasks) {
// //   gulp.task(taskName, tasks[taskName].deps, tasks[taskName].func);
// // }
// //
// // if (!ctx.parentPid() && ctx.currentTask === 'watch') {
// //   gulp.seq = [];
// //   gulp._resetAllTasks();
// //   gulp.reset();
// //   gulp.task(ctx.currentTask, function () {
// //     ctx.restartChild();
// //   });
// // }
