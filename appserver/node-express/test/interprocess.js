var path = require('path');

var chalk = require('chalk');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var Promise = require('bluebird');

var unitTestRunner = function () {
  return new Promise(function (resolve, reject) {
    var done = false;
    var finalize = function () {
      if (!done) {
        done = true;
        resolve();
      }
      // ctx.closeActiveServer(ctx.options.addresses.unitCoverage.port, cb);
    };

    var errFinalize = function (err) {
      console.log(err.toString());
      reject(err);
    };

    var stream = gulp.src(
      path.join(
        __dirname,
        'unit-tests/**/*'
      ),
      { read: false }
    );

    // clear screen
    // process.stdout.write('\u001b[2J');
    // set cursor position
    // process.stdout.write('\u001b[1;3H');
    process.stdout.write(chalk.blue('\nNode Unit Tests:'));
    stream = stream.pipe(mocha({ reporter: 'dot' }))
      .on('error', errFinalize)
      .once('end', finalize);

  });
};

process.on('message', function (message) {
  if (message.executeUnit) {
    unitTestRunner().then(function () {
      process.send({ executeUnitComplete: true });
    }).catch(function (err) {
      process.send({ executeUnitComplete: true, err: err });
    });
  }
});
