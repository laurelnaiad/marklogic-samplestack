var path = require('path');
var _ = require('lodash');

var chalk = require('chalk');

var ctx = require('../context');

var helper = require('../helper');
var $ = helper.$;
var myTasks = [];

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

var seleniumStart = function (cb) {
  var seleniumHandler;
  switch (args.selenium) {
    case 'external':
      $.util.log('using **external** Selenium server');
      seleniumHandler = require('../e2e/seleniumExternal');
      break;
    case 'sauce':
      $.util.log('using **self-tunnelled** SauceLabs Selenium server');
      seleniumHandler = require('../e2e/seleniumSauce');
      break;
    case 'local':
      $.util.log('using **local** Selenium server');
      seleniumHandler = require('../e2e/seleniumLocal');
      break;
    default:
      return cb(new Error(
        'parameter `--selenium` must be one of [external|sauce|local]'
      ));
  }
  return seleniumHandler.start(args, cb);
};

var middleTierStart = function (cb) {
  var middleTierHandler;
  switch (args.middleTier) {
    case 'external':
      middleTierHandler = require('../e2e/middleTierExternal');
      break;
    case 'java':
      middleTierHandler = require('../e2e/middleTierJava');
      break;
    case 'node':
      return cb(new Error('Node.js middle-tier testing not yet implmeneted'));
    default:
      return cb(new Error(
        'parameter `--selenium` must be one of [external|sauce|local]'
      ));
  }
  middleTierHandler.start(args, cb);
};


myTasks.push({
  name: 'selenium-start',
  deps: [ 'middle-tier-start' ],
  func: seleniumStart
});

myTasks.push({
  name: 'middle-tier-start',
  func: middleTierStart
});

var protractorHandler;
var protractorRun = function (cb) {
  protractorHandler = require('../e2e/protractor');
  protractorHandler.go(args, cb);
};

myTasks.push({
  name: 'e2e',
  deps: ['build', 'selenium-start', 'middle-tier-start'],
  func: function (cb) {
    try {
      ctx.startServer(
        ctx.paths.browser.buildDir,
        ctx.options.envs.e2e.addresses.webApp.port
      );

      protractorRun(function () {
        process.kill('SIGINT');
      });
      cb();
    }
    catch (err) {
      cb(err);
    }
  }
});

module.exports = myTasks;
