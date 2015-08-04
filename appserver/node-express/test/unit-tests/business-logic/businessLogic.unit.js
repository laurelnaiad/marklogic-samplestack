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
module.exports = function () {

  var sandbox;
  var Promise = require('bluebird');
  var mocks = require('../mocks');

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });


  it('getAndRespond - with content', function (done) {
    var bl = require('../../../lib/business-logic');
    var doc = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
    var req = {
      db: {
        qnaDoc: {
          getUniqueContent: sandbox.spy(function () {
            return Promise.resolve(doc);
          })
        }
      }
    };
    var send = {
      send: sandbox.spy(function (content) {})
    };
    var res = {
      status: sandbox.spy(function (statusCode) {
        return send;
      })
    };

    var next = sandbox.spy(function () {});

    bl.getAndRespond(req, res, next, doc).then(function (result) {
      req.db.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
      res.status.calledOnce.should.equal(true);
      res.status.calledWith(200);
      send.send.calledOnce.should.equal(true);
      send.send.calledWith(doc);
      done();
    });
  });


  it('getAndRespond - without content', function (done) {
    var bl = require('../../../lib/business-logic');
    var doc;
    var req = {
      db: {
        qnaDoc: {
          getUniqueContent: sandbox.spy(function () {
            return Promise.resolve(doc);
          })
        }
      }
    };
    var send = {
      send: sandbox.spy(function (content) {})
    };
    var res = {
      status: sandbox.spy(function (statusCode) {
        return send;
      })
    };
    var next = sandbox.spy(function () {});

    bl.getAndRespond(req, res, next, doc).then(function (result) {
      req.db.qnaDoc.getUniqueContent.calledOnce.should.equal(true);
      res.status.calledOnce.should.equal(true);
      res.status.calledWith(401);
      send.send.calledOnce.should.equal(true);
      send.send.calledWith();
      done();
    });
  });



};
