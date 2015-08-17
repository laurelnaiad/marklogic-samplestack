var request = require('request');
var Promise = require('bluebird');
var moment = require('moment-timezone');
var mlClient;


var self  = {};
var getClient = function (options) {
  if (!mlClient) {
    mlClient = require('marklogic')
        .createDatabaseClient({
          host: options.host,
          port: options.port,
          user: options.username,
          password: options.password
        });
  }
  return mlClient;
};

var self = module.exports = {
  documents: {
    write: function (options, toWrite) {
      return getClient(options)
        .documents.write(toWrite).result();
    }
  },
  config: {
    properties: {
      put: function (options, content) {
        return new Promise(function (resolve, reject) {
          request.put(
            {
              url: 'http://localhost:' + options.appPort +
                  '/v1/config/properties',
              auth: {
                // user: options.restUsername,
                // pass: options.restPassword,
                user: options.username,
                pass: options.password,
                sendImmediately: false
              },
              headers: {
                accept: 'application/json',
                'content-type': 'application/json'
              },
              body: content
            },
            function (err, res) {
              if (err) {
                return reject(err);
              }
              if (res.statusCode < 300) {
                resolve(res.body);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          );
        });
      }
    },
    query: {
      put: function (options, name, content) {
        return new Promise(function (resolve, reject) {
          request.put(
            {
              url: 'http://localhost:' + options.appPort +
                  '/v1/config/query/' + name,
              auth: {
                // user: options.restUsername,
                // pass: options.restPassword,
                user: options.username,
                pass: options.password,
                sendImmediately: false
              },
              headers: {
                accept: 'application/json',
                'content-type': 'application/json'
              },
              body: content
            },
            function (err, res) {
              if (err) {
                return reject(err);
              }
              if (res.statusCode < 300) {
                resolve(res.body);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          );
        });
      }
    },
    resources: {
      put: function (options, name, contentType, content) {
        return new Promise(function (resolve, reject) {
          request.put(
            {
              url: 'http://localhost:' + options.appPort +
                  '/v1/config/resources/' + name,
              auth: {
                // user: options.restUsername,
                // pass: options.restPassword,
                user: options.username,
                pass: options.password,
                sendImmediately: false
              },
              headers: {
                accept: 'application/json',
                'Content-Type': contentType
              },
              body: content
            },
            function (err, res) {
              if (err) {
                return reject(err);
              }
              if (res.statusCode < 300) {
                resolve(res.body);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          );
        });
      }
    },
    transforms: {
      put: function (options, name, contentType, content) {
        return new Promise(function (resolve, reject) {
          request.put(
            {
              url: 'http://localhost:' + options.appPort +
                  '/v1/config/transforms/' + name,
              auth: {
                // user: options.restUsername,
                // pass: options.restPassword,
                user: options.username,
                pass: options.password,
                sendImmediately: false
              },
              headers: {
                accept: 'application/json',
                'Content-Type': contentType
              },
              body: content
            },
            function (err, res) {
              if (err) {
                return reject(err);
              }
              if (res.statusCode < 300) {
                resolve(res.body);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          );
        });
      }
    }
  },
  graphs: {
    write: function (options, uri, contentType, content) {
      var writer = getClient(options)
          .graphs.write(uri, contentType, content);
      return writer.result();
    }
  }
};
