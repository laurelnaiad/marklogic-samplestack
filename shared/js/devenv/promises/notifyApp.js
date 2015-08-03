var Promise = require('bluebird');

module.exports = function (ctx, options) {
  if (ctx.browserBuilt) {
    var server = ctx.services.appServer;
    server.liveReload(options, ['/', '/index.html']);
  }

  return new Promise(function (resolve, reject) {
    console.log('!notifyApp -- menu (preview, tests to follow)');
    resolve();
  });
};
