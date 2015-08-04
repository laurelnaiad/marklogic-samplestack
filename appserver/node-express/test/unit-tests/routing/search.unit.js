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

  describe('search',function () {

    var sandbox;
    var Promise = require('bluebird');
    var mocks = require('../mocks');

    var searchResp = mocks.routing.search.searchResp;

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    describe('/v1/search', function () {

      describe('POST', function () {

        it('search as visitor', function (done) {
          var dbClient = {
            search: sandbox.spy(function () {
                return Promise.resolve(searchResp);
              })
          };
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var searchReqSimpleReq = {
            search: {
              qtext: ['test', 'sort:relevance'],
              start: 1,
              timezone: 'America/Los_Angeles'
            }
          };

          agent
          .post('/v1/search/')
          .send(searchReqSimpleReq)
          .end(function (err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            dbClient.search.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

        it('search as contributor', function (done) {
          var dbClient = {
            search: sandbox.spy(function () {
                return Promise.resolve(searchResp);
              })
          };
          var authStubs = mocks.middleware.auth.impersonateJoe(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var searchReqSimpleReq = {
            search: {
              qtext: ['test', 'sort:relevance'],
              start: 1,
              timezone: 'America/Los_Angeles'
            }
          };

          agent
          .post('/v1/search/')
          .send(searchReqSimpleReq)
          .end(function (err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            dbClient.search.calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

        it('shadow search as visitor', function (done) {
          var searchShadowReq = {
            'search':{
              'qtext':[
                'test','sort:relevance'
              ],
              'start':1,
              'timezone':'America/Los_Angeles'
            }
          };
          // calledWithShadow is used to check that shadow property was added
          var calledWithShadow = searchShadowReq;
          calledWithShadow.shadow = 'dates';
          var dbClient = {
            search: sandbox.spy(function (body) {
                return Promise.resolve(searchResp);
              })
          };
          dbClient.search.withArgs(calledWithShadow);
          var authStubs = mocks.middleware.auth.impersonateVisitor(
            sandbox, dbClient
          );
          var parseBodyStubs = mocks.middleware.parseBody.spyParseBody(
            sandbox
          );
          var shadowParams = '?shadow=dates';

          agent
          .post('/v1/search/' + shadowParams)
          .send(searchShadowReq)
          .end(function (err, res) {
            authStubs.tryReviveSession.calledOnce.should.equal(true);
            authStubs.associateBestRole.calledOnce.should.equal(true);
            parseBodyStubs.json.calledOnce.should.equal(true);
            // dbClient.search.withArgs(calledWithShadow)
            //   .calledOnce.should.equal(true);
            res.status.should.equal(200);
            res.body.should.deep.equal(searchResp);
            done();
          });
        });

      });
    });

  });
};
