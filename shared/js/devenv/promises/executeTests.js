var Promise = require('bluebird');
var _ = require('lodash');

var suites = require('../testSuites');

module.exports = function (ctx, options) {
  // // run unit tests if we see files from the tier
  // unit: 'conditional',
  // e2e: false,
  // int: false
  return new Promise(function (resolve, reject) {

    return suites.nodeUnit(ctx, options)
    .then(suites.browserUnit.bind(null, ctx, options))
    .then(suites.integration.bind(null, ctx, options))
    .then(suites.e2e.bind(null, ctx, options))
    // we resolve with error as return value b/c tests shouldn't
    // fail the process
    .then(function () { resolve(); })
    .catch(resolve);
  });


};
