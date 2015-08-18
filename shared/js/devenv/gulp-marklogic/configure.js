var path = require('path');
var gulp = require('gulp');
var through = require('through2');
var ml = require('../marklogic');

var databaseProperties = function (options, file) {
  return ml.manage.v2.databases.properties.put(
    options, file.contents
  );
};

var restProperties = function (options, file) {
  return ml.app.v1.config.properties.put(
    options, file.contents
  );
};

var restQueryOptions = function (options, file) {
  var moduleName = path.basename(file.path).replace(/\.[^\.]*$/, '');
  return ml.app.v1.config.query.put(
    options, moduleName, file.contents
  );
};

var restResource = function (options, file) {
  var moduleName = path.basename(file.path).replace(/\.[^\.]*$/, '');
  var contentType = path.extname(file.path) === '.sjs' ?
      'application/javascript' :
      'application/xquery';
  return ml.app.v1.config.resources.put(
    options, moduleName, contentType, file.contents
  );
};

var restTransform = function (options, file) {
  var moduleName = path.basename(file.path).replace(/\.[^\.]*$/, '');
  var contentType = path.extname(file.path) === '.sjs' ?
      'application/javascript' :
      'application/xquery';
  return ml.app.v1.config.transforms.put(
    options, moduleName, contentType, file.contents
  );
};

var securityRoles = function (options, file) {
  var name = path.basename(file.path).replace(/\.[^\.]*$/, '');
  return ml.manage.v2.roles.save(
    options, name, file.contents
  );
};

var securityUsers = function (options, file) {
  var name = path.basename(file.path).replace(/\.[^\.]*$/, '');
  return ml.manage.v2.users.save(
    options, name, file.contents
  );
};

var configureStream = function (options) {

  // these deployments will happen in parallel
  // downstream should not assume any of these files have been deployed
  // until this stream flushes
  var toFullfill = [];
  var stream = through.obj(function (file, enc, cb) {
    var self = this;
    var residualPath = file.path.substr(file.base.length);
    var promise;
    // server-side code and config are processed here and omitted
    // from outgoing stream
    if (residualPath === 'database-properties.json') {
      promise = databaseProperties(options, file);
    }
    else if (residualPath === 'rest-properties.json') {
      promise = restProperties(options, file);
    }
    else if (residualPath.indexOf('options/') === 0) {
      promise = restQueryOptions(options, file);
    }
    else if (residualPath.indexOf('services/') === 0) {
      promise = restResource(options, file);
    }
    else if (residualPath.indexOf('transforms/') === 0) {
      promise = restTransform(options, file);
    }
    else if (residualPath.indexOf('security/roles/') === 0) {
      promise = securityRoles(options, file);
    }
    else if (residualPath.indexOf('security/users/') === 0) {
      promise = securityUsers(options, file);
    }
    // data files are handled later so passed through
    else if (residualPath.indexOf('data/builtin/') === 0) {
      self.push(file);
    }
    if (promise) {
      return promise.then(function () {
        cb();
      }, function (err) {
        cb(err);
      });
    }
    else {
      cb();
    }
  });

  return stream;
};

module.exports = configureStream;
