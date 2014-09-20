## Automated Development Environment

### Directory Structure

The automated development environment code lives in the dev-tasks
directory of the browser application:

```
.
├── README.md
├── build                  // code related to building the app
│   ├── buildSteps.js      // individual steps in the build
│   └── runBuild.js        // build runner
├── cloner.js              // clone one stream into another
├── context.js             // manages state during build and shared functions
├── counter.js             // count files in stream
├── helper.js              // helper vars and functions for the process
├── index.js               // main module for the dev tasks
├── rebaser.js             // move the base dir of stream's files
├── tasks                  // individually addressable tasks
│   ├── bower-files.js     // copy bower components to target directories
│   ├── build.js           // exeute a build
│   ├── clean.js           // cleans builds directory
│   ├── e2e.js             // runs e2e tests
│   ├── run.js             // builds app and puts in "run" mode
│   ├── seed-patch.js      // patch seed data to improve data quality
│   ├── server-stress.js   // put stress on the middle tier
│   ├── unit.js            // run unit tests
│   └── watch.js           // build, unit test, run and watch for changes
└── unit                   // code related to unit testing
    └── runUnit.js         // unit test runner
```
### Implementation Phases and Timeline

As a distinct application, most of the browser application's development
environment automation
was completed early in the Milestone 3 phase.

Remaining for EA3:

- improve end-to-end testing automation / [drive middle tiers](https://github.com/marklogic/samplestack-internal/issues/117)
- generate test reports for inclusion in harness
- begin to author end-to-end tests with finalized seed data

Pre-1.0.0:

- Integrate with Node.js tier automation
- integrate with Cloud-based testing to support automated testing on multiple operating systems and browsers
