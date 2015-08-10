var chalk = require('chalk');
var services = require('../services');
var promises = require('../promises');

// var usage = 'USAGE: `gulp e2e --<pform>`` where <pform> in [java|node]';
var args = {
  reporter: 'pretty',
  selenium: 'local',
  sauce: false,
  toFile: false,
  middleTier: 'external', // or 'java' or 'node',
  browser: 'chrome'
  // or 'chrome' or 'firefox' or 'ie' or 'phantomjs'
};

_.merge(args, require('yargs').argv);

if (!args.tags) {
  // by default, do not execute known-broken tests
  args.tags = '~@broken';
}

if (args.sauce && args.selenium !== 'external') {
  args.selenium = 'sauce';
}

var skipNoDesktop = function () {
  if (['linux', 'freebsd', 'sunos'].indexOf(process.platform) >= 0) {
    if (!process.env.DESKTOP_SESSION && !args.sauce) {
      console.log(
        chalk.yellow(
          'Skipping e2e testing because there is no desktop environment'
        )
      );
      return true;
    }
  }
  return false;
};


var Promise = require('bluebird');
module.exports = function (ctx, options) {
  if (
    skipNoDesktop() ||
    !(options.e2e)
  ) {
    return Promise.resolve(null);
  }
  return services.selenium.start(
    { selenium: 'local' }
  )
  .then(services.externalMiddleTier.start.bind(null, {}))
  .then(services.protractor.start.bind(null, { args: args }));
  // .then(function () {
  //   console.log(require('util').inspect(require('../promises')));
  //   // promises.protractor.bind(null, {}));
  // });
  // ;
};
  // return Promise.resolve(null);

  // skip no desktop?
  // selenium start (or not)
  // middle-tier start (or not)
  // protractor(args)
