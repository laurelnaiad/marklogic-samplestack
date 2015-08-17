var request = require('request');
var Promise = require('bluebird');
var moment = require('moment-timezone');

var self  = {};

var self = module.exports = {
  restApis: {
    get: function (options) {
      return new Promise(function (resolve, reject) {
        request.get(
          {
            url: 'http://localhost:8002/v1/rest-apis/' + options.appName,
            auth: {
              user: options.username,
              pass: options.password,
              sendImmediately: false
            },
            headers: {
              accept: 'application/json'
            }
          },
          function (err, res) {
            if (err) {
              return reject(err);
            }
            if (res.statusCode < 300) {
              resolve(JSON.parse(res.body));
            }
            else {
              if (res.statusCode === 404) {
                resolve(res);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          }
        );
      });
    },
    delete: function (options) {
      var ml = require('..');
      var ts;
      // deleting a REST server requires a restart
      return ml.admin.v1.timestamp(options)
      .then(function (res) {
        ts = moment(res.body);
      })
      .then(function () {
        return new Promise(function (resolve, reject) {
          request(
            {
              method: 'DELETE',
              url: 'http://localhost:8002/v1/rest-apis/' + options.appName,
              auth: {
                user: options.username,
                pass: options.password,
                sendImmediately: false
              },
              headers: {
                accept: 'application/json'
              }
            },
            function (err, res) {
              if (err) {
                return reject(err);
              }
              if (res.statusCode < 300) {
                process.stdout.write(
                  'Waiting for restart ' +
                  '(please restart manually if necessary)...'
                );
                ml.admin.v1.pollForNewTimestamp(options, ts)
                .then(resolve);
              }
              else {
                reject(new Error(JSON.stringify(res)));
              }
            }
          );
        });
      });


    },
    post: function (options) {
      return new Promise(function (resolve, reject) {
        request.post(
          {
            url: 'http://localhost:8002/v1/rest-apis',
            json: {
              'rest-api' : { name: options.appName, port: options.appPort }
            },
            auth: {
              user: options.username,
              pass: options.password,
              sendImmediately: false
            },
            headers: {
              accept: 'application/json'
            }
          },
          function (err, res) {
            if (err) {
              return reject(err);
            }
            if (res.statusCode < 300) {
              resolve();
            }
            else {
              reject(new Error(JSON.stringify(res)));
            }
          }
        );
      });
    }
  }
};
