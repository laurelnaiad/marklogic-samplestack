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

/*

see http://mervine.net/clustering-in-nodejs , which explains what this module
does.

 */

var path = require('path');
var options = require('../options');

global.libRequire = function (name) {
  return require(path.resolve(__dirname, '../lib', name));
};

if (options.istanbul) {
  process.env['NO_DEPRECATION'] = 'express';
  var rootDir = path.resolve(__dirname, '..');
  var im = require('istanbul-middleware');
  im.hookLoader(function (filePath) {
    if (filePath.indexOf(rootDir) === 0) {
     var localPath = filePath.substr(rootDir.length);
     return localPath.indexOf('static/deps/') < 0 &&
         localPath.indexOf('test/') < 0;
    }
  });
}

var ldapWorker;
var ssWorker;
var cluster = require('cluster');
var moment = require('moment-timezone');
var run = function () {

  if (options.ldap.useBuiltInServer) {
    ldapWorker = require('./ldapWorker');
    ldapWorker.run();
  }

  /**
   * Setup
   * for thread count, use configured value if available. If not, use one
   * less than the number of cpu cores, or if single-core, use one worker
   **/
  var numWorkers = options.numWorkers ||
      require('os').cpus().length - 1 || // otherwise use one less than number
      1;

  if (numWorkers === 1) {
    ssWorker = require('./samplestackWorker');
  }
  else {
    cluster.setupMaster({
      exec : 'lib/server.js',
    });

    /**
     * Utilities
     **/
    var say = function (message) {
      console.log('[SERVER] ' + message);
    };

    /**
     * Startup Messaging
     **/
    say('Master starting:');
    say('time        => ' + moment().toISOString());
    say('pid         => ' + process.pid);
    say('environment => ' + process.env.NODE_ENV);

    /**
     * Fork Workers
     **/
    say('Workers starting:');

    for (var i = 0; i < numWorkers; i++) {
      cluster.fork();
    }

    /**
     * Worker Event Handlers
     **/
    cluster.on('exit', function (worker, code, signal) {
      say(
        'worker      => with pid: ' + worker.process.pid +
            ', died (' + code + '). Restarting...'
      );
      cluster.fork();
    });

    cluster.on('online', function (worker) {
      say('worker      => start with pid: ' + worker.process.pid + '.');
      say('time        => ' + moment().toISOString());
    });
  }

};

var stopCluster = function () {
  function eachWorker(callback) {
    for (var id in cluster.workers) {
      callback(cluster.workers[id]);
    }
  }
  eachWorker(function (worker) {
    worker.kill();
  });
};

var stop = function () {
  if (!ssWorker) {
    // if we don't have an ssWorker objec then it's a cluster
    stopCluster();
  }
  else {
    ssWorker.stop();
    ssWorker = null;
  }
  if (ldapWorker) {
    ldapWorker.stop();
    ldapWorker = null;
  }
};

var interproc;
try {
  interproc = require('../test/interprocess');
}
catch (e) {
  console.log(e.stack);
}

module.exports = {
  run: run,
  interproc: interproc,
  stop: stop,
  exit: function (cb) { stop(); cb(); },
  close: function (cb) { stop(); cb(); }
};
