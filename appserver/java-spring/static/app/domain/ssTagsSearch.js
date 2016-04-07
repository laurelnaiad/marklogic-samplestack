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
  'app/module', 'json!app/schema/ssTagsSearch.json'
], function (module, schema) {

  /**
   * @ngdoc domain
   * @name ssTagsSearch
   * @requires mlModelBase
   * @requires mlSchema
   * @requires ssSearch
   *
   * @description
   * Implements search over tags on top of an ssSearch for the Samplestack
   * application (as {@link SsTagsSreachObject}).
   *
   */

  module.factory('ssTagsSearch', [

    'mlModelBase', 'mlSchema', 'ssSearch', 'mlSearch', 'mlUtil',
    function (
      mlModelBase, mlSchema, ssSearch, mlSearch, mlUtil
    ) {

      // var ssSearchObj = ssSearch.object;

      /**
       * @ngdoc type
       * @name SsTagsSearchObject
       * @description The model instance prototype for
       * {@link ssTagsSearch}, derived from {@link SsSearchObject}.
       */

      /**
       * @ngdoc method
       * @name SsTagsSeaarchObject#constructor
       * @param {object} spec Data used to populate
       * the new instance.
       * @description Constructor. Creates the basic structure of a search,
       * including the definitions for search criteria and facets, and
       * sets the pageLength for search results.
       */
      var SsTagsSearchObject = function (spec) {
        var self = this;
        spec = mlUtil.merge(
          {
            criteria: {
              // defaults are configured for typeahead use case
              tagsQuery: {
                start: 1,
                pageLength: 8
              },
              constraints: {
                resolved: {
                  constraintName: 'resolved',
                  constraintType: 'value',
                  type: 'boolean',
                  queryStringName: 'resolved'
                },
                userName: {
                  constraintName: 'userName',
                  constraintType: 'value',
                  type: 'text',
                  queryStringName: 'contributor'
                },
                tags: {
                  constraintName: 'tag',
                  constraintType: 'range',
                  type: 'enum',
                  subType: 'value',
                  queryStringName: 'tags',
                  facetValuesType: 'object'
                },
                dateStart: {
                  constraintName: 'lastActivity',
                  constraintType: 'range',
                  type: 'dateTime',
                  operator: 'GE',
                  queryStringName: 'date-ge'
                },
                dateEnd: {
                  constraintName: 'lastActivity',
                  constraintType: 'range',
                  type: 'dateTime',
                  operator: 'LT',
                  queryStringName: 'date-lt'
                }
              }
            }
          },
          spec
        );
        ssSearch.object.call(this, spec);
        delete this.facets;
        this.testValidity();

        // pageLength is driven by the property under forTags, so read this
        // from there so that paging functionality works
        Object.defineProperty(this.$ml, 'pageLength', {
          get: function () {
            return self.criteria.forTags.pageLength;
          }
        });
      };

      SsTagsSearchObject.prototype = Object.create(
        ssSearch.object.prototype
      );

      SsTagsSearchObject.prototype.getResourceName = function (httpMethod) {
        return 'tags';
      };

      SsTagsSearchObject.prototype.$mlSpec = {
        schema: mlSchema.addSchema(schema)
      };

      SsTagsSearchObject.prototype.$mlSpec.serviceName = 'ssTagsSearch';

      SsTagsSearchObject.prototype.getHttpDataPOST = function () {
        var base = ssSearch.object.prototype
            .getHttpDataPOST.call(this);

        // we don't want the server to bother sorting the underlying data
        if (base.search.qtext.length > 1) {
          base.search.qtext.pop();
        }

        base.search = mlUtil.merge(base.search, this.criteria.tagsQuery);

        return base;
      };

      SsTagsSearchObject.prototype.onResponsePOST = function (data) {
        data = data['values-response'];
        this.results = {
          asManyAs: data['aggregate-result'][0]._value,
          count: data.total,
          items: _.map(
            data['distinct-value'],
            function (item) {
              return { name: item._value, count: item.frequency };
            }
          )
        };
      };

      return mlModelBase.extend('SsTagsSearchObject', SsTagsSearchObject);
    }
  ]);
});
