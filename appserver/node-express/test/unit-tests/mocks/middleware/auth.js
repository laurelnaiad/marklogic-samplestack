var Promise = require('bluebird');

module.exports = {
  impersonateVisitor: function (sandbox, dbClient) {
    var ssw = libRequire('samplestackWorker');
    return {
      tryReviveSession: sandbox.stub(
        ssw.mw.auth,
        'tryReviveSession',
        function (req, res, next) {
          next();
        }
      ),
      associateBestRole: sandbox.stub(
        ssw.mw.auth,
        'associateBestRole',
        function (roles, req, res, next) {
          req.db = dbClient;
          next();
        }
      )
    };
  },

  // most of our security is in the database layer -- i.e. once we've
  // selected the DB client, we leave it to the database to enforce
  // security. As such, the main issue with testing this code will
  // be in mocking out the MarkLogic client.
  // Nonetheless, for completeness this gives you a req object that
  // appears to have a valid session for JoeUser in it.

  impersonateJoe: function (sandbox, dbClient) {
    var ssw = libRequire('samplestackWorker');
    return {
      tryReviveSession: sandbox.stub(
        ssw.mw.auth,
        'tryReviveSession',
        function (req, res, next) {
          req.user = {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            roles: ['contributors', 'default'],
            displayName: 'JoeUser'
          };
          next();
        }
      ),
      associateBestRole: sandbox.stub(
        ssw.mw.auth,
        'associateBestRole',
        function (roles, req, res, next) {
          req.db = dbClient;
          next();
        }
      )
    };
  }
};
