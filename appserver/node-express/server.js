/*
main module for samplestack/appserver/node-express

http://mervine.net/clustering-in-nodejs

 */

var options = {

  rest: {
    port: 8081,
    address: '0.0.0.0'
  },

  db: {
      adminConnection: {
      host:     'localhost',
      port:     '8006',
      user:     'admin',
      password: 'admin',
      authType: 'DIGEST'
    }
  }
};

var server = require('./lib/server')(options);

server.listen(options.rest.port, options.rest.address);
console.log(
  'MarkLogic Node.js server listening at ' +
      'http://' + options.rest.address + ':' + options.rest.port
);
