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
  var questionDocID ="49f01879-e7bc-4ea5-8f2c-861de3f3e150";

  var stub = function() {
    stubs.businessLogic(sandbox);
  };

  describe('question', function(){

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('GET question', function(done) {
      stub();

      agent1
        .get('/v1/questions/' + questionDocID)
        .send({ upDown: 1 })
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.id.should.equal(questionDocID);
          done();
        });
    });

    it('POST question - visitor', function(done) {
      var postData = {
        "title":"title of the question",
        "text":"Body of the question, in markdown",
        "tags":["xquery","javscript"]
      };

      stub();

      agent2
        .post('/v1/questions/' + questionDocID + '/upvotes')
        .send(postData)
        .expect(401, done)
    });

    it('POST question - contributor', function(done) {
      var postData = {
        "title":"title of the question",
        "text":"Body of the question, in markdown",
        "tags":["xquery","javscript"]
      };

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

          agent1
            .post('/v1/questions/' + questionDocID + '/upvotes')
            .send(postData)
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.id.should.equal(questionDocID);
              done();
            });
        });
    });

    it('POST upvote - visitor', function(done) {
      stub();

      agent2
        .post('/v1/questions/' + questionDocID + '/upvotes')
        .send({ upDown: 1 })
        .expect(401, done)
    });

    it('POST upvote - contributor', function(done) {
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

          agent1
            .post('/v1/questions/' + questionDocID + '/upvotes')
            .send({ upDown: 1 })
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.id.should.equal(questionDocID);
              done();
            });
        });
    });

    it('POST downvote - visitor', function(done) {
      stub();

      agent2
        .post('/v1/questions/' + questionDocID + '/downvotes')
        .send({ upDown: -1 })
        .expect(401, done)
    });

    it('POST downvote - contributor', function(done) {
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

          agent1
            .post('/v1/questions/' + questionDocID + '/downvotes')
            .send({ upDown: -1 })
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.id.should.equal(questionDocID);
              done();
            });
        });
    });

    it('POST comment - visitor', function(done) {
      stub();

      agent2
        .post('/v1/questions/' + questionDocID + '/comments')
        .send({ text: 'comment on your question' })
        .expect(401, done)

    });

    it('POST comment - contributor', function(done) {
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

          agent1
            .post('/v1/questions/' + questionDocID + '/comments')
            .send({ text: 'comment on your question' })
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.id.should.equal(questionDocID);
              done();
            });
        });
    });

    it('POST answer - visitor', function(done) {
      stub();

      agent2
        .post('/v1/questions/' + questionDocID + '/answers')
        .send({"text": "This is a Markdown answer to the question"})
        .expect(401, done)

    });

    it('POST answer - contributor', function(done) {
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

          agent1
            .post('/v1/questions/' + questionDocID + '/answers')
            .send({"text": "This is a Markdown answer to the question"})
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.id.should.equal(questionDocID);
              done();
            });
        });
    });


  });

};
