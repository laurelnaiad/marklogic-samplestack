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

define(['app/module'], function (module) {

  /* jshint ignore:start */

  /*
   * @ngdoc directive
   * @name ssQnaDocMetadata
   * @restrict E
   * @description
   * Directive for displaying metadata in QnA document view. Provides helper
   * functions used to generate the UI element content.
   *
   * ## `scope` properties/methods:
   *
   * | Variable  | Type | Details |
   * |--|--|--|
   * | `showContributor`  | {@type function}  | On contributor click, dispatch event to _root.js |
   * | `isLocalOwner` | {@type function} | Determines whether the owner is local or not. |
   * | `soUserLink` | {@type function} | Generates the URL to the users profile. |
   * | `formatDate` | {@type function(Date)} | Formats the date object for friendly rendering in the UI. |
   * | `formatDateRelative` | {@type function(Date)} | Formats the date object, as a human-readable time relative to now, for friendly rendering in the UI. |
   * | `daysSince` | {@type function(Date)} | Return days between now and str date |
   * | `goTag` | {@type function(string)} | Tag click sets tags critieria to that tag, clears all else. |
   */

  /* jshint ignore:end */

  module.directive('ssQnaDocMetadata', [

    'mlUtil',
    'appRouting',
    function (
      mlUtil,
      appRouting
    ) {
      return {
        restrict: 'E',
        templateUrl: '/app/directives/ssQnaDocMetadata.html',
        scope: {
          doc: '=doc',
          docType: '@docType'
        },
        link: function (scope) {
          var unregister = scope.$watch('doc', function (newVal, oldVal) {
            if (newVal) {
              unregister();

              scope.showContributor = function () {
                scope.$emit(
                  'showContributor',
                  {
                    contributorId: scope.doc.owner.id
                  }
                );
              };

              scope.isLocalOwner = function () {
                if (scope.doc.owner) {
                  return scope.doc.owner.originalId === undefined ||
                      scope.doc.owner.originalId === null;
                }
                else {
                  return false;
                }
              };

              scope.soUserLink = function () {
                return scope.doc.owner && scope.doc.owner.originalId ?
                    'http://stackoverflow.com/users/' +
                    scope.doc.owner.originalId :
                    null;
              };

              scope.formatDate = function (date) {
                if (date) {
                  return date.format('MMM D, \'YY') +
                      ' at ' + date.format('H:mm');
                }
              };

              // http://momentjs.com/docs/#/displaying/fromnow/
              scope.formatDateRelative = function (date) {
                if (date) {
                  return date.fromNow();
                }
              };

              scope.daysSince = function (date) {
                if (date) {
                  return mlUtil.moment().diff(date, 'days');
                }
              };

              scope.goTag = function (tag) {
                appRouting.go(
                  'root.layout.explore.results',
                  {
                    'q': null,
                    'tags': tag,
                    'resolved': null,
                    'contributor': null,
                    'date-ge': null,
                    'date-lt': null
                  }
                );
              };

            }
          });

        }
      };
    }
  ]);
});
