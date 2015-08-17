var ml = require('../marklogic');
var gulp = require('gulp');
var path = require('path');
var ctx = require('../context');
var globs = require('../globs');
var Promise = require('bluebird');
var through = require('through2');
var mlStream = require('../streams/buildDeploy/marklogic');

var buildDeployStream = function (options) {

  return new Promise(function (resolve, reject) {
    var dbSrc = gulp.src(globs.dbSrcFiles);
    var piped = dbSrc
    .pipe(mlStream(ctx, options))
    .on('end', resolve)
    .on('error', reject);
  });
};

var self = {};

self.func = function (cb) {
  var myOpts = {
    build: ctx.argv.build, // one of clean, full, or false (the default)
    username: 'admin',
    password: 'admin',
    restUsername: 'samplestack-admin',
    restPassword: 'samplestack-admin-password',
    appName: 'samplestack',
    appPort: 8006,
    allFilesGlob: globs.dbSrcFiles,
    data: {
      host: 'localhost',
      batchSize: 100,
      archiveUrl: 'http://developer.marklogic.com/media/gh/seed-data1.8.2.tgz',
      directory: globs.dataDir,
      username: 'samplestack-contributor',
      password: 'sc-pass',
      port: 8006
    }
  };
  var dataHandlers = require('../dataHandlers');
  myOpts.data.handlers = dataHandlers(myOpts);

  buildDeployStream(myOpts)
  // .then(seedData.bind(null, myOpts))
  .then(cb)
  .catch(function (err) {
    if (err) {
      cb(err);
    }
  });
};

module.exports = self;
  // responseHandler = function (res) {
  //   // check for timestamp reference
  //   // go over status code handlers and dispatch, e.g. if I get
  // }

// markLogicInit (if necessary)
//  POST  ":8001/admin/v1/init"
    // params.contentType = "application/json"
    // params.body = "{}"
    // 401 or 500 already done
    // 403 "unauthorized. stop"
    // success done


// adminInit (if necessary)
//    POST ":8001/admin/v1/instance-admin"
  // params.contentType = "application/json"
  // params.body = String.format(
  // '{ "admin-username" : "%s", "admin-password" : "%s", "realm" : "public" }',
  //  config.marklogic.admin.user, config.marklogic.admin.password)
  // success done
  // 403 "unauthorized. stop"
  // 401 or 500 already done (is this the time to test credentials?)
  //

// initializeAdmin (if necessary)
//
//
//
// adminInit
//   initializeMarkLogic (if necessary)
//   initializeAdmin (if necessary)
//
// // ssRemove (DELETE :8002/v1/rest-apis/<appname>?include=content
// &include=modules)
// //  on error throw (or not)
// // dataRemove  POST ":8002/manage/v2/" + "databases" <dbname>
// //   { operation: 'clear-database'}
// // ssSecurityRemove
// //  for each user,  DELETE ":8002/manage/v2/" "users/<username""
// //   (samplestack-admin, samplestack-guest, samplestack-contributor)
// //  for each role,  DELETE ":8002/manage/v2/" "roles/<rolename""
// //   (samplestack-guest, samplestack-writer)
//
//   var noSpecified = !(
//     ctx.argv.unit || ctx.argv.e2e || ctx.argv.int
//   );
//
//   var all = ctx.argv.all;
//
//   ctx.argv.unit = ctx.argv.unit || noSpecified || all;
//   ctx.argv.e2e = ctx.argv.e2e || all;
//   ctx.argv.int = ctx.argv.int || all;
//
//   watch(cb);
// };
//
// module.exports = self;
