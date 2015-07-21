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
  var stub = function() {
    // stubs.dbClient();
  };

  describe('auth',function() {

    // sandbox.stub(db,'getBoundClient', function (spec) {
    //   return {
    //     contributor: {
    //       getUniqueContent: sandbox.mock(function() {
    //         return new Promise.resolve(contributorDoc);
    //       })
    //     }
    //   }
    // });

    it('createSession',function() {
      expect(true).to.be.true;
    });

    it('tryReviveSession',function() {
      expect(true).to.be.true;
    });

    it('login',function() {
      expect(true).to.be.true;
    });

    it('associateBestRole',function() {
      expect(true).to.be.true;
    });

    it('logout',function() {
      expect(true).to.be.true;
    });


  });

};
