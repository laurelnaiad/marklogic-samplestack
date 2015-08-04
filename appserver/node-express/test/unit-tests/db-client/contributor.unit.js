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

  describe('contributor',function () {

    var sandbox;
    var Promise = require('bluebird');
    var _ = require('lodash');
    var db = require('../../../lib/db-client');
    var connection = db.getGenericClient('admin','admin');
    var contributor = require('../../../lib/db-client/contributor')(connection);

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('patchReputation', function (done) {
      var txid;
      var id;
      var repChange;
      var docsPatch;
      var docsPatchResult;
      var ret;
      /* jshint ignore:start */
      txid = '2525203014564922806';
      id = '9611450a-0663-45a5-8a08-f1c71320475e';
      repChange = 1;
      docsPatch = {txid:'2525203014564922806',uri:'com.marklogic.samplestack.domain.Contributor/9611450a-0663-45a5-8a08-f1c71320475e.json',operations:[{replace:{select:'reputation',content:[{'$value':1}],apply:'ml.add'}}]};
      docsPatchResult = { uri: 'com.marklogic.samplestack.domain.Contributor/9611450a-0663-45a5-8a08-f1c71320475e.json' };
      ret = { id: '9611450a-0663-45a5-8a08-f1c71320475e' };
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function (dp) {
        dp.should.deep.equal(docsPatch);
        return {
          result: function () {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      contributor.patchReputation(txid, id, repChange).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });

    it('patchVoteCount', function (done) {
      var txid;
      var id;
      var increment;
      var docsPatch;
      var docsPatchResult;
      var ret;
      /* jshint ignore:start */
      txid = '10926743720541470095';
      id = 'cf99542d-f024-4478-a6dc-7e723a51b040';
      increment = 1;
      docsPatch = {txid:'10926743720541470095',uri:'com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json',operations:[{replace:{select:'voteCount',content:[{'$value':1}],apply:'ml.add'}}]};
      docsPatchResult = { uri: 'com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json' };
      ret = { id: 'cf99542d-f024-4478-a6dc-7e723a51b040' };
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function (dp) {
        dp.should.deep.equal(docsPatch);
        return {
          result: function () {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      contributor.patchVoteCount(txid, id, increment).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });

    it('getUniqueContent with contributor ID', function (done) {
      var txid;
      var spec;
      var docsRead;
      var docsReadResult;
      var ret;
      /* jshint ignore:start */
      txid = null;
      spec = { id: 'cf99542d-f024-4478-a6dc-7e723a51b040' };
      docsRead = {txid:null,uris:['com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json']};
      docsReadResult = [{content:{'com.marklogic.samplestack.domain.Contributor':{aboutMe:'Twitter: [@joeuser](http://twitter.com/joeuser)\nDisclaimer: This is not me.  JoeUser _doesn\'t exist_!\n',displayName:'JoeUser',id:'cf99542d-f024-4478-a6dc-7e723a51b040',originalId:null,location:'San Francisco',reputation:55,userName:'joe@example.com',voteCount:13,websiteUrl:'http://website.com/joeuser'}},uri:'com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json',category:['content'],format:'json',contentType:'application/json'}];
      ret = {aboutMe:'Twitter: [@joeuser](http://twitter.com/joeuser)\nDisclaimer: This is not me.  JoeUser _doesn\'t exist_!\n',displayName:'JoeUser',id:'cf99542d-f024-4478-a6dc-7e723a51b040',originalId:null,location:'San Francisco',reputation:55,userName:'joe@example.com',voteCount:13,websiteUrl:'http://website.com/joeuser'};
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'read', function (dr) {
        dr.should.deep.equal(docsRead);
        return {
          result: function () {
            return Promise.resolve(docsReadResult);
          }
        };
      });

      contributor.getUniqueContent(txid, spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });

    it('getUniqueContent without contributor ID', function (done) {
      var txid;
      var spec;
      var docsQuery;
      var docsQueryResult;
      var ret;
      /* jshint ignore:start */
      txid = null;
      spec = { userName: 'joe@example.com' };
      docsQuery = {whereClause:{query:{queries:[{'directory-query':{uri:['com.marklogic.samplestack.domain.Contributor/']}},{'value-query':{'json-property':'userName',text:['joe@example.com']}}]}},queryType:'structured',queryFormat:'json'};
      docsQueryResult = [{uri:'com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json',category:'content',format:'json',contentType:'application/json',contentLength:'390',content:{'com.marklogic.samplestack.domain.Contributor':{aboutMe:'Twitter: [@joeuser](http://twitter.com/joeuser)\nDisclaimer: This is not me.  JoeUser _doesn\'t exist_!\n',displayName:'JoeUser',id:'cf99542d-f024-4478-a6dc-7e723a51b040',originalId:null,location:'San Francisco',reputation:55,userName:'joe@example.com',voteCount:13,websiteUrl:'http://website.com/joeuser'}}}];
      ret = {aboutMe:'Twitter: [@joeuser](http://twitter.com/joeuser)\nDisclaimer: This is not me.  JoeUser _doesn\'t exist_!\n',displayName:'JoeUser',id:'cf99542d-f024-4478-a6dc-7e723a51b040',originalId:null,location:'San Francisco',reputation:55,userName:'joe@example.com',voteCount:13,websiteUrl:'http://website.com/joeuser'};
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'query', function (dq) {
        expect(dq.whereClause).to.exist;
        expect(dq.whereClause.query).to.exist;
        expect(dq.whereClause.query.queries).to.exist;
        dq.whereClause.query.queries
          .should.deep.equal(docsQuery.whereClause.query.queries);

        return {
          result: function () {
            return Promise.resolve(docsQueryResult);
          }
        };
      });

      contributor.getUniqueContent(txid, spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });



  });
};
