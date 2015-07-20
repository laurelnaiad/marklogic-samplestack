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
var options = sharedRequire('js/options');
var mlOpts = options.middleTier.db.clientConnection;
var mlProto = (options.middleTier.https) ? 'https' : 'http';
var mlHost = mlOpts.host + ':' + mlOpts.port;
var mlBaseURL = mlProto + '://' + mlHost;

var setup = function() {

  /* CONTRIBUTOR */
  nock(mlBaseURL)
    .persist()
    .get('/v1/documents?format=json&uri=com.marklogic.samplestack.domain.Contributor%2F9611450a-0663-45a5-8a08-f1c71320475e.json&category=content')
    .reply(401, {"errorResponse":{"statusCode":401,"status":"Unauthorized","message":"401 Unauthorized"}}, { server: 'MarkLogic',
    'www-authenticate': 'Digest realm="public", qop="auth", nonce="d6ee8d68ea0a61ec1865e4d06108349b", opaque="d41cb397fb964708"',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '104',
    connection: 'Keep-Alive',
    'keep-alive': 'timeout=5' });

  /* QUESTIONS */
  nock(mlBaseURL)
    .persist()
    .get('/v1/documents?format=json&uri=%2Fquestions%2F49f01879-e7bc-4ea5-8f2c-861de3f3e150.json&category=content&transform=single-question')
    .reply(401, {"errorResponse":{"statusCode":401,"status":"Unauthorized","message":"401 Unauthorized"}}, { server: 'MarkLogic',
    'www-authenticate': 'Digest realm="public", qop="auth", nonce="03389cc236fa5df34fdd02ee6d630ae3", opaque="a053aec508f09cdb"',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '104',
    connection: 'Keep-Alive',
    'keep-alive': 'timeout=5' });

  nock(mlBaseURL)
    .persist()
    .post('/v1/transactions')
    .reply(303, "", { 'set-cookie': [ 'HostId=3797819132095006097' ],
    location: '/v1/transactions/18108497189323828341',
    server: 'MarkLogic',
    'content-length': '0',
    connection: 'Keep-Alive',
    'keep-alive': 'timeout=5' });

  nock(mlBaseURL)
    .persist()
    .post('/v1/documents?uri=%2Fquestions%2F49f01879-e7bc-4ea5-8f2c-861de3f3e150.json', {"patch":[{"insert":{"context":"/array-node(\"comments\")","position":"last-child","content":{"text":"comment on your question","owner":{"id":"cf99542d-f024-4478-a6dc-7e723a51b040","displayName":"JoeUser"},"creationDate":"2015-07-20T09:21:27.942Z"}}}]})
    .reply(204, "", { server: 'MarkLogic',
    'content-length': '0',
    connection: 'Keep-Alive',
    'keep-alive': 'timeout=5' });

  /* SEARCH */
  nock(mlBaseURL)
    .persist()
    .post('/v1/search?format=json', {"search":{"options":{"search-option":["unfiltered"]},"query":{"queries":[{"directory-query":{"uri":["com.marklogic.samplestack.domain.Contributor/"]}},{"value-query":{"json-property":"userName","text":["joe@example.com"]}}]}}})
    .reply(200, "--MLBOUND_1422662400000\r\nContent-Type: application/json\r\nContent-Disposition: attachment; filename=\"com.marklogic.samplestack.domain.Contributor/cf99542d-f024-4478-a6dc-7e723a51b040.json\"; category=content; format=json\r\nContent-Length: 389\r\n\r\n{\"com.marklogic.samplestack.domain.Contributor\":{\"aboutMe\":\"Twitter: [@joeuser](http://twitter.com/joeuser)\\nDisclaimer: This is not me.  JoeUser _doesn't exist_!\\n\", \"displayName\":\"JoeUser\", \"id\":\"cf99542d-f024-4478-a6dc-7e723a51b040\", \"originalId\":null, \"location\":\"San Francisco\", \"reputation\":50, \"userName\":\"joe@example.com\", \"voteCount\":4, \"websiteUrl\":\"http://website.com/joeuser\"}}\r\n--MLBOUND_1422662400000--\r\n", { 'content-type': 'multipart/mixed; boundary=MLBOUND_1422662400000',
    'vnd.marklogic.start': '1',
    'vnd.marklogic.pagelength': '10',
    'vnd.marklogic.result-estimate': '1',
    server: 'MarkLogic',
    'content-length': '661',
    connection: 'Keep-Alive',
    'keep-alive': 'timeout=5' });

  /* TAGS */
  // TODO: Recorder not working for tags

  /* SESSION */
  // TODO: Unsure how to implement this one with current tests - might need to remove negative tests
};

var teardown = function() {
  // TODO: fix call to removeInterceptor - not working
  nock.removeInterceptor({
    hostname : mlHost
  });
  nock.cleanAll();
};

module.exports = {
  setup: setup,
  teardown: teardown
};
