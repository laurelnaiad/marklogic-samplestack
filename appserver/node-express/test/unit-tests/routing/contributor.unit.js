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
  var contributorDoc = {
    aboutMe: "Twitter: [@maryadmin](http://twitter.com/maryadmin)\nDisclaimer: This is not me.  MaryAdmin _doesn't exist_!\n",
    displayName: "MaryAdmin",
    id: "9611450a-0663-45a5-8a08-f1c71320475e",
    originalId: null,
    location: "Barrow",
    reputation: 101,
    userName: "mary@example.com",
    voteCount: 5,
    websiteUrl: "http://website.com/grechaw"
  };
  var getUniqueContentResp = contributorDoc;
  var patchReputationResp = contributorDoc;
  var patchVoteCountResp = contributorDoc;

  var stub = function() {
    var stubbedContributorObj = function(connection) {
      var funcs = {
        patchReputation: function (spec) {
          return new Promise(function (resolve) {
            // TODO: check proper response
            return resolve(patchReputationResp);
          });
        },
        patchVoteCount: function (spec) {
          return new Promise(function (resolve) {
            // TODO: check proper response
            return resolve(patchVoteCountResp);
          });
        },
        getUniqueContent: function (spec) {
          return new Promise(function (resolve) {
            return resolve(getUniqueContentResp);
          });
        }
      };
      var self = {};
      _.each(funcs, function (func, name) {
        self[name] = func.bind(connection);
      });
      return self;
    };

    stubs.dbClient(sandbox, { contributor: stubbedContributorObj });
  };

  describe('contributor',function() {

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('GET contributor', function(done) {
      stub();

      agent1
        .get('/v1/contributors/' + contributorDoc.id)
        .send({ upDown: 1 })
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.id.should.equal(contributorDoc.id);
          done();
        });
    });

  });
};
