var P = require('bluebird');
var _ = require('lodash');

var defaulContext = {
  clean: {
    // the most typical case for development is that we don't want to redploy
    // all the code as we launch, but not mess with data or teardown
    // the whole appserver/db. Naturally once we're in watch mode,
    // we don't clean anything (although we'll do deletes if they come
    // through.
    browser: true,
    node: true,
    dbInstance:false,
    db: true,
    data: false
  },

  test: {
    browser: true,
    node: true,
    db: false // db tests are not yet implmented
    e2e: false // unless we're in the test task itself, we don't run e2e
  }
};

var somethingToDo = function (spec) {
  // somethingToDo is true if any of the keys in the spec are truthy
  return _.some(cleanSpec, function(key, val) {
    return val;
  });
};


var cycle = Object.create(

  /**
   * Perform a full cycle, executing only the steps that are flagged to
   * run. This generic cycle allows us to author the build as a unified
   * set of steps, even if the context specifies that only some of the
   * steps are to be performed (e.g. to clean the database or not, to
   * run the tests or not, etc)
   * @param  {Stream.<File>|Event|Array.<string>} File(s) to be handled.
   * An Array of strings will be processed as a gulp glob src.to the build.
   * An Event consist of File obj and what has happened to it
   * (see gulp-watch plugin). If files is an Event, then we will always
   * ignore context.clean.
   * @param  {object} context Flags on what should be done and how to go about
   * doing it.
   * @param  {object} services  Services allow the build access to functionality
   * likie starting and stopping a server instance, shared state and other
   * helper function
   * @param  {Object} appConfig Configuration options for the application
   * itself (as oopposed to the building of it). This is entirely app-specific.
   * @return {Promise} Resolves unless a processing error occured. If there
   * were errors, the resolved value is an array of them. Rejects only
   * if the build process itself didn't function as expected.
   */
  run: function (files, context, services, appConfig) {
    // duck type on whether we're given an event
    var isEvent = files.event;
    // if it's an event, then we never clean.
    // Otherwise, if any tier is configured to be cleaned, then we need to do
    // the clean step, otherwise we skip it altogether.
    var doClean = !isEvent && somethingToDo(context.clean);

    //
    var doTests = somethingToTest(context.test);


  }



);
