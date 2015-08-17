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
var QuestionMetadata = require('./directives/qnaDocAnswerConstructor.dctv');
var AnswerMetadata = require('./directives/qnaDocQuestionConstructor.dctv');

function QnaDocPage () {
  var self = this;
  QnaDocPage.super_.call(self);
  self.url = '/doc';

  require('./dialogs/contributor.dlg').support(self);

  self.focusQuestion = function () {
    self.focusedItem = getQuestionMetadata();
    return self.pself();
  };

  self.focusFirstAnswer = function (position) {
    self.focusedItem = getAnswerMetadata(0);
    return self.pself();
  };

  self.focusLastAnswer = function (position) {
    console.log('getAnswerCount: ' + getAnswerCount());
    getAnswerCount().then(function (count) {
      self.focusedItem = getAnswerMetadata(count - 1);
    });
    return self.pself();
  };

  self.questionVoteUp = function () {
    return self.pself(
      element(by.className('ss-question-votes'))
      .element(by.className('ss-vote-control-up'))
      .click()
    );
  };

  self.questionVoteDown = function () {
    return self.pself(
      element(by.className('ss-question-votes'))
      .element(by.className('ss-vote-control-down'))
      .click()
    );
  };

  self.questionAnswer = function (content) {
    getQuestionAnswerForm()
      .clear()
      .sendKeys(content);
    return self.pself(
      element(by.css('.ss-answer-form .form-submit button'))
      .click()
    );
  };

  self.answerVoteUp = function () {
    return self.pself(
      self.focusedItem.webElement.then(function (elm) {
        elm.element(by.className('ss-vote-up'))
        .click();
      })
    );
  };

  self.answerVoteDown = function () {
    return self.pself(
      self.focusedItem.webElement.then(function (elm) {
        elm.element(by.className('ss-vote-down'))
        .click();
      })
    );
  };

  self.answerAccept = function () {
    return self.pself(
      self.focusedItem.webElement.then(function (elm) {
        elm.element(by.className('ss-unaccepted'))
        .click();
      })
    );
  };

  self.getAcceptedAnswerText = function () {
    return getAcceptedAnswerMetadata().metadata.getText();
  };

  /*******************************/
  /********** PRIVATE ************/
  /*******************************/
  var getQuestionElement = function () {
    return element(by.className('ss-question'));
  };

  var getQuestionAnswerForm = function () {
    return element(by.css('.ss-answer-form textarea'));
  };

  var getQuestionMetadata = function () {
    return new QuestionMetadata(getQuestionElement(), self, 'question');
  };

  var getAnswerMetadata = function (position) {
    return new AnswerMetadata(getAnswerElement(position), self, 'answer');
  };

  var getAcceptedAnswerMetadata = function () {
    return new AnswerMetadata(getAcceptedAnswer(), self, 'answer');
  };

  var getAnswerCount = function () {
    return element.all(by.className('ss-answer-wrapper')).count();
  };

  var getAnswerElements = function (position) {
    return element.all(by.className('ss-answer-wrapper'));
  };

  var getAnswerElement = function (position) {
    return getAnswerElements().then(function (elms) {
      return elms[position];
    });
  };

  var getAcceptedAnswer = function () {
    return element(by.css('.ss-answer-wrapper .ss-accepted'));
  };

}

var me = QnaDocPage;
me.pageName = 'qnadoc';
World.addPage(me);
