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

var path = require('path');

var chalk = require('chalk');
var gulp = require('gulp');
var globs = require('../globs');

var testAndResolve = function (ctx) {

  return ctx.services.coverageServer.executeUnit();
};

module.exports = function (ctx, options) {

  if (
    options.unit && (ctx.browserBuilt || ctx.nodeBuilt)
    // (options.unit === 'conditional' && ctx.browserBuilt) ||
    // options.unit && options.unit !== 'conditional'
  ) {
    return testAndResolve(ctx, options);
  }
  else {
    return Promise.resolve(null);
  }
};
