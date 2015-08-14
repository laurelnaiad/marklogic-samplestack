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

module.exports = function () {
  this.World = World;

  this.Then(
    /pause/,
    function (next) {
      browser.pause();
    }
  );

  this.Then(
    /tag suggestion count is "(.*)"/,
    function (count, next) {
      expect(this.currentPage.tagSuggestionsCount)
          .to.eventually.equal(parseInt(count)).and.notify(next);
    }
  );

  this.Then(
    /the (.*) suggestion in the tag suggestion list shows "(.*)"/,
    function (positional, value, next) {
      switch (positional) {
        case 'first':
          expect(this.currentPage.firstSuggestionItem())
              .to.eventually.equal(value).and.notify(next);
          break;
        case 'last':
          expect(this.currentPage.lastSuggestionItem())
              .to.eventually.equal(value).and.notify(next);
          break;
        default:
          next('Invalid positional for tag suggestion list result: '
            + positional);
      }
    }
  );

  this.Then(
    /the (.*) tag in the all tags dialogue is "(.*)"/,
    function (positional, value, next) {
      switch (positional) {
        case 'first':
          expect(this.currentPage.firstAllTagsListItem())
              .to.eventually.equal(value).and.notify(next);
          break;
        case 'last':
          expect(this.currentPage.lastAllTagsListItem())
              .to.eventually.equal(value).and.notify(next);
          break;
        default:
          next('Invalid positional for all tags dialogue list result: '
            + positional);
      }
    }
  );

  this.Then(
    /sort all tags by (.*)/,
    function (sort, next) {
      this.currentPage.filters.sortMoreTags(sort)
          .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /the available tags list shows (.*)/,
    function (tagList, next) {
      this.currentPage.filters.allTagsList()
          .to.eventually.equal(tagList).and.notify(next);
    }
  );

  this.When(
    /open the more tags dialogue/,
    function (next) {
      this.currentPage.filters.openMoreTags()
          .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /close the more tags dialogue/,
    function (next) {
      this.currentPage.filters.closeMoreTags()
          .then(this.notifyOk(next), next);
    }
  );

};
