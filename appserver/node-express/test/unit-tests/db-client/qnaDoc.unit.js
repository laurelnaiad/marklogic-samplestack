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

  describe('qnaDoc',function() {

    var sandbox;
    var Promise = require('bluebird');
    var moment = require('moment');
    var db = require('../../../lib/db-client');
    var connection = db.getGenericClient('admin','admin');
    var qnaDoc = require('../../../lib/db-client/qnaDoc')(connection);

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('post', function (done) {
      /* jshint ignore:start */
      var now = moment();  // plus 001 ms
      var txid = null;
      var contributor = {id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'};
      var spec = { title: 'test', text: 'test', tags: [ '.htaccess' ] };
      var docsPostWriteReq = {txid:null,uri:'/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json',contentType:'applicaton/json',content:{accepted:false,acceptedAnswerId:null,comments:[],answers:[],answerCount:0,itemTally:0,upvotingContributorIds:[],downvotingContributorIds:[],voteCount:0,title:'test',text:'test',tags:['.htaccess'],lastActivityDate:now,creationDate:now,id:'99753e7e-fbeb-435b-af58-2f4630181f0f',owner:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'}}};
      var docsPostWriteResp = {documents:[{uri:'/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json',categories:undefined,contentType:null}]};
      var ret = { id: '99753e7e-fbeb-435b-af58-2f4630181f0f' };
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'write', function(dp) {
        expect(dp.content.id).to.exist;
        expect(dp.uri).to.exist;
        assert(dp.txid === txid);
        dp.content.owner.should.deep.equal(contributor);
        dp.content.title.should.equal(spec.title);
        dp.content.text.should.equal(spec.text);
        dp.content.tags.should.deep.equal(spec.tags);
        return {
          result: function() {
            return Promise.resolve(docsPostWriteResp);
          }
        };
      });

      qnaDoc.post(txid, contributor, spec).then(function(postRet) {
        postRet.should.deep.equal(ret);
        done();
      });

    });

    it('search (not in use)', function (done) {
      done();
    });

    it('getUniqueContent', function (done) {
      /* jshint ignore:start */
      var txid = null,
          spec = { id: '8d21be06-8013-4639-bb7e-5db00222196a' };
      var contentQuery = {txid:null,uris:['/questions/8d21be06-8013-4639-bb7e-5db00222196a.json'],transform:['single-question',{}]};
      var contentQueryResult = [{content:{accepted:false,acceptedAnswerId:null,comments:[],answers:[],answerCount:0,itemTally:1,upvotingContributorIds:['cf99542d-f024-4478-a6dc-7e723a51b040'],downvotingContributorIds:[],voteCount:1,title:'title of the question 333',lastActivityDate:'2015-07-29T22:14:13.464Z',creationDate:'2015-07-29T22:14:13.464Z',id:'8d21be06-8013-4639-bb7e-5db00222196a',owner:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser',reputation:58}},uri:'/questions/8d21be06-8013-4639-bb7e-5db00222196a.json',category:['content'],format:'json',contentType:'application/json'}];
      var ret = {accepted:false,acceptedAnswerId:null,comments:[],answers:[],answerCount:0,itemTally:1,upvotingContributorIds:['cf99542d-f024-4478-a6dc-7e723a51b040'],downvotingContributorIds:[],voteCount:1,title:'title of the question 333',lastActivityDate:'2015-07-29T22:14:13.464Z',creationDate:'2015-07-29T22:14:13.464Z',id:'8d21be06-8013-4639-bb7e-5db00222196a',owner:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser',reputation:58}};
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'read', function(cq) {
        cq.should.deep.equal(contentQuery);
        return {
          result: function() {
            return Promise.resolve(contentQueryResult);
          }
        };
      });

      qnaDoc.getUniqueContent(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });


    it('patch - voteQuestion', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = '1389430489209449812',
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',operation:'voteQuestion',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'},voteChange:1};
      var docsPatch = {txid:'1389430489209449812',uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',operations:[{insert:{context:'/array-node("upvotingContributorIds")',position:'last-child',content:'cf99542d-f024-4478-a6dc-7e723a51b040'}},{replace:{select:'voteCount',content:[{'$value':1}],apply:'ml.add'}},{replace:{select:'/itemTally',content:[{'$value':1}],apply:'ml.add'}}]};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' };
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        dp.should.deep.equal(docsPatch);
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });



    it('patch - voteAnswer', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = '3621031282437196724',
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',answerId:'ef376cf4-3a30-44af-b2c5-722e6439723d',operation:'voteAnswer',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'},voteChange:1};
      var docsPatch = {txid:'3621031282437196724',uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',operations:[{insert:{context:'/answers[text("id")="ef376cf4-3a30-44af-b2c5-722e6439723d"]/array-node("upvotingContributorIds")',position:'last-child',content:'cf99542d-f024-4478-a6dc-7e723a51b040'}},{replace:{select:'voteCount',content:[{'$value':1}],apply:'ml.add'}},{replace:{select:'/answers[text("id")="ef376cf4-3a30-44af-b2c5-722e6439723d"]/itemTally',content:[{'$value':1}],apply:'ml.add'}}]};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' }
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        dp.should.deep.equal(docsPatch);
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });


    it('patch - acceptAnswer', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = '3621031282437196724',
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',answerId:'ef376cf4-3a30-44af-b2c5-722e6439723d',operation:'acceptAnswer',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'}};
      var docsPatch = {txid: txid,uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json'};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' }
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        assert(dp.txid === txid);
        dp.uri.should.equal(docsPatch.uri)
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });


    it('patch - addQuestionComment', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = null,
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',operation:'addQuestionComment',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'},content:{text:'here is my comment on your Q'}};
      var docsPatch = {txid: txid,uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json'};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' }
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        assert(dp.txid === txid);
        dp.uri.should.equal(docsPatch.uri)
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });


    it('patch - addAnswer', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = null,
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',operation:'addAnswer',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'},content:{comments:[],text:'another answer'}};
      var docsPatch = {txid: txid,uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json'};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' }
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        assert(dp.txid === txid);
        dp.uri.should.equal(docsPatch.uri)
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });


    it('patch - addAnswerComment', function (done) {
      // case 'voteQuestion':
      /* jshint ignore:start */
      var txid = null,
          spec = {questionId:'8450f8a4-2782-4c8a-9fd9-b83bcacc5019',answerId:'e167fef4-3341-4e0c-aa84-14984194d7d8',operation:'addAnswerComment',contributor:{id:'cf99542d-f024-4478-a6dc-7e723a51b040',displayName:'JoeUser'},content:{text:'answer comment'}};
      var docsPatch = {txid: txid,uri:'/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json'};
      var docsPatchResult = { uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json' };
      var ret = { id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019' }
      /* jshint ignore:end */

      sandbox.stub(connection.documents, 'patch', function(dp) {
        assert(dp.txid === txid);
        dp.uri.should.equal(docsPatch.uri)
        return {
          result: function() {
            return Promise.resolve(docsPatchResult);
          }
        };
      });

      qnaDoc.patch(txid, spec).then(function(gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });
    });

  });
};
