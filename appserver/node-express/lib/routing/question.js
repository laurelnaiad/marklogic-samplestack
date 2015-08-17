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

var errs = libRequire('errors');
var Promise = require('bluebird');
var businessLogic = require('../business-logic');
var _ = require('lodash');

module.exports = function (app, mw) {
  /*
   * ROUTE DEFINITIONS
   */

  // app.get('/v1/questions', [
  //
  //   mw.auth.associateBestRole.bind(app, roles),
  //
  //   function (req, res, next) {
  //     return req.db.getQuestions(
  //       { 'q': req.query.q, 'start': req.query.start }
  //     )
  //     .then(function (questions) {
  //       return res.status(200).send(questions);
  //     })
  //     .catch(next);
  //   }
  // ]);

  app.get('/v1/questions/:id', [
    function (req, res, next) {
      mw.auth.tryReviveSession(req, res, next);
    },
    function (req, res, next) {
      mw.auth.associateBestRole(['contributors', 'default'], req, res, next);
    },

    function (req, res, next) {
      return businessLogic.getAndRespond(req, res, next, { id: req.params.id })
      .catch(next);
    }
  ]);

  app.post('/v1/questions', [
    function (req, res, next) {
      mw.auth.tryReviveSession(req, res, next);
    },
    function (req, res, next) {
      mw.auth.associateBestRole(['contributors'], req, res, next);
    },
    function (req, res, next) {
      mw.parseBody.json(req, res, next);
    },
    function (req, res, next) {
      mw.schema.validate(
        'http://marklogic.com/samplestack#qnaDoc', req, res, next
      );
    },

    function (req, res, next) {
      return req.db.qnaDoc.post(
        null, _.omit(req.user, 'roles'), req.body
      )
      .then(businessLogic.getAndRespond.bind(null, req, res, next));
    }
  ]);

  /*
   * Route for the following requests
   *
   * /v1/questions/{id}/{upvotes | downvotes}
   * /v1/questions/{id}/comments
   * /v1/questions/{id}/answers
   */
  app.post('/v1/questions/:questionId/:operation', [
    function (req, res, next) {
      mw.auth.tryReviveSession(req, res, next);
    },
    function (req, res, next) {
      mw.auth.associateBestRole(['contributors'], req, res, next);
    },
    function (req, res, next) {
      mw.parseBody.json(req, res, next);
    },
    function (req, res, next) {
      var schemaType;
      switch (req.params.operation) {
        case 'upvotes':
        case 'downvotes':
          schemaType = 'vote';
          break;
        case 'comments':
          schemaType = 'comment';
          break;
        case 'answers':
          schemaType = 'answer';
          break;
      }
      if (schemaType) {
        mw.schema.validate(
          'http://marklogic.com/samplestack#' + schemaType, req, res, next
        );
      }
      else {
        next();
      }
    },

    function (req, res, next) {
      var spec = _.clone(req.params);
      var promises = [];

      spec.contributor = _.omit(req.user, 'roles');

      var actionPromise;

      switch (spec.operation) {
        case 'upvotes':
        case 'downvotes':
          actionPromise = businessLogic.handleVote('Question', req.db, spec);
          break;
        case 'comments':
          spec.content = req.body;
          actionPromise = businessLogic.handleComment('Question', req.db, spec);
          break;
        case 'answers':
          spec.content = req.body;
          actionPromise = businessLogic.handleAnswer(req.db, spec);
          break;
        default:
          next({ error: 'unsupported method: ' + spec.operation});
      }

      return actionPromise
      .then(businessLogic.getAndRespond.bind(null, req, res, next))
      .catch(next);

    }
  ]);


  /*
   * Route for the following requests
   *
   * /v1/questions/{id}/answers/{answerId}/{upvotes | downvotes}
   * /v1/questions/{id}/answers/{answerId}/comments
   * /v1/questions/{id}/answers/{answerId}/accept
   */
  app.post('/v1/questions/:questionId/answers/:answerId/:operation', [
    function (req, res, next) {
      console.log('tryReviveSession');
      mw.auth.tryReviveSession(req, res, next);
    },
    function (req, res, next) {
      console.log('associateBestRole');
      mw.auth.associateBestRole(['contributors'], req, res, next);
    },
    function (req, res, next) {
      console.log('parseBody');
      mw.parseBody.json(req, res, next);
    },
    function (req, res, next) {
      var schemaType;
      switch (req.params.operation) {
        case 'upvotes':
        case 'downvotes':
          schemaType = 'vote';
          break;
        case 'comments':
          schemaType = 'comment';
          break;
        case 'accept':
          schemaType = 'accept';
          break;
      }
      console.log('schemaType: ' + schemaType);
      if (schemaType) {
        mw.schema.validate(
          'http://marklogic.com/samplestack#' + schemaType, req, res, next
        );
      }
      else {
        next();
      }
    },

    function (req, res, next) {
      console.log('OPERATION');
      var spec = _.clone(req.params);
      var promises = [];

      spec.contributor = _.omit(req.user, 'roles');

      var actionPromise;

      switch (spec.operation) {
        case 'upvotes':
        case 'downvotes':
          actionPromise = businessLogic.handleVote('Answer', req.db, spec);
          break;
        case 'comments':
          spec.content = req.body;
          actionPromise = businessLogic.handleComment('Answer', req.db, spec);
          break;
        case 'accept':
          actionPromise = businessLogic.handleAccept(req.db, spec);
          break;
        default:
          throw new errs.unsupportedMethod(req);
      }

      return actionPromise
      .then(businessLogic.getAndRespond.bind(null, req, res, next))
      .catch(next);
    }
  ]);

  // app.delete('/v1/questions:id', [
  //   mw.auth.associateBestRole.bind(app, roles),

  //   function (req, res, next) {
  //     return req.db.deleteQuestion({ questionId: req.params.id })
  //     .then(function (response) {
  //       return res.status(200).send(response);
  //     })
  //     .catch(next);
  //   }
  // ]);
};
