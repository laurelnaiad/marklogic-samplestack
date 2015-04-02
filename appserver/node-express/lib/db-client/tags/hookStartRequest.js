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
 
var mlrest = require('marklogic/lib/mlrest');
var origStartRequest = mlrest.startRequest;
var util = require('util');

mlrest.startRequest = function (operation) {
  if (
    operation.options.path === '/v1/search?format=json&category=content' &&
    operation.requestBody && operation.requestBody.search &&
    operation.requestBody.search.forTag
  ) {
    operation.options.path = '/v1/values/tags?' +
        'pageLength=10000&options=tags&start=1&aggregate=count';
    operation.options.headers.accept = 'application/json';
  }
  return origStartRequest(operation);
};
