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
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
var request = require('supertest');
var path = require('path');
var _ = require('lodash');

global.nock = require('nock');
global.sinon = require('sinon');
global.assert = chai.assert;
global.expect = chai.expect;
global.agent = request.agent('http://localhost:3001');

var modules = require('requireindex')(__dirname);
describe('node-express/lib', function () {
  Object.keys(modules).forEach(function (mod) {
    if (mod !== 'mocks') {
      modules[mod]();
    }
  });
});
