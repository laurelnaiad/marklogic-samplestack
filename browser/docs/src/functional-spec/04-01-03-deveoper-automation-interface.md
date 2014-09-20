### User Interface

#### Prerequisites

There are two sets of prerequisites for the Samplestack MVC Browser App.

Java-centric developers who **only want to run the application (not modify it)** can follow the instructions in the Java/Spring Boot Samplestack documentation to run a pre-built version of the web app.  In this case, the Spring container serves the web app's files to the browser(s) and no additional configuration is required.

Those who who want to be able to **modify, test or otherwise develop the browser app** need a tools installed.

* [Node.js](http://nodejs.org/) -- versions 0.10.x and newer should work
* [npm](https://www.npmjs.org/) -- npm is installed automatically with Node.js
* [bower](http://bower.io/) -- must be installed globally to the environment
* [gulp](http://gulpjs.com/) -- must be installed globally to the environment

Instructions for installing these prerequisites are provided in the repository `README`s.

#### Getting the Code Using git

Developers are expected to clone the repository in order to review, run, and experiment with the application.

```bash
git clone https://github.com/marklogic/marklogic-samplestack
```

The master branch of the repository represents the most recently released version of the application, and as the default branch, it is automatically checked out when the repostitory is cloned. A developer who wishes to access more recent builds which have not been officially released may check out the `develop` branch. See [the online version of the Pro Git book](http://git-scm.com/book) for more information on `git`.

#### Installing the Browser Application Dependencies

In order to access the development automation and run it from source, the application's dependencies must be installed.

These commands fetch both the automation dependencies (npm-based) and the development and run-time dependencies (bower-based) of the Samplestack browser app itself.

```bash
marklogic-samplestack/browser$ npm install
marklogic-samplestack/browser$ bower install
```

#### Automated Development Tasks

It is expected that if the developer is also interacting with or running an instance of the middle-tier of the application, two separate terminal windows will be employed. All commands should be executed from the browser subdirectory of the samplestack installation.  

*Note: As time permits or priorities are settled and feedback received, we will consider merging automated tasks into one command-line interface such that a unified command line interface would be available to developers.*

##### gulp run

A developer can run the browser application at any time (regardless of whether or not the middle-tier is running/restarted, etc.):

```bash
marklogic-samplestack/browser$ gulp run
```

This **builds the application, executes its unit tests in the background, and hosts the application on a local web server** (by default at port 3000), so that it can be loaded in a browser at [http://localhost:3000](http://localhost:3000).
 From here a developer can use their browser developer tools to insepct the running unit tests.  Note: if a middle-tier server is not running, loading the application in the browser will result in errors. If this happens, a developer can launch (relaunch) the middle-tier server and refresh the browser to enable the application.

The developer can **run (or rerun) the unit tests in a browser** (by default on port 3001) at [http://localhost:3000/unit-runner.html](http://localhost:3001/unit-runner.html). From here a developer can use their browser developer tools to inspect the running unit tests.

The developer can see a hierarchical **coverage report** for the unit tests at [http://localhost:3004/coverage](http://localhost:3004/coverage).  The report shows on a line-by-line-, branch- and statement-level what code is exercised by the unit tests. It can also be a convenient way to review the source code!

To stop the process, the developer kills it (Ctrl+C in the the terminal works).

No changes to source code/tests/etc that are made while running the application in this mode will be reflected in the browser/tests/coverage.  This is a static build of the application.

####gulp unit [--reporter] [--sauce]

A developer can execute a one-off build and run of the unit tests for the browser app where results are printed to the console:

```bash
marklogic-samplestack/browser$ gulp unit
```

or

```bash
marklogic-samplestack/browser$ gulp unit --reporter spec
```

The default reporter reflects the running of any given test using a dot (`.`).  If a different reporter, such as the `spec` reporter is specified, the the running of a given test will be reflected differently.  The `spec` reporter lists unit tests in their hierarchy of suites, where each suite and test expectation is explicitly listed.

If the developer wants to generate a reporter suitable for consumption in another tool, the xunit format is available.  This format, also known as the JUnit XML format, renders similar information to the `spec` format, but it renders it as XML and saves it to a file (`browser/builds/reports/xunit-UNIT.xml`) instead of reporting it to the console.

```bash
marklogic-samplestack/browser$ gulp run --reporter xunit
```

There is no way to set breakpoints in tests that are executed in the console.  See [gulp run, above](#gulp-run) for how to inspect the tests as they run.

*Note: User choice of the reporter is not yet implemented.*

##### gulp watch

A developer can put the browser development environment into a state where changes to the source code are quickly built and reflected in the running application, including automatic refresh of their browser (subject to browser support for "LiveReload").

```bash
marklogic-samplestack/browser$ gulp watch
```

The `watch` task initially runs the `build` task and then puts the environment in a state where the source code and releveant project-level files (e.g. the development automation code itself) are being monitored for changes (adds/deletes/saves).  When/if the "watcher" sees a change, it attempt to rebuild that file (and any others which may require rebuilding), and to insert the updates file(s) into the running browser app.  Upon changes to the running app, a signal is sent to the broser that it should refresh the page.  Supported browsers are configured by the application itself to connect to the LiveReload port (for the browser app this is the default 35729) and listen for such messages.

If building the changed file(s) does not result in style/syntax errors, the unit tests for the application are rerun in the terminal so the developer can see the results of their changes on the tests.

If a change is made to the project files themselves, typically the development environment application code itself, or if a previous change resulted in style/syntax or other build errors, then the entire `run`-and-then-`watch` process is re-executed to ensure that a full clean build is available.

```bash
marklogic-samplestack/browser$ gulp e2e
```
####gulp e2e [--reporter] [--sauce]

The developer can execute "end-to-end" (aka e2e) tests of the entire Samplestack application (including the database and middle tiers).

The `e2e` task builds the application, and then launches a web browser and drives it through a series of exercises to determine whether the entire application is performing as expected.

As with the unit tests, the developer can specify a reporter. In this case, the only reporter.  The choices are:

* (none-specified): the default reporter prints the names of the features and the tested scenarios to the console
* `xunit`: writes XUnit-formatted results to `browser/builds/reports/xunit-UNIT.xml`

<div style="color: red">there is a skeleton implementation of end-to-end tests in EA2. We are prioritizing breadth of functionality in EA3. In EA3 we will at a minimum configure them to run.</div>

##### The --sauce Parameter

The sauce parameter will connect to Sauce Labs in order to leverage their farm of browsers.

A set of browsers that are configured to be run on sauce will be provided, such that the command will be something like

```bash
marklogic-samplestack/browser$ gulp e2e --sauce ie9
```

to run the end-to-end tests on Internet Explorer 9, or

```bash
marklogic-samplestack/browser$ gulp unit --sauce ff27linux --reporter xunit
```

to run the unit tests on Firefox 27 under linux and save the results in the XUnit format to a local file.  **This example is expected to reflect the kind of command that the MarkLogic test harness will execute and process on a nightly basis. For more information, please follow the [Samplestack Test Specification](https://wiki.marklogic.com/display/rootwiki/Reference+Architecture+and+Implementation+--+Test+Specification).

Since Sauce Labs has so many browser/OS combinations available, this is a great, free resource for developers of open source projects (or can be used via a paid account with Sauce Labs).

This form of testing does not require any software to be installed on machines other than the developer's.

<div style="color: red">We could not leverage free Sauce testing until the repository was open-sourced, and it has not been configured, yet.  Sauce integration has been fairly easy to set up in the past. If all goes well it should be available in EA3.</div>

It should be noted the testing in this manner does not obviate the need to test the **build process** in a variety of environments.  For that, a developer can use [Travis](https://travis-ci.org/). Again, free access to Travis was not available to us prior to open-sourcing the repository and it has not yet been configured. In the case of Travis, the developer does not directly interact with these tests; rather, the tests are instigated by pushes to either the MarkLogic origin repository, or can be configured by the develop to run against their fork.
