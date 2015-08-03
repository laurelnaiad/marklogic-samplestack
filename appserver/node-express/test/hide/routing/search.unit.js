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
  var sandbox;
  var Promise = require('bluebird');
  var searchResp = {
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
  var stub = function() {
    var stubbedSearchObj = function(connection) {
      var search = function (spec) {
       return new Promise(function (resolve) {
          return resolve(searchResp);
        });
      };
      return search.bind(connection);
    };

    stubs.dbClient(sandbox, { search: stubbedSearchObj });
  };

  describe('search',function() {

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('POST search - simple', function(done) {
      var searchReqSimpleReq = {
        search: {
          qtext: ["test", "sort:relevance"],
          start: 1,
          timezone: "America/Los_Angeles"
        }
      };

      stub();

      agent1
        .post('/v1/search/')
        .send(searchReqSimpleReq)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.total.should.equal(searchResp.total);
          res.body.results[0].index.should.equal(searchResp.results[0].index);
          res.body.results[0].content.id.should.equal(searchResp.results[0].content.id);
          done();
        });
    });

    it('POST search - complex', function(done) {
      var searchReqComplexReq = {
        "search":{
          "qtext":["test","sort:relevance"],
          "start":1,
          "query":{
            "and-query":{
              "queries":[
                {
                  "range-constraint-query":{
                    "constraint-name":"lastActivity",
                    "value":"2011-03-01T08:00:00.000Z",
                    "range-operator":"GE"
                  }
                },
                {
                  "range-constraint-query":{
                    "constraint-name":"lastActivity",
                    "value":"2013-02-01T08:00:00.000Z",
                    "range-operator":"LT"
                  }
                }
              ]
            }
          },
          "timezone":"America/Los_Angeles"
        }
      };

      stub();

      agent1
        .post('/v1/search/')
        .send(searchReqComplexReq)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.total.should.equal(searchResp.total);
          res.body.results[0].index.should.equal(searchResp.results[0].index);
          res.body.results[0].content.id.should.equal(searchResp.results[0].content.id);
          done();
        });
    });

    it('POST search - shadow', function(done) {
      var searchShadowReq = {
        "search":{
          "qtext":[
            "test","sort:relevance"
          ],
          "start":1,
          "timezone":"America/Los_Angeles",
        }
      };
      var shadowParams = '?shadow=dates';

      stub();

      agent1
        .post('/v1/search/' + shadowParams)
        .send(searchShadowReq)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.total.should.equal(searchResp.total);
          res.body.results[0].index.should.equal(searchResp.results[0].index);
          res.body.results[0].content.id.should.equal(searchResp.results[0].content.id);
          done();
        });
    });

  });
};
