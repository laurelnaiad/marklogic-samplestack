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

  this.When(
    /visit the "qnadoc" page with id "(.*)"/,
    function (qid, next) {
      this.go(this.pages['qnadoc'], '/' + qid)
        .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /visit the "qnadoc" page with id equal to "(.*)"/,
    function (qid, next) {
      var self = this;
      this.go(this.pages['qnadoc'], '/' + self[qid])
        .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /focus on the question/,
    function (next) {
      this.currentPage.focusQuestion()
        .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /focus on the (.*) answer/,
    function (positional, next) {
      switch (positional) {
        case 'first':
          this.currentPage.focusFirstAnswer()
            .then(this.notifyOk(next), next);
          break;
        case 'last':
          this.currentPage.focusLastAnswer()
            .then(this.notifyOk(next), next);
          break;
        default:
          next('Invalid positional for search result: ' + positional);
      }
    }
  );

  this.When(
    /I comment on the (.*) with "(.*)"/,
    function (type, content, next) {
      var self = this;
      self.currentPage.commentStart().then(function () {
        self.currentPage.makeComment(content).then(self.notifyOk(next), next);
      });
    }
  );

  this.When(
    /the comment is "(.*)"/,
    function (content, next) {
      expect(this.currentPage.getComment())
          .to.eventually.equal(content).and.notify(next);
    }
  );

  this.When(
    /I vote the question up/,
    function (next) {
      this.currentPage.questionVoteUp().then(this.notifyOk(next), next);
    }
  );

  this.When(
    /I vote the answer up/,
    function (next) {
      this.currentPage.answerVoteUp().then(this.notifyOk(next), next);
    }
  );

  this.When(
    /I accept the answer/,
    function (next) {
      this.currentPage.answerAccept().then(this.notifyOk(next), next);
    }
  );

  this.When(
    /answer the question with "(.*)"/,
    function (content, next) {
      this.currentPage.questionAnswer(content)
        .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /the accepted answer is "(.*)"/,
    function (content, next) {
      expect(this.currentPage.getAcceptedAnswerText())
          .to.eventually.equal(content).and.notify(next);
    }
  );

};
