var Promise = require('bluebird');

module.exports = {
  stubBusinessLogic: function (sandbox, response) {
    var bl = require('../../../../lib/business-logic');
    return {
      getAndRespond: sandbox.stub(bl, 'getAndRespond', function (
          req, res, next, docSpec
      ) {
        if (response) {
          res.status(200).send(response);
        }
        else {
          res.status(401).send();
        }
      }),
      notAlreadyVoted: sandbox.stub(bl,'notAlreadyVoted', function () {
        return Promise.resolve({});
      }),
      handleVote: sandbox.stub(bl,'handleVote', function () {
        return Promise.resolve({});
      }),
      handleComment: sandbox.stub(bl,'handleComment', function () {
        return Promise.resolve({});
      }),
      handleAnswer: sandbox.stub(bl,'handleAnswer', function () {
        return Promise.resolve({});
      }),
      handleAccept: sandbox.stub(bl,'handleAccept', function () {
        return Promise.resolve({});
      })
    };
  }
};
