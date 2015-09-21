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

define([
  'app/module', 'json!schema/app/ssAcceptedAnswer.json'
], function (module, schema) {

  /**
   * @ngdoc domain
   * @name ssAcceptedAnswer
   * @requires mlModelBase
   * @requires mlSchema
   *
   * @description
   * Implements accepted answer operations for the Samplestack application.
   *
   * `ssAnswer` is a derivation of {@link mlModelBase},
   * customized to be able to handle accepted answer operations.
   *
   */

  module.factory('ssAcceptedAnswer', [

    'mlModelBase', 'mlSchema',
    function (
      mlModelBase, mlSchema
    ) {

      /**
       * @ngdoc method
       * @name ssAcceptedAnswer#constructor
       * @param {object} spec Data used to populate
       * the new instance.
       * @description Constructor. Uses default implementation.
       */
      var ssAcceptedAnswer = function (spec, parent) {
        mlModelBase.object.call(this, spec, parent);
      };

      ssAcceptedAnswer.prototype = Object.create(
        mlModelBase.object.prototype
      );

      ssAcceptedAnswer.prototype.$mlSpec = {
        schema: mlSchema.addSchema(schema)
      };

      /**
       * @ngdoc method
       * @name ssAcceptedAnswer#prototype.getResourceName
       * @description Returns the name associated with the REST endpoint used
       * to operate on an answer.
       * @return {string} Route name fragment.
       */
      ssAcceptedAnswer.prototype.getResourceName = function (httpMethod) {
        return 'accept';
      };

      /**
       * @ngdoc method
       * @name ssAcceptedAnswer#prototype.getHttpUrl
       * @description Returns URL string for accessing REST endpoint based
       * on HTTP method. Overrides mlModelBase method since the referencing
       * the parent object in the URL is required. Ends up posting to
       * /v1/questions/{questionid}/answers (given current
       * parent resource name). This could be genericized as a means to deal
       * with posting of nested resources generally.
       * @param {string} httpMethod HTTP method.
       */
      ssAcceptedAnswer.prototype.getHttpUrl = function (httpMethod) {
        switch (httpMethod) {
          case 'POST':
            var url =
              '/' + this.$ml.parent.$ml.parent.getResourceName(httpMethod) +
              this.$ml.parent.$ml.parent.getEndpointIdentifier(httpMethod) +
              '/' + this.$ml.parent.getResourceName(httpMethod) +
              this.$ml.parent.getEndpointIdentifier(httpMethod) +
              '/' + this.getResourceName(httpMethod);
            return url;
          default:
            throw new Error(
              'unsupported http method passed to getEndpoint: ' + httpMethod
            );
        }
      };

      /**
       * @ngdoc method
       * @name ssAcceptedAnswer#prototype.onResponsePOST
       * @description Overrides mlModelBase method. Since endpoint returns
       * an entire QnaDoc object, the answer's parent method is called.
       * @param {string} data Response data
       */
      ssAcceptedAnswer.prototype.onResponsePOST = function (data) {
        return this.$ml.parent.onResponsePOST(data);
      };

      return mlModelBase.extend('ssAcceptedAnswer', ssAcceptedAnswer);
    }
  ]);
});
