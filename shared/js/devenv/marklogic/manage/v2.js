var request = require('request');
var Promise = require('bluebird');
var moment = require('moment-timezone');
var lodash = require('lodash');

var self  = {};

var self = module.exports = {
  databases: {
    properties: {
      put: function (options, content) {
        return new Promise(function (resolve, reject) {
          request.put(
            {
              url: 'http://localhost:8002/manage/v2/databases/' +
                  options.appName + '/properties',
              auth: {
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
    }
  },
  roles: {
    save: function (options, rolename, content) {
      var opts = {
        auth: {
          user: options.username,
          pass: options.password,
          sendImmediately: false
        },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
      };

      return new Promise(function (resolve, reject) {
        request.post(
          _.merge({
            url: 'http://localhost:8002/manage/v2/roles',
            body: content
          }, opts),
          function (err, res) {
            if (err) {
              reject(err);
            }
            else if (
              res.statusCode === 400 &&
              JSON.parse(res.body).errorResponse.messageCode ===
                  'MANAGE-CONFLICTINGCONFIG'
            ) {
              request.put(
                _.merge({
                  url: 'http://localhost:8002/manage/v2/roles/' +
                      rolename + '/properties',
                  body: content
                }, opts),
                function (err, res) {
                  if (err) {
                    reject(err);
                  }
                  else if (res.statusCode < 300) {
                    resolve(res.body);
                  }
                  else {
                    reject(res);
                  }
                }
              );
            }
            else if (res.statusCode < 300) {
              resolve(res.body);
            }
            else {
              reject(res);
            }
          }
        );
      });
    }
  },
  users: {
    save: function (options, name, content) {
      var opts = {
        auth: {
          user: options.username,
          pass: options.password,
          sendImmediately: false
        },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
      };

      return new Promise(function (resolve, reject) {
        request.post(
          _.merge({
            url: 'http://localhost:8002/manage/v2/users',
            body: content
          }, opts),
          function (err, res) {
            if (err) {
              reject(err);
            }
            else if (
              res.statusCode === 400 &&
              JSON.parse(res.body).errorResponse.messageCode ===
                  'MANAGE-CONFLICTINGCONFIG'
            ) {
              request.put(
                _.merge({
                  url: 'http://localhost:8002/manage/v2/users/' +
                      name + '/properties',
                  body: content
                }, opts),
                function (err, res) {
                  if (err) {
                    reject(err);
                  }
                  else if (res.statusCode < 300) {
                    resolve(res.body);
                  }
                  else {
                    reject(res);
                  }
                }
              );
            }
            else if (res.statusCode < 300) {
              resolve(res.body);
            }
            else {
              reject(res);
            }
          }
        );
      });
    }
  }
};
