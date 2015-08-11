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

module.exports.Metadata = function (webElement, page, type) {
  var self = this;

  Object.defineProperty(self, 'reputation', {
    get: function () {
      return self.getReputationElement().getText().then(function (rep) {
        return parseInt(rep);
      });
    }
  });

  self.openContributorDialog = function () {
    return page.pself(self.getAuthorElement().element(by.css('a')).click());
  };

  self.getAuthorLink = function () {
    return self.getAuthorElement().element(by.css('a'));
  };

  self.getAuthorElement = function () {
    return webElement.element(by.className('ss-author'));
  };

  self.getReputationElement = function () {
    return webElement.element(by.className('ss-reputation'));
  };

  self.getTitle = function () {
    return webElement
            .element(by.css('.' + type + '-title p')).getText();
  };

  self.getText = function () {
    return webElement
            .element(by.css('.' + type + '-text p')).getText();
  };

  self.getComments = function () {
    return webElement
            .element.all(by.css('.ss-comment .comment-text')).getText();
  };

  self.getComment = function (index) {
    return self.getComments()[index];
  };

  self.getOnlyComment = function () {
    return webElement
            .element(by.css('.ss-comment .comment-text')).getText();
  };

};
