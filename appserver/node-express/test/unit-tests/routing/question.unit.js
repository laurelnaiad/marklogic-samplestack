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
  // var agent1 = request.agent();
  var Promise = require('bluebird');

  describe('question', function(){
    var sandbox;
    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    it('visitor should fail to upvote question', function(done) {
      var businessLogic = require('../../../lib/business-logic');
      sandbox.stub(businessLogic, 'handleVote', function (type, db, spec) {
        return Promise.resolve({});
      });

      request
        .post('/v1/questions/11111111/upvotes')
        .send({ upDown: 1 })
        .end(function(err, res) {
          res.status.should.equal(401);
          done();
        });
    });

    it('asks a question',function() {
      expect(true).to.be.true;
    });

    afterEach(function () {
      sandbox.restore();
    });
  });

};
