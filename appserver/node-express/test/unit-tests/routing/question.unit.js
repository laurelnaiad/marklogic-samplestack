/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = function() {

  describe('question',function() {

    var sandbox;
    var Promise = require('bluebird');
    var mocks = require('../mocks');

    var questionDoc;
    /* jshint ignore:start */
    questionDoc = {"accepted":false,"acceptedAnswerId":null,"answerCount":2,"answers":[{"itemTally":0,"comments":[],"upvotingContributorIds":[],"downvotingContributorIds":[],"text":"This is a Markdown answer to the question","id":"69cbe215-a101-4338-b941-d63ca60f9b1d","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-20T09:26:53.653Z"},{"itemTally":0,"comments":[],"upvotingContributorIds":[],"downvotingContributorIds":[],"text":"This is a Markdown answer to the question","id":"28c09815-c2ac-43ed-83df-1a623ad04b6a","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-20T09:34:26.607Z"}],"comments":[{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-16T23:52:39.008Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-17T07:39:01.095Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-17T07:39:01.231Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-17T07:40:04.964Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-17T07:40:05.107Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-20T09:21:27.942Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-20T09:26:53.449Z"},{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser","reputation":50},"creationDate":"2015-07-20T09:34:26.457Z"}],"creationDate":"2015-07-15T14:43:02.433-0700","id":"49f01879-e7bc-4ea5-8f2c-861de3f3e150","itemTally":1,"lastActivityDate":"2015-07-20T09:34:26.607Z","owner":{"id":"9611450a-0663-45a5-8a08-f1c71320475e","displayName":"MaryAdmin","userName":"mary@example.com","reputation":101},"tags":["javascript"],"text":"**bar**","title":"foo","voteCount":1,"upvotingContributorIds":["cf99542d-f024-4478-a6dc-7e723a51b040"],"downvotingContributorIds":[]};
    /* jshint ignore:end */

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('/v1/question', function() {

      describe('GET', function() {

        it('works as visitor', function (done) {
          var dbClient = {
            qnaDoc: {
              getUniqueContent: sandbox.spy(function() {
                return Promise.resolve(questionDoc);
              })
            }
          };
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );

          agent
          .get('/v1/questions/' + questionDoc.id)
          .end(function(err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            // businessLogic.getAndRespond calledOnce check??
            dbClient.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(questionDoc);
            done();
          });
        });

      });


      describe('POST', function() {

        describe('create', function() {

          it('fails to create question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );
            var postData = {
              title: 'title of the question',
              text: 'Body of the question, in markdown',
              tags: ['xquery','javscript']
            };

            agent
            .post('/v1/questions/')
            .send(postData)
            .end(function(err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('succeeds to create question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                post: sandbox.spy(function() {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function() {
                  return Promise.resolve(questionDoc);
                })
              }
            };
            var authStubs = mocks.middleware.auth.impersonateJoe(
              sandbox, dbClient
            );
            var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
              sandbox
            );
            var postData = {
              'title':'title of the question',
              'text':'Body of the question, in markdown',
              'tags':['xquery','javscript']
            };

            agent
            .post('/v1/questions/')
            .send(postData)
            .end(function(err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              // TODO: businessLogic.getAndRespond calledOnce check
              dbClient.qnaDoc.post.calledOnce.should.equal(true);
              dbClient.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

        });

        describe('upvote', function() {
          it('fails to upvote a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/upvotes')
            .send({ upDown: 1 })
            .end(function(err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('succeeds to upvote a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function() {
                  return Promise.resolve(questionDoc);
                })
              }
            };
            var authStubs = mocks.middleware.auth.impersonateJoe(
              sandbox, dbClient
            );
            var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
              sandbox
            );
            var businessLogicStubs = mocks['business-logic'].stubBusinessLogic(
              sandbox, questionDoc
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/upvotes')
            .send({ upDown: 1 })
            .end(function(err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
              businessLogicStubs.handleVote.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

        });

        describe('downvote', function() {
          it('fails to downvote a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/upvotes')
            .send({ upDown: -1 })
            .end(function(err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('succeeds to downvote a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function() {
                  return Promise.resolve(questionDoc);
                })
              }
            };
            var authStubs = mocks.middleware.auth.impersonateJoe(
              sandbox, dbClient
            );
            var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
              sandbox
            );
            var businessLogicStubs = mocks['business-logic'].stubBusinessLogic(
              sandbox, questionDoc
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/upvotes')
            .send({ upDown: -1 })
            .end(function(err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
              businessLogicStubs.handleVote.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

        });

        describe('comment', function() {
          it('succeeds to comment on a question as visitor', function (done) {
            var dbClient = {
              qnaDoc: {
                patch: sandbox.spy(function() {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function() {
                  return Promise.resolve(questionDoc);
                })
              }
            };
            var authStubs = mocks.middleware.auth.impersonateVisitor(
              sandbox, dbClient
            );
            var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
              sandbox
            );
            var businessLogicStubs = mocks['business-logic'].stubBusinessLogic(
              sandbox, questionDoc
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/comments')
            .send({ text: 'comment on your question' })
            .end(function(err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
              businessLogicStubs.handleComment.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

          it(
            'succeeds to comment on a question as contributor',
            function (done) {
              var dbClient = {
                qnaDoc: {
                  patch: sandbox.spy(function() {
                    return Promise.resolve({ id: questionDoc.id });
                  }),
                  getUniqueContent: sandbox.spy(function() {
                    return Promise.resolve(questionDoc);
                  })
                }
              };
              var authStubs = mocks.middleware.auth.impersonateJoe(
                sandbox, dbClient
              );
              var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
                sandbox
              );
              var businessLogicStubs = mocks['business-logic']
                  .stubBusinessLogic(
                    sandbox, questionDoc
                  );

              agent
              .post('/v1/questions/' + questionDoc.id + '/comments')
              .send({ text: 'comment on your question' })
              .end(function(err, res) {
                authStubs.tryReviveSession.calledOnce.should.equal(true);
                authStubs.associateBestRole.calledOnce.should.equal(true);
                parseBodyStubs.json.calledOnce.should.equal(true);
                businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
                businessLogicStubs.handleComment.calledOnce.should.equal(true);
                res.status.should.equal(200);
                res.body.should.deep.equal(questionDoc);
                done();
              });
            }
          );

        });

        describe('answer', function() {
          it('fails to answer a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/answers')
            .send({'text': 'This is a Markdown answer to the question'})
            .end(function(err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('succeeds to answer a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function() {
                  return Promise.resolve(questionDoc);
                })
              }
            };
            var authStubs = mocks.middleware.auth.impersonateJoe(
              sandbox, dbClient
            );
            var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
              sandbox
            );
            var businessLogicStubs = mocks['business-logic'].stubBusinessLogic(
              sandbox, questionDoc
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/answers')
            .send({'text': 'This is a Markdown answer to the question'})
            .end(function(err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
              businessLogicStubs.handleAnswer.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

        });


      });

    });

  });
};
