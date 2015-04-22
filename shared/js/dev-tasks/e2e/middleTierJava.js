/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');
var _ = require('lodash');

var helper = require('../helper');
var $ = helper.$;

var ctx = require('../context');
var options = ctx.options;

var childProcess = require('child_process');
var chalk = require('chalk');
var gradleCmd = /^win/.test(process.platform) ? 'gradlew.bat' : './gradlew';

// if custom seed data version is on command line, get from there
var customSeed = require('yargs').argv.seed;

var shellCmd = function (cwd, command, signal, cb) {
  process.stdout.write(chalk.green('\n' + command + '\n'));
  // var backupWd = process.cwd();
  // process.chdir(cwd);
  var commandSplit = command.split(' ');
  var child = childProcess.spawn(
    commandSplit[0],
    commandSplit.slice(1),
    { cwd: cwd }
  );

  if (signal) {
    process.on('exit', function () {
      child.kill('SIGTERM');
    });
  }

  child.on('close', function (exitCode) {
    child.kill();
    if (exitCode && !signaled) {
      return cb(new Error('EXIT CODE: ' + exitCode));
    }
    else {
      return cb();
    }
  });

  var outBuff = '';
  var signaled = false;
  var goodOutput = function (data) {
    if (!signaled) {
      // process.stdout.write(data);
      process.stdout.write('.');
    }
    var message = '';
    outBuff += data;
    if (outBuff.indexOf('\n') > -1) {
      message = outBuff.substr(0, outBuff.toString().indexOf('\n') + 1);
      outBuff = outBuff.substr(outBuff.toString().indexOf('\n') + 1);
      if (!signaled && signal && data.toString().indexOf(signal) > -1) {
        signaled = true;
        return cb(null, child);
      }
      // else {
      //   process.stdout.write(
      //     'signaled' + signaled +
      //     ' signal' + signal + ' ' +
      //     data
      //   );
      // }
    }
  };
  child.stdout.on('data', goodOutput);

  child.stderr.on('data', function (data) {
    if (!signaled) {
      process.stdout.write(chalk.red('\n' + data.toString().trim()));
    }
  });
};

var mtServer;

var pokeServer = function (cb) {
  var request = require('request');
  request.post(
    ctx.options.envs.e2e.addresses.appServer.href + 'v1/search',
    { json: {} },
    cb
  );
};

var closeServer = function (cb) {
  var closed = false;
  console.log('closeServer (enter)');
  mtServer.on('exit', function () {
    console.log('closeServer (on exit)');
    if (!closed) {
      console.log('on exit, was not already closed');
      cb();
      closed = true;
    }
  });
  mtServer.on('close', function () {
    console.log('closeServer (on close)');
    if (!closed) {
      console.log('on close, was not already closed');
      cb();
      closed = true;
    }
  });
  mtServer.kill('SIGTERM');
  console.log('SIGTERM');
};

var start = function (args, cb) {
  var async = require('async');
  console.log(chalk.magenta('reconfiguring database, starting app server'));
  var dirForMiddle = path.join(
    ctx.paths.projectRoot, 'appserver/java-spring'
  );

  var seedFile = path.resolve(
    process.cwd(), '..', 'seed-data' + customSeed + '.tgz'
  );

  var dbLoadParam = customSeed ?
      ' -PseedDataUrl=file://' + seedFile :
      '';
  var loadCmd = gradleCmd + ' dbLoad' + dbLoadParam + ' --stacktrace';

  var hasStarted = false;

  async.series([
    // shellCmd.bind(null, dirForMiddle, gradleCmd + ' dbInit', null),
    // shellCmd.bind(null, dirForMiddle, gradleCmd + ' dbTeardown', null),
    // shellCmd.bind(null, dirForMiddle, gradleCmd + ' dbInit', null),
    // shellCmd.bind(null, dirForMiddle, gradleCmd + ' dbConfigure', null),
    // shellCmd.bind(null, dirForMiddle, gradleCmd + ' test', null),
    // shellCmd.bind(
    //   null, dirForMiddle, loadCmd, null
    // ),
    shellCmd.bind(
      null,
      dirForMiddle,
      gradleCmd + ' bootrun',
      'marklogic.samplestack.Application - Started Application'
    ),
  ], function (err, results) {
    if (!hasStarted) {
      hasStarted = true;
      console.log(' ');
      $.util.log(chalk.green('detected middle tier started'));
      mtServer = results[results.length - 1];
      ctx.setActiveServer('middle-tier', {
        close: closeServer
      });

      pokeServer(function () {
        console.log(chalk.magenta('preparations complete'));
        cb(err);

      });
    }
  });
};

module.exports = {
  start: start,
  close: closeServer
};
