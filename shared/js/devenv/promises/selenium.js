/* external */
var url = require('url');
var ctx = require('../context');

module.exports = {
  start: function (args, cb) {
    ctx.setActiveServer('selenium', {
      close: function (cb) { cb(); },
      url: url.parse(args.seleniumAddress)
    });
    ctx.seleniumStarted = true;
    cb();
  }
};


/* sauce */

var url = require('url');

var sauceConnectLauncher = require('sauce-connect-launcher');
var helper = require('../helper');
var $ = helper.$;

var ctx = require('../context');
var sauceProcess;

var sauceStart = function (args, cb) {
  ctx.seleniumStarted = false;

  if (
    !ctx.options.sauceCredentials.user ||
        !ctx.options.sauceCredentials.accessKey
  ) {
    return cb(new Error('Missing SauceLabs credentials'));
  }

  sauceConnectLauncher({
    username: ctx.options.sauceCredentials.user,
    accessKey: ctx.options.sauceCredentials.accessKey,
    verbose: true
  }, function (err, sauceConnectProcess) {
    if (err) { return cb(new Error(err)); }
    sauceProcess = sauceConnectProcess;
    process.stdout.write('\n');

    ctx.setActiveServer('selenium', {
      url: url.parse('localhost:4445/wd/hub'),
      close: function (cb) {
        process.stdout.write('shutting down Sauce Connect\n');
        sauceProcess.on('exit', function () {
          cb();
        });
        sauceProcess.kill();
      }
    });

    $.util.log('Sauce Connect ready');
    ctx.seleniumStarted = true;
    cb();
  });
};

module.exports = {
  start: sauceStart
};

/* local */
/* selenium local */
var childProcess = require('child_process');
var path = require('path');

var ctx = require('../context');

var getLastJar = function (dir) {
  var g = require('globule');

  var paths = g.find(path.join(dir, '*.jar'));
  if (paths.count < 1) {
    throw new Error('cannot find Selenium .jar file in ' + dir);
  }
  return paths.sort()[paths.length - 1];
};


var server;

// set up server object, if necessary downloading the jar to do so
// set serverUrl once configured
// read PORT from ctx.options.addresses.seleniumServer, ignore other parts
// of that url
var getServer = function (cb) {
  try {

    var selServer = ctx.options.addresses.seleniumServer;
    var seleniumPort = selServer.port;

    var seleniumVersion;
    var seleniumJar;
    var seleniumUrl;
    var wd;

    var onPresent = function () {
      var ptorDir = path.join(ctx.paths.projectRoot, 'node_modules/protractor');
      var seleniumJar = getLastJar(path.join(ptorDir, 'selenium'));
      var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

      var args = [];
      var chromeArg = '-Dwebdriver.chrome.driver=' +
        path.join(
          ctx.paths.projectRoot,
          'node_modules/protractor/selenium/chromedriver'
        );
      var phantomArg = '-Dphantomjs.binary.path=' +
        path.join(
          ctx.paths.projectRoot,
          'node_modules/phantomjs/bin/phantomjs'
        );

      args.push(chromeArg);
      args.push(phantomArg);

      server = new SeleniumServer(seleniumJar, {
        port: seleniumPort,
        args: args
      });
      cb(null);

    };

    var wdManager = path.join(
      ctx.paths.projectRoot,
      'node_modules/protractor/bin/webdriver-manager'
    );

    var proc = childProcess.spawn(
      'node',
      [wdManager, 'update'],
      {
        stdio: 'inherit'
      }
    );
    proc.on('error', cb);
    proc.once('close', onPresent);
  }
  catch (err) {
    cb(err);
  }
};

var close;
var start = function (args, cb) {
  ctx.seleniumStarted = false;
  getServer(function (err) {
    if (err) {
      return cb(err);
    }

    server.start({
      stdio: 'inherit'
    })
    .then(function (url) {
      console.log('url = ' + require('util').inspect(url));
      ctx.seleniumStarted = true;
      ctx.setActiveServer('selenium', {
        url: url,
        close: function (cb) {
          cb();
          server.kill();
        }
      });
      cb();
    });
  });
};

module.exports = {
  start: start
};
