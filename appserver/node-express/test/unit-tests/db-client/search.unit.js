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
var search = require('../../../lib/db-client/search');

module.exports = function() {
  var sandbox;

  describe('search',function() {

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
      httpMocks.marklogic.setup();
    });

    afterEach(function () {
      sandbox.restore();
      httpMocks.marklogic.teardown();
    });

    it('simple', function(done) {
      var searchReqSimpleReq = {
        search: {
          qtext: ["test", "sort:relevance"],
          start: 1,
          timezone: "America/Los_Angeles"
        }
      };

      // TODO: How can we get a connection??
      // var resp = search(connection)(searchReqSimpleReq);
      // resp.total.should.eventually.equal(searchResp.total);
      // resp.results[0].index.should.eventually.equal(searchResp.results[0].index);
      // resp.results[0].content.id.should.eventually.equal(searchResp.results[0].content.id);
      done();
    });

    it('complex', function(done) {
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

      done();
    });

    it('shadow', function(done) {
      var searchShadowReq = {
        "search":{
          "qtext":[
            "test","sort:relevance"
          ],
          "start":1,
          "timezone":"America/Los_Angeles",
          "shadow":"dates"
        }
      };

      done();
    });

  });

};

