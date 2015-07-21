  var Promise = require('bluebird');
  var businessLogic = require('../../lib/business-logic');
  var questionDoc = {
    "accepted":false,
    "acceptedAnswerId":null,
    "answerCount":1,
    "answers":[
      {
        "id":"800b6db4-0dd8-4671-9885-208fb41e3380",
        "text":"My new answer!",
        "itemTally":0,
        "comments":[],
        "owner":{
          "id":"cf99542d-f024-4478-a6dc-7e723a51b040",
          "displayName":"JoeUser",
          "userName":"joe@example.com",
          "reputation":50
        },
        "creationDate":"2015-02-25T18:53:45.064-0800",
        "upvotingContributorIds":[],
        "downvotingContributorIds":[]
      }
    ],
    "comments":[],
    "creationDate":"2015-02-25T15:30:36.471-0800",
    "id":"49f01879-e7bc-4ea5-8f2c-861de3f3e150",
    "itemTally":0,
    "lastActivityDate":"2015-02-25T18:53:45.075-0800",
    "owner":{
      "id":"cf99542d-f024-4478-a6dc-7e723a51b040",
      "displayName":"JoeUser",
      "userName":"joe@example.com","reputation":50
    },
    "tags":["tags","angularjs"],
    "text":"My Question text here",
    "title":"A new question",
    "voteCount":0,
    "upvotingContributorIds":[],
    "downvotingContributorIds":[]
  };

  var stubBusinessLogic = function(sandbox) {
    sandbox.stub(businessLogic, 'getAndRespond', function (req, res, next, docSpec) {
      return new Promise(function (resolve) {
        res.status(200).send(questionDoc);
      });
    });

    sandbox.stub(businessLogic, 'handleVote', function (type, db, spec) {
      return Promise.resolve({});
    });

    sandbox.stub(businessLogic, 'handleComment', function (type, db, spec) {
      return Promise.resolve({});
    });

    sandbox.stub(businessLogic, 'handleAccept', function (db, spec) {
      return Promise.resolve({});
    });

    sandbox.stub(businessLogic, 'handleAnswer', function (db, spec) {
      return Promise.resolve({});
    });
  };

module.exports = stubBusinessLogic;
