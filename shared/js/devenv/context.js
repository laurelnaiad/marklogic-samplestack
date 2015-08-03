var ctx = {};
var chalk = require('chalk');
var path = require('path');



var globs = require('./globs');

ctx.argv = require('yargs').argv;
ctx.taskFromCommand = ctx.argv._[0] || 'default';

var manageWorker = require('./manageWorker')(ctx);

if (ctx.isWorker) {
  global.$ = require('gulp-load-plugins')({
    config: path.join(globs.projectDir, 'package.json')
  });



}
ctx.taskWrap = function (promise, cb) {

  promise.then(function () {
    cb();
  })
  .catch(function (problem) {
    if (Error.prototype.isPrototypeOf(problem)) {
      cb(problem);
    }
    else {
      cb(new Error(problem));
    }

  });

};

ctx.shutdown = function (err, cb) {
  cb(err);
};

ctx.services = require('./services');

module.exports = ctx;
