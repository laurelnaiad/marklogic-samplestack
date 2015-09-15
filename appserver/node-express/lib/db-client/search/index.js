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

var _ = require('lodash');

var moment = require('moment-timezone');

/**
 * The search function that transforms a search spec into a valid MarkLogic
 * Node.js API call to MarkLogic server.  Handles shadow search, directory
 * queries, and date bucketing.
 *
 * @param  {Object} spec The search spec.
 * @return {Object} The Node.js API query response object, with some
 * transormations to that add content and snippets.
 */
var search = function (spec) {
  var query = spec;

  // search settings
  query.pageStart = spec.search.start;
  delete query.search.start;
  query.pageLength = 10;
  query.optionsName = 'questions';
  query.view = 'all';
  if (!spec.shadow) {
    // this transform not needed for shadow queries because they
    // don't need content, just facets aggregates
    query['transform'] = 'search-response';
  }

  // limit to qna docs
  var dirClause = {'directory-query': {uri:[ '/questions/' ]}};
  if (query.search.query) {
    query.search.query['and-query'].queries.push(dirClause);
  }
  else {
    query.search.query = { 'and-query': { 'queries': [ dirClause ] } };
  }

  // create date buckets for facet
  var datesBuckets = {
    'name': 'date',
    range: {
      facet: true,
      'json-property': 'lastActivityDate',
      'type': 'xs:dateTime',
      'bucket':[]
    }
  };
  // Seed data (v1.8.2) range:
  // 2009-06-08T02:33:16.860Z - 2014-10-01T08:59:12.230Z
  var minDate = moment('2009-06-01T00:00:00Z')
                  .tz(spec.search.timezone).startOf('M');
  var maxDate = moment().tz(spec.search.timezone);
  var currDate = minDate.clone();
  var b;
  var nextDate;
  while (currDate < maxDate) {
    nextDate = currDate.clone().add(1, 'month');
    b = {
      ge: currDate.format(),
      lt: nextDate.format(),
      name: currDate.format(),
      label: currDate.format()
    };
    datesBuckets.range.bucket.push(b);
    currDate = nextDate;
  }
  _.merge(query.search, { options: { constraint: [ datesBuckets ]}});

  // execute async search
  return this.documents.query(query).result()
  .then(function (response) {
    // final response is first element of original response
    var finalResponse = response.shift();
    // there is no need to worry about the individual items in shadow queries
    // because they only deal in facet aggregates
    if (!spec.shadow) {
      // put doc content into each result
      _.each(finalResponse.results, function (finalItem, index) {
        var snippets = finalItem.matches;
        delete finalItem.matches;
        finalItem.content = response[index].content;
        // add snippets if they exist
        if (snippets && snippets.length && snippets[0].id) {
          delete finalItem.content.text;
          finalItem.content.snippets = snippets;
        }
      });
    }
    return finalResponse;
  });
};

module.exports = function (connection) {
  return search.bind(connection);
};
