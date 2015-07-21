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
var options = sharedRequire('js/options');
var ldapOpts = options.middleTier.ldap;
var ldapHost = ldapOpts.hostname + ':' + ldapOpts.port;
var ldapBaseURL = ldapOpts.protocol + '://' + ldapHost;

var setup = function() {
  // nock(ldapBaseURL)
  //       .persist()
  //       .get('/users/1')
  //       .reply(200, {
  //         _id: '123ABC',
  //         _rev: '946B7D1C',
  //         username: 'pgte',
  //         email: 'pedro.teixeira@gmail.com'
  //        });
};

var teardown = function() {
  nock.removeInterceptor({
    hostname : ldapHost
  });
};

module.exports = {
  setup: setup,
  teardown: teardown
};
