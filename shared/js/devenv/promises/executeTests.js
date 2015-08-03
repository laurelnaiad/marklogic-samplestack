var Promise = require('bluebird');
var _ = require('lodash');
var path = require('path');
var suites = require('../testSuites');
var request = require('request');
var globs = require('../globs');
var Zip = require('adm-zip');
var fs = require('fs');

module.exports = function (ctx, options) {
  var reportsDir = path.join(globs.sharedDir, 'js/reports');
  // // run unit tests if we see files from the tier
  // unit: 'conditional',
  // e2e: false,
  // int: false
  return new Promise(function (resolve, reject) {

    // TODO: make errors accumulate
    return suites.nodeUnit(ctx, options)
    .then(suites.browserUnit.bind(null, ctx, options))
    .then(suites.integration.bind(null, ctx, options))
    .then(suites.e2e.bind(null, ctx, options))
    .then(function (ctx, options) {
      return new Promise(function (resolve, reject) {
        var ws = fs.createWriteStream(
          path.join(reportsDir, 'tmp.zip')
        );

        var resp = request('http://localhost:3001/coverage/download')
          .pipe(ws)
          .on('finish', function () {
            var zip = new Zip(path.join(reportsDir, 'tmp.zip'));
            zip.extractAllTo(reportsDir, true);
            fs.unlink(path.join(reportsDir, 'tmp.zip'));
            resolve();
          });
      });

    })
    // we resolve with error as return value b/c tests shouldn't
    // fail the process
    .then(function () { resolve(); })
    .catch(resolve);
  });


};
