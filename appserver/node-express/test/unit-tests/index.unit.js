var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var request = require('supertest');
var sinon = require('sinon');

global.expect = chai.expect;
global.sinon = sinon;
global.request = request('http://localhost:3000');

// var dbClient = require('./db-client');
// var middleware = require('./middleware');
var routing = require('./routing');

describe('node-express/lib', function () {

  // dbClient();
  // middleware();
  routing();

});
