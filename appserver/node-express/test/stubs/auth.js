var middleware = require('../../lib/middleware');
var stubAuthLogic = {
  getStubsForVisitor: function(sandbox) {
    return {
      tryReviveSession: sandbox.stub(middleware.auth,'tryReviveSession', function (req, res, next) {
        next();
      }),

      associateBestRole: sandbox.stub(middleware.auth,'associateBestRole', function (req, res, next) {
        console.log('associateBestRole');
        req.db = {
          contributor: {
            getUniqueContent: sandbox.mock(function() {
              return new Promise.resolve(contributorDoc);
            })
          }
        };
        next();
      })
    };
  }
};

module.exports = stubAuthLogic;
