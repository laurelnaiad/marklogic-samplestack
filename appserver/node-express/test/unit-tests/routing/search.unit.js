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

  describe('search',function() {

    var sandbox;
    var Promise = require('bluebird');
    var mocks = require('../mocks');

    var searchResp;
    /* jshint ignore:start */
    searchResp = {
      "snippet-format":"snippet",
      "total":702,
      "start":1,
      "page-length":10,
      "results":[
        {
          "index":1,
          "uri":"/questions/soq2188551.json",
          "path":"fn:doc(\"/questions/soq2188551.json\")",
          "score":75776,
          "confidence":0.4656456,
          "fitness":1,
          "href":"/v1/documents?uri=%2Fquestions%2Fsoq2188551.json",
          "mimetype":"application/json",
          "format":"json",
          "content":{
            "tags":["python","django","unit-testing","django-testing"],
            "originalId":"2188551",
            "owner":{
              "id":"sou262618",
              "reputation":7690,
              "originalId":"262618",
              "userName":"souser262618@example.com",
              "displayName":"Ludwik Trammer"
            },
            "lastActivityDate":"2010-06-05T08:09:52.157Z",
            "id":"soq2188551",
            "answerCount":2,
            "voteCount":40,
            "accepted":true,
            "downvotingContributorIds":[],
            "creationDate":"2010-02-02T23:23:48.300Z",
            "itemTally":23,
            "upvotingContributorIds":[],
            "title":"Writing good tests for Django applications",
            "acceptedAnswerId":"soa2188904",
            "snippets":[
              {
                "match-text":[
                  "I am not perfect in ",{"highlight":"testing"},
                  " but a few thoughts:\n>... ...should ",
                  {"highlight":"test"},
                  " every function, method,..."
                ],
                "source":"answer",
                "id":"soa2188904"
              }
            ]
          }
        }
      ]
    };
    /* jshint ignore:end */

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('/v1/search', function() {

      describe('POST', function() {

        it('search as visitor', function (done) {
          var dbClient = {
            search: sandbox.spy(function() {
                return Promise.resolve(searchResp);
              })
          };
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var searchReqSimpleReq = {
            search: {
              qtext: ["test", "sort:relevance"],
              start: 1,
              timezone: "America/Los_Angeles"
            }
          };

          agent
          .post('/v1/search/')
          .send(searchReqSimpleReq)
          .end(function(err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            dbClient.search.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

        it('search as contributor', function (done) {
          var dbClient = {
            search: sandbox.spy(function() {
                return Promise.resolve(searchResp);
              })
          };
          var authStubs = mocks.middleware.auth.impersonateJoe(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var searchReqSimpleReq = {
            search: {
              qtext: ["test", "sort:relevance"],
              start: 1,
              timezone: "America/Los_Angeles"
            }
          };

          agent
          .post('/v1/search/')
          .send(searchReqSimpleReq)
          .end(function(err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            dbClient.search.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

        it('shadow search as visitor', function (done) {
          var searchShadowReq = {
            "search":{
              "qtext":[
                "test","sort:relevance"
              ],
              "start":1,
              "timezone":"America/Los_Angeles"
            }
          };
          // calledWithShadow is used to check that shadow property was added
          var calledWithShadow = searchShadowReq;
          calledWithShadow.shadow = 'dates';
          var dbClient = {
            search: sandbox.spy(function(body) {
                return Promise.resolve(searchResp);
              })
          };
          dbClient.search.withArgs(calledWithShadow);
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var shadowParams = '?shadow=dates';

          agent
          .post('/v1/search/' + shadowParams)
          .send(searchShadowReq)
          .end(function(err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            // dbClient.search.withArgs(calledWithShadow)
            //   .calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

      });
    });

  });
};
