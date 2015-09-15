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
module.exports = function () {

  describe('question',function () {

    var sandbox;
    var Promise = require('bluebird');
    var mocks = require('../mocks');

    var questionDoc = mocks.routing.question.questionDoc;

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('/v1/question', function () {

      describe('GET', function () {

        it('works as visitor', function (done) {
          var dbClient = {
            qnaDoc: {
              getUniqueContent: sandbox.spy(function () {
                return Promise.resolve(questionDoc);
              })
            }
          };
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );

          agent
          .get('/v1/questions/' + questionDoc.id)
          .end(function (err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            dbClient.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(questionDoc);
            done();
          });
        });

      });


      describe('POST', function () {

        describe('create', function () {

          it('fails to create question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );
            var postData = {
              'title':'title of the question',
              'text':'Body of the question, in markdown',
              'tags':['xquery','javscript']
            };

            agent
            .post('/v1/questions/')
            .send(postData)
            .end(function (err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('successfully creates a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                post: sandbox.spy(function () {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function () {
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
            .end(function (err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              dbClient.qnaDoc.post.calledOnce.should.equal(true);
              dbClient.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
              res.status.should.equal(200);
              res.body.should.deep.equal(questionDoc);
              done();
            });
          });

        });

        describe('upvote', function () {
          it('fails to upvote a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/upvotes')
            .send({ upDown: 1 })
            .end(function (err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('successfully upvotes a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .end(function (err, res) {
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

          it('successfully upvotes an answer as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id +
                    '/answers/' + questionDoc.answers[0].id + '/upvotes')
            .send({ upDown: 1 })
            .end(function (err, res) {
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

        describe('downvote', function () {
          it('fails to downvote a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/downvotes')
            .send({ upDown: -1 })
            .end(function (err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('successfully downvotes a question as contributor', function (
            done
          ) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id + '/downvotes')
            .send({ upDown: -1 })
            .end(function (err, res) {
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

          it('successfully downvotes an answer as contributor', function (
            done
          ) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id +
                    '/answers/' + questionDoc.answers[0].id + '/downvotes')
            .send({ upDown: -1 })
            .end(function (err, res) {
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

        describe('comment', function () {
          it('successfully comments on a question as visitor', function (done) {
            var dbClient = {
              qnaDoc: {
                patch: sandbox.spy(function () {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function () {
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
            .end(function (err, res) {
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

          it('successfully comments on a question as contributor', function (
            done
          ) {
            var dbClient = {
              qnaDoc: {
                patch: sandbox.spy(function () {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id + '/comments')
            .send({ text: 'comment on your question' })
            .end(function (err, res) {
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

          it('successfully comments on an answer as contributor', function (
            done
          ) {
            var dbClient = {
              qnaDoc: {
                patch: sandbox.spy(function () {
                  return Promise.resolve({ id: questionDoc.id });
                }),
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id +
                    '/answers/' + questionDoc.answers[0].id + '/comments')
            .send({ text: 'comment on your question' })
            .end(function (err, res) {
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
        });

        describe('answer', function () {
          it('fails to answer a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id + '/answers')
            .send({'text': 'This is a Markdown answer to the question'})
            .end(function (err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('successfully answers a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .end(function (err, res) {
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

        describe('accept', function () {
          it('fails to accept a question as visitor', function (done) {
            var dbClient = {};
            var authStubs = mocks.middleware.auth.impersonateUnauthorized(
              sandbox, dbClient
            );

            agent
            .post('/v1/questions/' + questionDoc.id +
                    '/answers/' + questionDoc.answers[0].id + '/accept')
            .end(function (err, res) {
              res.status.should.equal(401);
              res.body.message.should.equal('Unauthorized');
              done();
            });
          });

          it('successfully answers a question as contributor', function (done) {
            var dbClient = {
              qnaDoc: {
                getUniqueContent: sandbox.spy(function () {
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
            .post('/v1/questions/' + questionDoc.id +
                    '/answers/' + questionDoc.answers[0].id + '/accept')
            .end(function (err, res) {
              authStubs.tryReviveSession.calledOnce.should.equal(true);
              authStubs.associateBestRole.calledOnce.should.equal(true);
              parseBodyStubs.json.calledOnce.should.equal(true);
              businessLogicStubs.getAndRespond.calledOnce.should.equal(true);
              businessLogicStubs.handleAccept.calledOnce.should.equal(true);
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
