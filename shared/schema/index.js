var path = require('path');

var app = require('requireindex')(path.join(__dirname, 'app/schema'));
var _marklogic = require('requireindex')(path.join(__dirname, '_marklogic/schema'));

module.exports = _.merge(_.clone(app), _.clone(_marklogic));
