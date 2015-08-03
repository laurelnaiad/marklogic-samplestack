var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (ctx, options) {

  // var myOptions = _.merge(_.clone(options), { istanbul: true });
  var myOptions = _.merge(_.clone(options), { istanbul: true });
  var server = ctx.services.coverageServer;

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
