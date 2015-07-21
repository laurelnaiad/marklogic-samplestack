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
  var db = require('../../../lib/db-client');
  var middleware = require('../../../lib/middleware');
  var authStubs = require('../../stubs/auth');
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

  describe('contributor',function() {

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('GET contributor', function() {
      it('calls dbClient GET contributor', function(done) {
        // spy getUniqueContent to ensure it was called
        console.log(authStubs);
        var myStubs = authStubs.getStubsForVisitor(sandbox);
        console.log('getStubsForVisitor called');


        // var mock = sandbox.mock(middleware.auth);
        // mock.expects("tryReviveSession").once();
        // mock.expects("associateBestRole").once();

        agent1
          .get('/v1/contributors/' + contributorDoc.id)
          .end(function(err, res) {
            myStubs.tryReviveSession.calledOnce.should.equal(true);
            myStubs.associateBestRole.calledOnce.should.equal(true);
            // mock.verify();
            // mock.restore();
            res.status.should.equal(200);
            res.body.id.should.equal(contributorDoc.id);
            done();
          });
        });

    });

  });
};
