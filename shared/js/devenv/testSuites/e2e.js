var chalk = require('chalk');

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

var skipNoDesktop = function (task) {
  if (['linux', 'freebsd', 'sunos'].indexOf(process.platform) >= 0) {
    if (!process.env.DESKTOP_SESSION && !args.sauce) {
      console.log(
        chalk.yellow(
          'Skipping task ' + task + ' because there is no desktop environment'
        )
      );
      return true;
    }
  }
  return false;
};


var Promise = require('bluebird');
module.exports = function (ctx, options) {

  return Promise.resolve(null);

  // skip no desktop?
  // selenium start (or not)
  // middle-tier start (or not)
  // protractor(args)
};
