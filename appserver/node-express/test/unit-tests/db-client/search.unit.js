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
    var db = require('../../../lib/db-client');
    var connection = db.getGenericClient('admin','admin');
    var search = require('../../../lib/db-client/search')(connection);
    var mocks = require('../mocks');

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });


    it('search my contrib only', function (done) {
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;
      spec = mocks['db-client'].search.contribOnly.spec;
      docsQuery = mocks['db-client'].search.contribOnly.docsQuery;
      docsQueryResult = mocks['db-client'].search.contribOnly.docsQueryResult;
      ret = mocks['db-client'].search.contribOnly.ret;

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(docsQuery);
        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      search(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });


    it('search resolved only', function (done) {
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;
      spec = mocks['db-client'].search.resolvedOnly.spec;
      docsQuery = mocks['db-client'].search.resolvedOnly.docsQuery;
      docsQueryResult = mocks['db-client'].search.resolvedOnly.docsQueryResult;
      ret = mocks['db-client'].search.resolvedOnly.ret;

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(docsQuery);
        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      search(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });


    it('search "acc"', function (done) {
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;
      spec = mocks['db-client'].search.searchAcc.spec;
      docsQuery = mocks['db-client'].search.searchAcc.docsQuery;
      docsQueryResult = mocks['db-client'].search.searchAcc.docsQueryResult;
      ret = mocks['db-client'].search.searchAcc.ret;

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(docsQuery);
        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      search(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });

    it('search "acc" and date range', function (done) {
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;

      spec = mocks['db-client'].search.searchAccDateRange.spec;
      docsQuery = mocks['db-client'].search.searchAccDateRange.docsQuery;
      docsQueryResult = mocks['db-client'].search.searchAccDateRange
                          .docsQueryResult;
      ret = mocks['db-client'].search.searchAccDateRange.ret;

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(docsQuery);
        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      search(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });


    it('search "acc" and date range and tag', function (done) {
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;
      spec = mocks['db-client'].search.searchAccDateRangeAndTag.spec;
      docsQuery = mocks['db-client'].search.searchAccDateRangeAndTag.docsQuery;
      docsQueryResult = mocks['db-client'].search.searchAccDateRangeAndTag
                          .docsQueryResult;
      ret = mocks['db-client'].search.searchAccDateRangeAndTag.ret;

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(docsQuery);
        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      search(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });

  });
};
