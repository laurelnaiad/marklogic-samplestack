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
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var request = require('supertest');
var sinon = require('sinon');
var ctx = require('../../../../shared/js/dev-tasks/context.js');
var adds = ctx.options.addresses;
var nock = require('nock');
// nock.recorder.rec();

global.nock = nock;
global.sinon = sinon;
global.stubs = require('../stubs');
global.httpMocks = require('../http-mocks');
global.expect = chai.expect;
global.agent1 = request.agent('http://localhost:3000');
global.agent2 = request.agent('http://localhost:3000');
global.request = request('http://localhost:3000');
global.contributor = { username: 'joe@example.com', password: 'joesPassword' };
global.mluser = { username: 'admin', password: 'admin' };

var dbClient = require('./db-client');
var middleware = require('./middleware');
var routing = require('./routing');

describe('node-express/lib', function () {
  dbClient();
  middleware();
  routing();
});
