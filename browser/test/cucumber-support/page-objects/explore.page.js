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

var utilities = require('../utilities');

function ExplorePage () {
  var self = this;
  ExplorePage.super_.call(self);
  self.url = '/';

  require('./directives/searchBar.dctv').support(self);
  require('./directives/searchResults.dctv').support(self);
  require('./dialogs/contributor.dlg').support(self);
  require('./directives/tagResults.dctv').support(self);

  self.filters = {
    clearAll: function () {
      return self.pself(Promise.all([
        self.filters.mineOnly.setValue(false),
        self.filters.resolvedOnly.setValue(false)
        // commented out.  setValue for dateTo/From tends to hang randomly
        // self.filters.dateFrom.setValue(''),
        // self.filters.dateTo.setValue('')
      ]));
    },
    clearTags: function () {
      return self.pself(
        getClearTagsBtn().click()
      );
    },
    mineOnly: {
      setValue: function (value) {
        return self.pself(
          utilities.setCheckboxValue(getMineOnlyFilterElement(), value)
        );
      }
    },
    resolvedOnly: {
      setValue: function (value) {
        return self.pself(
          utilities.setCheckboxValue(getResolvedOnlyFilterElement(), value)
        );
      }
    },
    dateFrom: {
      setValue: function (value) {
        return self.pself(
          utilities.setInputValue(getDateStartFilterElement(), value)
        );
      },
      pressEnter: function () {
        return self.pself(
          getDateStartFilterElement().sendKeys(protractor.Key.ENTER)
        );
      }
    },
    dateTo: {
      setValue: function (value) {
        return self.pself(
          utilities.setInputValue(getDateEndFilterElement(), value)
        );
      },
      pressEnter: function () {
        return self.pself(
          getDateEndFilterElement().sendKeys(protractor.Key.ENTER)
        );
      }
    },
    tagSearch: {
      setValue: function (value) {
        return self.pself(
          utilities.setInputValue(getTagSearchFilterElement(), value)
        );
      },
      pressEnter: function () {
        return self.pself(
          getTagSearchFilterElement().sendKeys(protractor.Key.ENTER)
        );
      }
    },
    tagSelect: {
      setValue: function (name) {
        return self.pself(
          utilities.setCheckboxPromiseValue(
            getTagFilterElement(name), true
          )
        );
      }
    },
    tagUnselect: {
      setValue: function (name) {
        return self.pself(
          utilities.setCheckboxPromiseValue(
            getTagFilterElement(name), false
          )
        );
      }
    },
    openMoreTags: function () {
      return self.pself(
        getMoreTagsBtn().click()
      );
    },
    closeMoreTags: function () {
      return self.pself(
        getMoreTagsCloseBtn().click()
      );
    },
    sortMoreTags: function (sortType) {
      return self.pself(
        getMoreTagsSortTab(sortType).click()
      );
    }
  };

  /*******************************/
  /********** PRIVATE ************/
  /*******************************/

  var getMineOnlyFilterElement = function () {
    return element(by.model('showMineOnly'));
  };

  var getResolvedOnlyFilterElement = function () {
    return element(by.model('resolvedOnly'));
  };

  var getDateStartFilterElement = function () {
    return element(by.model('pickerDateStart'));
  };

  var getDateEndFilterElement = function () {
    return element(by.model('pickerDateEnd'));
  };

  var getClearTagsBtn = function () {
    return element(by.css('.clear-tags'));
  };

  var getMoreTagsSortTab = function (type) {
    return element.all(
      by.css('.ss-dialog-all-tags .ss-sort .sort-' + type)
    );
  };

  var getMoreTagsBtn = function () {
    return element(by.css('.button-more-tags'));
  };

  var getMoreTagsCloseBtn = function () {
    return element(by.css('.ss-dialog-all-tags .close'));
  };

  var getTagSearchFilterElement = function () {
    return element(by.model('selected'));
  };

  var getTagFilterElement = function (name) {
    return element.all(by.css('.tags-search .checkbox .text-name')).filter(
      function (elem, index) {
        return elem.getText().then(function (text) {
          return text === name;
        });
      }
    ).then(
      function (elems) {
        return elems[0];
      }
    );
  };
}

var me = ExplorePage;
me.pageName = 'explore';
me.aliases = ['search', 'default', 'landing'];
World.addPage(me);
