var url = require('url');
var ctx = require('../context');
var globs = require('../globs');
var options = require('../../options');

/* external */

var startExternal = function (ctx, cb) {
  ctx.services.selenium = {
    close: function (cb) { cb(); },
    url: url.parse(options.seleniumAddress)
  };
  cb();
};


/* sauce */
var startSauce = function (ctx, cb) {

  var sauceConnectLauncher = require('sauce-connect-launcher');

  var sauceProcess;


  if (
    !options.sauceCredentials.user ||
        !options.sauceCredentials.accessKey
  ) {
    return cb(new Error('Missing SauceLabs credentials'));
  }

  sauceConnectLauncher({
    username: options.sauceCredentials.user,
    accessKey: options.sauceCredentials.accessKey,
    verbose: true
  }, function (err, sauceConnectProcess) {
    if (err) { return cb(new Error(err)); }
    sauceProcess = sauceConnectProcess;
    process.stdout.write('\n');

    ctx.services.selenium = {
      url: url.parse('localhost:4445/wd/hub'),
      close: function (cb) {
        process.stdout.write('shutting down Sauce Connect\n');
        sauceProcess.on('exit', function () {
          cb();
        });
        sauceProcess.kill();
      }
    };

    $.util.log('Sauce Connect ready');
    cb();
  });
};

/* local */
/* selenium local */
var startLocal = function (ctx, cb) {
  var childProcess = require('child_process');
  var path = require('path');

  // var ctx = require('../context');

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

      var selServer = options.addresses.seleniumServer;
      var seleniumPort = selServer.port;

      var seleniumVersion;
      var seleniumJar;
      var seleniumUrl;
      var wd;

      var onPresent = function () {
        var ptorDir = path.join(
          globs.projectDir, 'node_modules/protractor'
        );
        var seleniumJar = getLastJar(path.join(ptorDir, 'selenium'));
        var SeleniumServer = require('selenium-webdriver/remote')
            .SeleniumServer;

        var args = [];
        var chromeArg = '-Dwebdriver.chrome.driver=' +
          path.join(
            globs.projectDir,
            'node_modules/protractor/selenium/chromedriver'
          );
        var phantomArg = '-Dphantomjs.binary.path=' +
          path.join(
            globs.projectDir,
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
        globs.projectDir,
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
  getServer(function (err) {
    if (err) {
      return cb(err);
    }

    server.start({
      stdio: 'inherit'
    })
    .then(function (url) {
      ctx.services.selenium = {
        url: url,
        close: function (cb) {
          cb();
          server.kill();
        }
      };
      cb();
    });
  });
};

module.exports = {
  start: function (ctx) {
    return new Promise(function (resolve, reject) {
      var seleniumHandler;
      switch (ctx.argv.selenium) {
        case 'external':
          $.util.log('using **external** Selenium server');
          seleniumHandler = startExternal;
          break;
        case 'sauce':
          $.util.log('using **self-tunnelled** SauceLabs Selenium server');
          seleniumHandler = startSauce;
          break;
        case 'local':
          $.util.log('using **local** Selenium server');
          seleniumHandler = startLocal;
          break;
        default:
          return reject(new Error(
            'parameter `--selenium` must be one of [external|sauce|local]'
          ));
      }
      seleniumHandler(ctx, function (err) {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      });
    });

  }
};
