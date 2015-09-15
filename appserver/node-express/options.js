module.exports = {
  /* jshint ignore:start */
  // whether or not to run the coverage middleware
  istanbul: <%= options.istanbul || false %>,
  // if a URL string, defines the middletier REST server
  // to which to proxy all /v1 requests (instead of having this instance handle)
  v1ProxyUrl: <%= options.v1ProxyUrl || false %>,
  // how many worker child processes to launch
  port: <%= options.port || 3000 %>,
  // whether to use https or not
  numWorkers: 1,
  // easy access to the contents of package.json file
  // pkg: require('./package.json'),
  // ip to which the server children bind
  address: '0.0.0.0',
  // port on which server children bind
  https: false,
  // https: {
  //   key: fs.readFileSync('sslcert/server.key', 'utf8'),
  //   cert: fs.readFileSync('sslcert/server.crt', 'utf8')
  // }
  // whether html5 pushstate mode should be enabled (if serving webapp)
  html5Mode: true,
  // whether to run/enforce CSRF protection
  enableCsrf: false,
  // properties for database tier connections
  db: {
    clientConnection: {
      host:     'localhost',
      port:     '8006',
      authType: 'DIGEST'
    }
  },
  ldap: {
    hostname: 'localhost',
    port: <%= options.ldapPort || 33390 %>, // if null, find a port at launch
    adminDn: 'cn=root',
    adminPassword: 'admin',
    searchBase: 'ou=people,dc=samplestack,dc=org',
    searchFilter: '(uid={{username}})',
    useBuiltInServer: true,
    // true for ldap over ssl (built-in server support not implemented)
    protocol: 'ldap' // or 'ldaps' for secure
  },
  // mapping of LDAP roles to database credentials
  rolesMap: {
    admins: {
      name: 'admins',
      ldap: 'cn=admins,ou=groups,dc=samplestack,dc=org',
      dbUser: 'samplestack-admin',
      dbPassword: 'samplestack-admin-password'
    },
    contributors: {
      name: 'contributors',
      ldap: 'cn=contributors,ou=groups,dc=samplestack,dc=org',
      dbUser: 'samplestack-contributor',
      dbPassword: 'sc-pass'
    },
    default: {
      name: 'default',
      dbUser: 'samplestack-guest',
      dbPassword: 'sa-pass'
    }
  }
  /* jshint ignore:end */
};
