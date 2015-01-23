var url = require('url');
var ctx = require('../context');

module.exports = {
  start: function (args, cb) {
    ctx.setActiveServer('selenium', {
      close: function (cb) { cb(); },
      url: ctx.options.addresses.seleniumServer.href
    });
    ctx.seleniumStarted = true;
    cb();
  }
};
