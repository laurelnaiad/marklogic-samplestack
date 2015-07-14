var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var request = require('supertest');
var sinon = require('sinon');
var ctx = require('../../../../shared/js/dev-tasks/context.js');
var adds = ctx.options.addresses;

global.expect = chai.expect;
global.sinon = sinon;
global.request = request('http://localhost:3000');

var dbClient = require('./db-client');
var middleware = require('./middleware');
var routing = require('./routing');

describe('node express unit tests', function() {
  before(function() {
    ctx.startServer(ctx.paths.browser.buildDir, adds.webApp.port);
  });

  // dbClient();
  // middleware();
  routing();

  after(function(done) {
    ctx.closeActiveServer(adds.webApp.port, done);
  });
});
