var bodyParser = require('body-parser');
var util = require('util');
module.exports = function (options) {
  var MlClient = require('../MlClient');
  var dbClient = new MlClient(options);

  this.use(bodyParser.json());
  this.use('/', dbClient.search);
};
