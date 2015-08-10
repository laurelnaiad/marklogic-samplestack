var options = require('../../options');
var globs = require('../globs');
var path = require('path');
var fs = require('fs');
var cp = require('child_process');

var go = function (opts, cb) {
  var args = opts.args;
  console.log('go');
  var Runner = require('protractor/lib/runner');

  var ptorConfig = {
    stackTrace: false,
    getPageTimeout: 180000,
    allScriptsTimeout: 180000,
    // TODO: fixme!!!
    baseUrl: 'http://localhost:3001/', //options.envs.e2e.addresses.webApp.href,
    rootElement: 'html',
    chromeOnly: false,
    framework: 'cucumber',
    maxSessions: 3,
    specs: require('globule').find(
      path.resolve(globs.projectDir, 'specs/features/**/*.feature')
    ),

    cucumberOpts: {
      require: path.join(
        globs.cucumberSupportDir, '**/*.js'
      ),

      // tags: '@dev', use to subset the tests -- tbd how to incporporate into
      // the process https://github.com/angular/protractor/pull/546

      // to get to xunit we generate json and then reformat after the fact
      // format: args.reporter !== 'xunit' ? args.reporter : 'json'
    },

    capabilities: {
      'phantomjs.binary.path': require('phantomjs').path,
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
      'webdriver.ie.driver': 'IEDriverServer.exe',

      onCleanup: function () {
        console.log('cleanup');
      },
      onComplete: function () {
        console.log('complete');
      }
    }
  };

  if (args.browser === 'ie') {
    var sjs = require('shelljs');
    sjs.exec(
      'node ' +
          path.normalize(' node_modules/protractor/bin/webdriver-manager') +
          ' update --ie'
    );
    process.env.path += ';' +
        path.resolve(globs.projectDir, 'node_modules/protractor/selenium');
  }

  // sauce/IE doens't like "localhost", so we punt.
  // running on Sauce now requires this hosts file entry
  if (args.sauce) {
    ptorConfig.baseUrl =
    ptorConfig.baseUrl.replace('localhost', 'samplestack.local');
  }

  if (args.tags) {
    ptorConfig.cucumberOpts.tags = [args.tags];
  }
  if (args.sauce) {
    var multiCapabilities;
    if (args.sauce === true || args.sauce === 'supported') {
      multiCapabilities = _.values(
        _.pick(options.sauceBrowsers, function (cap, key) {
          return options.supportedBrowsers.indexOf(key) >= 0;
        })
      );
    }
    else {
      if (args.sauce === 'all') {
        multiCapabilities = _.values(options.sauceBrowsers);
      }
      else {
        multiCapabilities = [options.sauceBrowsers[args.sauce]];
      }
    }
    _.each(multiCapabilities, function (cap) {
      cap['idle-timeout'] = 360;
    });
    _.merge(ptorConfig, {
      sauceUser: options.sauceCredentials.user,
      sauceKey: options.sauceCredentials.accessKey,
      sauceSeleniumAddress: require('../context')
          .services.selenium.url.href,
      multiCapabilities: multiCapabilities
    });
    ptorConfig.capabilities = {};
  }
  else {
    var browsers = {
      'ie': 'internet explorer',
      'chrome': 'chrome',
      'ff': 'firefox',
      'firefox': 'firefox',
      'phantomjs': 'phantomjs',
    };
    ptorConfig.capabilities.browserName = browsers[args.browser];
    ptorConfig.seleniumAddress = require('../context')
        .services.selenium.url;
  }
  if (args.reporter === 'xunit') {
    ptorConfig.cucumberOpts.format = 'json';
  }
  else {
    ptorConfig.cucumberOpts.format = args.reporter;
  }

  var ptorString = JSON.stringify(ptorConfig, null, ' ');
  ptorString = 'exports.config = ' + ptorString + ';\n';
  var confPath = path.join(__dirname, 'protractor.conf');
  fs.writeFileSync(confPath, ptorString);


  var ptorPath = path.resolve(
    globs.projectDir, 'node_modules/protractor/bin/protractor'
  );

  var ptorProc = cp.spawn('node', [ptorPath, confPath], { stdio: 'inherit' });
  ptorProc.on('exit', function (code) {
    cb(code);
  });

  // var cucumberParser = require('./cucumberParser');
  // cucumberParser.handle(args, ptorConfig, ptorProc, cb);
};

module.exports = {
  start: function (options) {
    return new Promise(function (resolve, reject) {
      go(options, resolve);
    });
  }
};
