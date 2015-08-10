var chalk = require('chalk');
var services = require('../services');
var promises = require('../promises');


var Promise = require('bluebird');
module.exports = function (ctx, options) {
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

  ctx.argv = _.merge(args, ctx.argv);

  if (!ctx.argv.tags) {
    // by default, do not execute known-broken tests
    ctx.argv.tags = '~@broken';
  }

  if (ctx.argv.sauce && ctx.argv.selenium !== 'external') {
    ctx.argv.selenium = 'sauce';
  }

  var skipNoDesktop = function () {
    if (['linux', 'freebsd', 'sunos'].indexOf(process.platform) >= 0) {
      if (!process.env.DESKTOP_SESSION && !ctx.argv.sauce) {
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


  if (
    skipNoDesktop() ||
    !(ctx.argv.e2e)
  ) {
    return Promise.resolve(null);
  }
  return services.selenium.start(
    ctx
  )
  .then(services.externalMiddleTier.start.bind(null, ctx))
  .then(services.protractor.start.bind(null, ctx));
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
