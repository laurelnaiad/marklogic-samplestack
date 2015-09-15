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

var baseUri = 'com.marklogic.samplestack.domain.Contributor/';

module.exports = {
  /**
   * Convenience variable storing the baseURL of all contributor documents.
   */
  baseUri: baseUri,

  /**
   * Util function that constructs a contributor document URI
   *
   * @param  {String} contributorId The contrbutor ID.
   * @return {String} The contributor document URI.
   */
  getUri: function (contributorId) {
    return this.baseUri + contributorId + '.json';
  },

  /**
   * Function that parses the docID from the response generated from a call to
   * documents.patch(req).result() and returns a simple object with that ID
   * as it's property.
   *
   * @param  {Object} resp The contrbutor ID.
   * @return {Object} The contributor document ID.
   */
  responseToSpec: function (resp) {
    var docID;
    if (resp && resp.uri) {
      docID = resp.uri.split('/');
      docID = docID[docID.length - 1].replace('.json','');
    }
    else {
      throw new Error({error: 'unexpected respone', response: resp });
    }
    return { id : docID };
  }
};
