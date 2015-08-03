var path = require('path');

var _ = require('lodash');

var app = require('requireindex')(path.join(__dirname, 'app'));
var _marklogic = require('requireindex')(path.join(__dirname, '_marklogic'));

module.exports = _.merge( _.clone(app), _.clone(_marklogic));
