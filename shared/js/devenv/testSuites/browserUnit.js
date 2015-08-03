



var path = require('path');

var chalk = require('chalk');

var Promise = require('bluebird');

var testAndResolve = function () {



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
      console.log('errFinalize');
      console.log(err);
      reject(err);
    };

    var stream = $.mochaPhantomjs({ reporter: 'dot' });
    // clear screen
    // process.stdout.write('\u001b[2J');
    // set cursor position
    // process.stdout.write('\u001b[1;3H');
    process.stdout.write(chalk.blue('\nBrowser Unit Tests:'));
    stream.on('error', errFinalize);
    stream.on('end', finalize);
    stream.on('finish', finalize);
    setTimeout(function () {
      stream.write({ path: 'http://localhost:3001/unit-runner.html' });
      stream.end();
    }, 500);
  });
};



module.exports = function (ctx, options) {

  if (
    options.unit && (ctx.browserBuilt || ctx.nodeBuilt)
    // (options.unit === 'conditional' && ctx.browserBuilt) ||
    // options.unit && options.unit !== 'conditional'
  ) {
    return testAndResolve();
  }
  else {
    return Promise.resolve(null);
  }
};
