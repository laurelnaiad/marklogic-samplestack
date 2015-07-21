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

  describe('tags',function() {

    var sandbox;
    var Promise = require('bluebird');
    var mocks = require('../mocks');

    var getTagsResp, getRelatedTagsResp;
    /* jshint ignore:start */
    getTagsResp = {
      "values-response":{
        "name":"tags",
        "type":"xs:string",
        "distinct-value":[
          {
            "frequency":267,
            "_value":"xquery"
          },
          {
            "frequency":254,
            "_value":"php"
          },
          {
            "frequency":142,
            "_value":"json"
          }
        ],
        "aggregate-result":[
          {
            "name":"count",
            "_value":"7990"
          }
        ],
        "metrics":{
          "values-resolution-time":"PT0.031663S",
          "aggregate-resolution-time":"PT0.001805S",
          "total-time":"PT0.23124S"
        },
        "total":1225
      }
    };
    getRelatedTagsResp = {
      "values-response":{
        "name":"tags",
        "type":"xs:string",
        "distinct-value":[
          {
            "frequency":267,
            "_value":"xquery"
          },
          {
            "frequency":254,
            "_value":"php"
          },
          {
            "frequency":142,
            "_value":"json"
          }
        ],
        "aggregate-result":[
          {
            "name":"count",
            "_value":"2082"
          }
        ],
        "metrics":{
          "values-resolution-time":"PT0.029942S",
          "aggregate-resolution-time":"PT0.002042S",
          "total-time":"PT1.053313S"
        }
      }
    };
    /* jshint ignore:end */

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('/v1/tags', function() {

      describe('POST', function() {

        it('lookup all tags', function (done) {
          var dbClient = {
            tags: {
              getTags: sandbox.spy(function() {
                console.log('getTags')
                return Promise.resolve(getTagsResp);
              }),
              getRelatedTags: sandbox.spy(function() {
                console.log('getRelatedTags')
                return Promise.resolve(getRelatedTagsResp);
              })
            }
          };
          var myStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );
          var getTagsReq = {
            "search":{
              "qtext":[""],
              "start":1,
              "timezone":"America/Los_Angeles",
              "pageLength":18,
              "forTag":"",
              "sort":"frequency"
            }
          };

          agent
          .post('/v1/tags/')
          .send(getTagsReq)
          .end(function(err, res) {
            myStubs.tryReviveSession.calledOnce.should.equal(true);
            myStubs.associateBestRole.calledOnce.should.equal(true);
            // TODO: parseBody calledOnce check
            dbClient.tags.getTags.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(getTagsResp);
            done();
          });
        });



      });

    });

  });
};
