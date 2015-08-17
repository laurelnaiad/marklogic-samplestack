module.exports = require('requireindex')(__dirname);
//
//
// initializeMarkLogic (if necessary)
//   POST
// initializeAdmin (if necessary)
//
// teardownRest (if dbclean)
// teardownDb (if dbclean)
//
//
// initializeSecurity (if sec changed)
// initializeDatabase (if db props changed)
// seedData
// initializeRest
// configureRest
//
//
// adminInit ()

/*
******************
* "clear"
******************

void updateDatabase() {
  //seems like a bad console message!
    logger.error("Saving Database Configuration")
    RESTClient client = manageClient("databases/" + config.marklogic.rest.name)
    def params = [:]
    params.contentType = "application/json"
    params.body = '{"operation":"clear-database"}'
    post(client,params)
}

******************
* "delay"
******************


RESTClient client = new RESTClient("http://" + config.marklogic.rest.host + ":8001/admin/v1/timestamp")
def params = [:]
client.auth.basic config.marklogic.admin.user, config.marklogic.admin.password
try {
Thread.sleep(1000)
    client.get(params)
} catch (ex) {
logger.warn("Waiting for server restart...");
    delay();
}

******************
* init task
******************

adminInit(
  POST http://" + config.marklogic.rest.host + ":8001/admin/v1/init
  -> 403 unauth -> Stopping
  -> 401 or 500 assume already done (is this strategy optimial?)
  -> other ERR: log and ignored
  -> then(delay)

)

adminSetup(
  POST http://" + config.marklogic.rest.host + ":8001/admin/v1/instance-admin")
  then same as above
)

createUsers(
  multiple POST http://" + config.marklogic.rest.host + ":8002/manage/v2/" + 'users''
)

createRoles(
  multiple POST http://" + config.marklogic.rest.host + ":8002/manage/v2/" + 'roles''
)

restBoot(
 POST "http://" + config.marklogic.rest.host + ":8002/v1/rest-apis"
  with credentials, body defines REST server options

  "ignoring server creation error"
)

*****************
* teardown task
*****************

"teardown rest(
  (using "bootstrap" client)
  "http://" + config.marklogic.rest.host + ":8002/v1/rest-apis/" + config.marklogic.rest.name)
   DELETE queryString = "include=content&include=modules"
)
then delay,
thrn delete users and roles
        def url = "http://" + config.marklogic.rest.host + ":8002/manage/v2/"
        (url + "users/samplestack-guest
        url + "users/samplestack-contributor")
        (url + "roles/samplestack-guest")
        url + "roles/samplestack-writer"


*****************
* configure task
*****************

putTransform(
"http://" + config.marklogic.rest.host + ":" + config.marklogic.rest.port + "/v1/config/transforms/" + transformName)
 // monkey business with encoder/content types

)
putExtension(
  "http://" + config.marklogic.rest.host + ":" + config.marklogic.rest.port + "/v1/ext/" + extensionName)
  // similar monkey business
)
putServiceExtension(
"http://" + config.marklogic.rest.host + ":" + config.marklogic.rest.port + "/v1/config/resources/" + extensionName)
// similar monkey business
)

putOptions(
"http://" + config.marklogic.rest.host + ":" + config.marklogic.rest.port + "/v1/config/query/" + optionsName)
less monkey business
)

dbProperties(
 (e.g. "database-properties.json")
 "http://" + config.marklogic.rest.host + ":8002/manage/v2/databases/" + config.marklogic.rest.name + "/properties")
)
restProperties(
(e.g.  "rest-properties.json")
"http://" + config.marklogic.rest.host + ":" + config.marklogic.rest.port + "/v1/config/properties")
)

db=clean == db=reseed db=reconfigure
serverConfigured()
.then(databaseConfigured)
.then(restConfigured)
.then(dataConfigured)



"reinit"
hostInit("fqdn:port")
    (incl. delay if init required), if timestamp then move on
adminInited = adminInit(admin.user, admin.pass, ) (incl. delay if init requied ?or bomb if bad credentials?)
secChanged = securityInit()

restReinit(rest.name, rest.port, admin.user, admin.pass)
restReconfig







*/
