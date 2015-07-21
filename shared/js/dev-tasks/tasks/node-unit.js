/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO docs
//
var runUnit = require('../node-unit/runUnit');
var ctx = require('../context');
var helper = require('../helper');
var $ = helper.$;
var chalk = require('chalk');

var mochaReporter = 'dot';

// We don't want express complaining about deprecated APIs when it's not
// our code that's using them.
// TODO: this seems like a strange place to set this.
process.env['NO_DEPRECATION'] = 'express';

module.exports = [{
  name: 'node-unit',
  deps: ['build'],
  func: function (cb) {
    // if (ctx.hadErrors || ctx.rebuildOnNext) {
    //   $.util.log(chalk.yellow('skipping unit tests due to build errors'));
    //   cb();
    // }
    // else {
    // TODO: read alternative reporter(s) from minimist in order to support
    // test harness automation
    if (ctx.currentTask === 'node-unit') {
      var adds = ctx.options.addresses;
      ctx.startServer(ctx.paths.browser.buildDir, adds.webApp.port);
    }

    runUnit({}, function (err) {
      if (ctx.currentTask === 'node-unit') {
        ctx.closeActiveServers(function () {
          if (err) {
            process.exit(1);
          }
          else {
            process.exit(0);
          }
          // cb(err);
        });
      }
      else {
        cb(err);
      }
    });
      //     // function () {
      //     //   if (err) {
      //     //     cb(err);
      //     //   }
      //     //   else {
      //     //
      //     //   }
      //     // //   console.log(cb.toString());
      //     // //   cb();
      //     // //   process.exit(err ? 1 : 0);
      //     // // });
      //   }
      //   // else {
      //   //   ctx.deployBuilt(function (err) {
      //   //     if (err) {
      //   //       cb(err);
      //   //       process.exit(err ? 1 : 0);
      //   //     }
      //   //     else {
      //   //       cb();
      //   //       process.exit(0);
      //   //     }
      //   //   });
      //   // }
      // });
    // }
  }
}];
