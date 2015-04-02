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
 
var hookStartRequest = require('./hookStartRequest');

var funcs = {};

var filterResponse = function (response, forTag, start, pageLength) {
  var vals = response['values-response'];
  if (vals) {
    var distinct = vals['distinct-value'];
    var zeroIndexStart = start - 1;
    if (distinct) {
      var newVals = [];
      var ignored = 0;
      _.each(distinct, function (distinctVal) {
        if (!forTag || distinctVal._value.indexOf(forTag) >= 0) {
          if (zeroIndexStart - 1 <= ignored) {
            newVals.push(distinctVal);
            if (newVals.length === pageLength) {
              return false;
            }
          }
          else {
            ignored++;
          }
        }
      });

      vals['distinct-value'] = newVals;
    }
  }
  return response;
};

// TODO In 8.0-1, CANNOT include parse* information with Node Client values
// call, thus we can't get tags constrained to current search qtext/facets
// or typeahead text.
// Fixed in 8.0-2: https://github.com/marklogic/node-client-api/issues/155
//.DO NOT TRY THE BELOW TECHNIQUE AT HONME.
// The use of the hookStartRequest is not recommended. It is a temporary workaround
// for Samplestack 1.1.0, to be used only as long as compatibility with Node
// Client version 1.0.1 is required.
funcs.getTags = function (spec) {
  spec.search.qtext.push('tagword:"*' + spec.search.forTag + '*"');
  var start = spec.search.start;
  delete spec.search.start;
  var pageLength = spec.search.pageLength;
  delete spec.search.pageLength;

  spec.search.options = {
    values: {
      range: {
        type: 'xs:string',
        'json-property': 'tags'
      },
      name: 'tags',
      'values-option': 'item-order'
    }
  };
  var result = this.documents.query(spec).result();

  return result.then(function (response) {
    // unhook();
    return filterResponse(response, spec.search.forTag, start, pageLength);
  })
  .catch(function (err) {
    // unhook();
    throw err;
  });
};


module.exports = function (connection) {
  // create an object with the funcs all bound to the given connection
  var self = {};
  _.each(funcs, function (func, name) {
    self[name] = func.bind(connection);
  });
  return self;
};
