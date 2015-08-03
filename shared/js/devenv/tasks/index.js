var chalk = require('chalk');

module.exports = {
  // load the tasks into gulp and give each one a ref. to the context
  // object so that htey can share some top level stream and services
  configure: function (ctx) {
    var gulp = require('gulp');
    var tasks = require('requireindex')(__dirname);

    var taskName;
    for (taskName in tasks) {
      var task = tasks[taskName];
      if (task.func) {
        task.ctx = ctx;
        gulp.task(taskName, tasks[taskName].deps || [], tasks[taskName].func);
      }
      else {
        console.log(chalk.yellow('task `' + taskName + '` has no function!'));
      }
    }

  }
};
