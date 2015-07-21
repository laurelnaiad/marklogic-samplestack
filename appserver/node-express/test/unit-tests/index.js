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
var path = require('path');
// nock.recorder.rec();

global.nock = nock;
global.sinon = sinon;
global.expect = chai.expect;
global.agent = request.agent('http://localhost:3000');
global.libRequire = function (mod) {
  return require(path.resolve(__dirname, '../../lib', mod));
};

// global.request = request('http://localhost:3000');

// var dbClient = require('./db-client');
// var middleware = require('./middleware');
// var routing = require('./routing');
//
var modules = require('requireindex')(__dirname);
describe('node-express/lib', function () {
  Object.keys(modules).forEach(function (mod) {
    if (mod !== 'mocks') {
      modules[mod]();
    }
  });
  // dbClient();
  // middleware();
  // routing();
});
