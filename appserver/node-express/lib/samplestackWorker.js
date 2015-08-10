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

// // all paths to libRequire are relative to the lib directory, hence very
// // few upward traversals (options is the exception)
// global.libRequire = function (name) {
//   return require(path.resolve(__dirname, name));
// };

var options = libRequire('../options');
var express = require('express');

// configure Express
var app = express();
var mw;
var url = require('url');

// don't advertise the server technology
app.set('x-powered-by', false);

// above 1024 bytes, use compression (this is te default)
app.use(require('compression')({ threshold: 1024 }));

if (options.istanbul) {
  var istanbulMiddleware = require('istanbul-middleware');
  app.use('/coverage', istanbulMiddleware.createHandler({
    resetOnGet: true
  }));
  app.use(istanbulMiddleware.createClientHandler(
    path.resolve(__dirname, '../static'),
    {
      matcher: function (req) {
        // cover js files that aren't .unit.js and are not ext dependencies
        var parsed = url.parse(req.url).pathname;
        if (!/\.js$/.test(parsed)) {
          return false;
        }
        if (parsed.match(/index\.js/)) {
          // its a modules index file
          return false;
        }
        // if (!(parsed.match(/^\/.+\/.+\//))) {
        //   // it's not deep enough to be the code we really want to test
        //   return false;
        // }
        if (parsed.match(/^\/mocks\//)) {
          // it's part of the mocks modules
          return false;
        }
        var isBrowserify = /\.browserify\.js$/.test(parsed);
        var isTestCode = /\.unit\.js$/.test(parsed);
        // console.log(parsed + ' is test code: ' + isTestCode);
        var isDependency = /^\/deps\//.test(parsed);
        // console.log(parsed + ' is dep. code: ' + isDependency);
        return !(isTestCode || isBrowserify || isDependency);
      }
      // pathTransformer: function (req) {
      // }
    }
  ));
}

var browserBuilt = path.resolve(__dirname, '../static');
var serveStaticDir = express.static(browserBuilt);
var schema = path.resolve(__dirname, '../shared/schema');
var serveSchemaDir = express.static(schema);

app.use(/^\/schema/, function (req, res, next) {
  serveSchemaDir(req, res, next);
});

app.use(/^(?!\/(v1|schema)\/)/, function (req, res, next) {
  if (req.path.indexOf('.') < 0) {
    req.url = '/index.html';
  }
  serveStaticDir(req, res, next);
});

if (options.v1ProxyUrl) {
  var request = require('request');

  app.use('/v1/', function (req, res) {
    req.pipe(
      request({
        url: options.v1ProxyUrl.href + 'v1' + req.url,
        // 31 seconds, one more than the browser will wait
        timeout: 61 * 1000
      })
    )
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(res);
  });
}
else {

  // read/parse cookies all the time on REST endpoints
  app.use('/v1/', require('cookie-parser')());


  // we give the app over to the middleware so that we can put specific error
  // handlers into the app as we define the middleware, even though technically
  // the middleware itself won't live in the app. This lets us put our error
  // handlers close to the code that is triggering the errors
  //
  // THESE TWO LINES ARE WHERE THE MAJORITY OF THE APP IS LOADED/CONFIGURED
  mw = libRequire('middleware')(app);
  libRequire('routing')(app, mw);

  app.use('/v1/', function (err, req, res, next) {
    if (err.status){
      res.status(err.status).send( {error: err });
    }
    else {
      if (err.statusCode){
        res.status(err.statusCode).send( {
          message: err.body.errorResponse.message,
        });
      }
      else {
        // mon.error(500, err);
        res.status(500).send({ error: err });
      }
    }
  });
}

var listener;
if (options.https) {
  listener = require('https').createServer(options.https, app)
      .listen(options.port, options.hostname);
}
else {
  listener = require('http').createServer(app)
      .listen(options.port, options.hostname);
}

process.on('exit', function () {
  listener.close();
});

module.exports = {
  mw: mw,
  stop: function (cb) { listener.close(); if (cb) { cb(); } }
};
