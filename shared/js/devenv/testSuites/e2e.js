// against coverage server by default
// against test server for debug (avoid covered files)

var Promise = require('bluebird');
module.exports = function (ctx, options) {

  return Promise.resolve(null);
};
