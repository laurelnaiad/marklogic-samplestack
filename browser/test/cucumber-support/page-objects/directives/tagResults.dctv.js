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

module.exports.support = function (obj) {
  /*******************************/
  /******** PUBLIC API ***********/
  /*******************************/


  Object.defineProperty(obj, 'tagSuggestionsCount', {
    get: function () {
      return getTagSuggestionItemCount();
    }
  });

  obj.suggestionItem = function (index) {
    return getTagSuggestionItems().map(function (elm) {
      return elm.getText();
    }).then(
      function (items) {
        return items[index].replace(/ *\([^)]*\) */g, '');
      }
    );
  };

  obj.firstSuggestionItem = function () {
    return getTagSuggestionItems().map(function (elm) {
      return elm.getText();
    }).then(
      function (items) {
        return items[0].replace(/ *\([^)]*\) */g, '');
      }
    );
  };

  obj.lastSuggestionItem = function () {
    return getTagSuggestionItems().map(function (elm) {
      return elm.getText();
    }).then(
      function (items) {
        return items[items.length - 1].replace(/ *\([^)]*\) */g, '');
      }
    );
  };

  obj.firstAllTagsListItem = function () {
    return getAllTagsItems().map(function (elm) {
      return elm.getText();
    }).then(
      function (items) {
        return items[0];
      }
    );
  };

  obj.lastAllTagsListItem = function () {
    return getAllTagsItems().map(function (elm) {
      return elm.getText();
    }).then(
      function (items) {
        return items[items.length - 1];
      }
    );
  };

  obj.allTagsList = function () {
    return getAllTagsItems().map(function (elm) {
      return elm.getText();
    });
  };

  /*******************************/
  /********** PRIVATE ************/
  /*******************************/

  var getTagSuggestionItems = function () {
    return element.all(
      by.css('.tags-module-search-input .dropdown-menu li a')
    );
  };

  var getAllTagsItems = function () {
    return element.all(
      by.css('.ss-dialog-all-tags .ss-column label span')
    );
  };

  var getTagSuggestionItemCount = function () {
    return getTagSuggestionItems().count();
  };

};
