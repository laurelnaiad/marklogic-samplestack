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

var Promise = require('bluebird');
var errs = libRequire('errors');
var qb = require('marklogic').queryBuilder;

module.exports = {
  /**
   * Function for unwrapping POJOs. POJO-managed docs "bury" the content
   * under a Java fully qualified class name, so we find the first key an use
   * it to locate the actual content.
   *
   * @param  {Object} pojo The POJO.
   * @return {Object} The unwrapped POJO.
   */
  unwrapPojo: function (pojo) {
    return pojo[Object.keys(pojo)[0]];
  },

  /**
   * Function returning just the content property of the first response item.
   * If no response items exist, it throws a cardinality error.
   *
   * @param  {Object} response The search query response.
   * @return {Object} The content from that response.
   */
  getOnlyContent: function (response) {
    if (response.length !== 1) {
      throw errs.cardinality({ length: response.length,
        response: response });
    }
    else {
      return response[0].content;
    }
  },

  /**
   * Function returning just the content property of the first response item.
   * If more than one response item exists, it throws a cardinality error.
   *
   * @param  {Object} response The search query response.
   * @return {Object} The content from that response.
   */
  getOneOrNoneContent: function (response) {
    if (response.length > 1) {
      throw errs.cardinality({ length: response.length,
        response: response });
    }
    else {
      return response[0] ? response[0].content : undefined;
    }
  },

  /**
   * Function returning an array of values by running the search spec through
   * Query Builder value() for each name and property.
   *
   * @param  {Object} spec The search spec.
   * @return {Array} qb.values as an array.
   */
  specToValues: function (spec) {
    return _.map(spec, function (property, name) {
      return qb.value(name, property);
    });
  },

  /**
   * Function for generating a v4 UUID.
   */
  uuid: require('node-uuid').v4
};
