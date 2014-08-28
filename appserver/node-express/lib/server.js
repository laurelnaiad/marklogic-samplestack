module.exports = function (options) {
  var express = require('express');
  var app = express();
  var middleware = require('./middleware');
  var errHandlers = require('./error-handlers');
  middleware.apply(app, [options]);
  errHandlers.apply(app, [options]);

  var httpServer = require('http').createServer(app);

  return httpServer;
};
