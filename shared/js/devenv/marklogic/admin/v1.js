var request = require('request');
var moment = require('moment-timezone');
var Promise = require('bluebird');

var self  = {};

var waitForTimestamp;

var pollForNewTimestamp = function (credentials) {
  return self.timestamp(credentials).then(
    function (msg) {
      if (msg.statusCode < 300) {
        var ts = moment(msg.body);
        if (waitForTimestamp.isSame(ts)) {
          process.stdout.write('.');
          return Promise.delay(500)
              .then(pollForNewTimestamp.bind(null, credentials));
        }
        else {
          process.stdout.write('restart complete. ');
          waitForTimestamp = null;
          return;
        }
      }
      else {
        process.stdout.write('.');
        return Promise.delay(500)
            .then(pollForNewTimestamp.bind(null, credentials));
      }
    },
    function (err) {
      process.stdout.write('.');
      return Promise.delay(500)
          .then(pollForNewTimestamp.bind(null, credentials));
    }
  );
};

var self = module.exports = {
  pollForNewTimestamp: function (options, timestamp) {
    waitForTimestamp = timestamp;
    return pollForNewTimestamp(options);
  },
  timestamp: function (credentials) {
    return new Promise(function (resolve, reject) {
      request.get(
        {
          url: 'http://localhost:8001/admin/v1/timestamp',
          auth: credentials ?
              {
                user: credentials.username,
                pass: credentials.password,
                sendImmediately: false
              } :
              undefined
        },
        function (err, msg, body) {
          if (err) {
            reject(err);
          }
          else {
            resolve(msg);
          }
        }
      );
    });
  },
  init: function () {
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: 'http://localhost:8001/admin/v1/init',
          json: {}
        },
        function (err, msg, body) {
          if (err) {
            if (err.code === 'ECONNREFUSED') {
              console.log('Is MarkLogic running and serving port 8001?');
            }
            reject(err);
          }
          else {
            if (
              msg.statusCode === 401 ||
              (
                msg.statusCode === 400 &&
                body.errorResponse.messageCode === 'MANAGE-ALREADYINIT'
              )
            ) {
              resolve(false);
            }
            else if (msg.statusCode < 300) {
              waitForTimestamp = moment(body.restart['last-startup'][0].value);
              resolve(true);
            }
            else {
              reject(new Error(JSON.stringify(msg)));
            }
          }
        }
      );
    })
    .then(function (didDo) {
      if (waitForTimestamp) {
        process.stdout.write(
          'Waiting for restart (please restart manually if necessary)...'
        );
        return pollForNewTimestamp().then(function () {
          return didDo;
        });
      }
      else {
        return didDo;
      }
    });
  },
  instanceAdmin: function (credentials) {
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: 'http://localhost:8001/admin/v1/instance-admin',
          json: {
            'admin-username' : credentials.username,
            'admin-password': credentials.password,
            realm : 'public'
          }
        },
        function (err, msg, body) {
          if (err) {
            if (err.code === 'ECONNREFUSED') {
              console.log('Is MarkLogic running and serving port 8001?');
            }
            reject(err);
          }
          else {
            if (
              msg.statusCode === 401 ||
              (
                msg.statusCode === 400 &&
                body.errorResponse.messageCode === 'MANAGE-ALREADYINIT'
              )
            ) {
              resolve(false);
            }
            else if (msg.statusCode < 300) {
              waitForTimestamp = moment(body.restart['last-startup'][0].value);
              resolve(true);
            }
            else {
              reject(new Error(JSON.stringify(msg)));
            }
          }
        }
      );
    })
    .then(function (didDo) {
      // subtle distinction: this one supplies credentials
      if (waitForTimestamp) {
        process.stdout.write(
          'Waiting for restart (please restart manually if necessary)...'
        );
        return pollForNewTimestamp(credentials).then(function () {
          return didDo;
        });
      }
      else {
        return didDo;
      }
    });

  }

};
