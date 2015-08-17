module.exports = function (workerManager) {
  var consoleLogOrig = console.log;

  // expression to test for task names whose starting and ending log messages
  // we wish to suppress
  var taskNoLogExpr = new RegExp('[' + [
    'watch', 'e2e', 'db'
  ].join('|') + ']');

  /**
   *
   * Returns true if a call to task's console.log should is to be suppressed.
   * @param {Array} logArgs The arguments passed to console.log.
   */
  var noLog = function (logArgs) {
    if (workerManager === 'worker') {
      return logArgs[1] &&
          logArgs[1].match &&
          logArgs[1].match(taskNoLogExpr) &&
          (
            logArgs[0].match(/Starting/)
          );

    }
    else {
      return logArgs[1] &&
          logArgs[1].match &&
          logArgs[1].match(taskNoLogExpr) &&
          (
            logArgs[0].match(/Finished/)
          );
    }
  };

  /**
   * Mokey-patched version of console.log that suppresses log messages which
   * are superfluous or distracting for the developer. Gulp developers assure
   * that the next version of gulp will have a cleaner way to manage logging.
   */
  console.log = function () {
    var args = Array.prototype.slice.call(arguments);
    if (noLog(args)) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      // consoleLogOrig.apply(console);
      return;
    }
    if (workerManager === 'worker') {
      if (args[0] && args[0].match && args[0].match(/Using gulpfile/)) {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        // consoleLogOrig.apply(console);
        return;
      }
    }

    consoleLogOrig.apply(console, args);
  };

};
