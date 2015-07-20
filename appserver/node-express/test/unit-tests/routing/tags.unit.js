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

  var getTagsResp = {
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
  var getRelatedTagsResp = {
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

  var stub = function() {
    var stubbedTagsObj = function(connection) {
      var funcs = {
        getTags: function (spec) {
          return new Promise(function (resolve) {
            return resolve(getTagsResp);
          });
        },
        getRelatedTags: function (spec) {
          return new Promise(function (resolve) {
            return resolve(getRelatedTagsResp);
          });
        }
      };
      var self = {};
      _.each(funcs, function (func, name) {
        self[name] = func.bind(connection);
      });
      return self;
    };

    stubs.dbClient(sandbox, { tags: stubbedTagsObj });
  };

  describe('tags',function() {

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('POST tags - getTags', function(done) {
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

      stub();

      agent1
        .post('/v1/tags/')
        .send(getTagsReq)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body["values-response"].name.should.equal(getTagsResp["values-response"].name);
          // res.body["values-response"]["aggregate-result"]._value.should.equal(getTagsResp["values-response"]["aggregate-result"]._value);
          // res.body["values-response"]["distinct-value"][0]._value.should.equal(getTagsResp["values-response"]["distinct-value"][0]._value);
          // res.body["values-response"]["distinct-value"][1]._value.should.equal(getTagsResp["values-response"]["distinct-value"][1]._value);
          done();
        });
    });

    it('POST tags - getRelatedTags', function(done) {
      var getRelatedTagsReq = {
        "search":{
          "qtext":[""],
          "start":1,
          "timezone":"America/Los_Angeles",
          "pageLength":100,
          "relatedTo":"css",
          "sort":"frequency"
        }
      };

      stub();

      agent1
        .post('/v1/tags/')
        .send(getRelatedTagsReq)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body["values-response"].name.should.equal(getRelatedTagsResp["values-response"].name);
          // res.body["values-response"]["aggregate-result"]._value.should.equal(getRelatedTagsResp["values-response"]["aggregate-result"]._value);
          // res.body["values-response"]["distinct-value"][0]._value.should.equal(getRelatedTagsResp["values-response"]["distinct-value"][0]._value);
          // res.body["values-response"]["distinct-value"][1]._value.should.equal(getRelatedTagsResp["values-response"]["distinct-value"][1]._value);
          done();
        });
    });


  });

};
