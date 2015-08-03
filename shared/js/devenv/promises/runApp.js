var Promise = require('bluebird');

module.exports = function (ctx, options) {
  var server = ctx.services.appServer;

  return new Promise(function (resolve, reject) {
    if (ctx.nodeBuilt) {
      server.restart(options, function (err) {
        if (err) {
          reject(err);
        }
        else {
          resolve(server);
        }
      });
    }
    else {
      resolve();
    }
  });
};
