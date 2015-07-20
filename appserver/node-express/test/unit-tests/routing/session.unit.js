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
  var joeObject = {
    aboutMe: 'Twitter: [@joeuser](http://twitter.com/joeuser)\nDisclaimer: This is not me.  JoeUser _doesn\'t exist_!\n',
    displayName: 'JoeUser',
    id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
    originalId: null,
    location: 'San Francisco',
    reputation: 50,
    userName: 'joe@example.com',
    voteCount: 3,
    websiteUrl: 'http://website.com/joeuser',
    role: [ 'contributors' ]
  };
  var stub = function() {
    // stubAuth();
    // TODO: use stubs....
  };
  var stubAuth = function() {
    var auth = require('../../../lib/middleware/auth.js');

    sandbox.stub(auth, 'createSession', function (req, res, next) {
      return new Promise(function (resolve) {
        res.status(200).send(joeObject);
      });
    });
    sandbox.stub(auth, 'tryReviveSession', function (req, res, next) {
      next();
    });
    sandbox.stub(auth, 'login', function (req, res, next) {
      next();
    });
    sandbox.stub(auth, 'associateBestRole', function (roles, req, res, next) {
      next();
    });
    sandbox.stub(auth, 'logout', function (req, res, next) {
      next();
    });
  };

  describe('session', function(){
    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    it('POST session - contributor fails to login', function(done) {
      stub();

      agent1
        .post('/v1/session')
        .send({ username: contributor.username, password: '1111' })
        .set('Accept', 'application/json, text/plain, */*')
        .set('Accept-Encoding', 'gzip, deflate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Host', 'localhost:3000')
        .set('Origin', 'http://localhost:3000')
        .set('Referer', 'http://localhost:3000/')
        .expect(401, done)

    });

    it('POST session - contributor successfully logs in', function(done) {
      stub();

      agent1
        .post('/v1/session')
        .send({ username: contributor.username, password: contributor.password })
        .set('Accept', 'application/json, text/plain, */*')
        .set('Accept-Encoding', 'gzip, deflate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Host', 'localhost:3000')
        .set('Origin', 'http://localhost:3000')
        .set('Referer', 'http://localhost:3000/')
        .expect(200)
        .end(function(err, res) {
          res.body.id.should.equal(joeObject.id);
          done();
        });
    });

    it('DELETE session - contributor logs out', function(done) {
      stub();

      agent1
        .delete('/v1/session')
        .set('Accept', 'application/json, text/plain, */*')
        .set('Accept-Encoding', 'gzip, deflate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Host', 'localhost:3000')
        .set('Origin', 'http://localhost:3000')
        .set('Referer', 'http://localhost:3000/')
        .expect(205, done)
    });

    it('DELETE session - attempt to log out without a session', function(done) {
      stub();

      agent2
        .delete('/v1/session')
        .set('Accept', 'application/json, text/plain, */*')
        .set('Accept-Encoding', 'gzip, deflate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Host', 'localhost:3000')
        .set('Origin', 'http://localhost:3000')
        .set('Referer', 'http://localhost:3000/')
        .expect(454, done)
    });

    afterEach(function () {
      sandbox.restore();
    });
  });

};
