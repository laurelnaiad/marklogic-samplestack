define(['app/module'], function (module) {

  /**
   * @ngdoc domain
   * @name ssAnswer
   * @requires mlModelBase
   * @requires mlSchema
   *
   * @description
   * TBD
   */

  module.factory('ssAnswer', [

    '$q', 'mlModelBase', 'mlSchema', 'mlUtil',
    function (
      $q, mlModelBase, mlSchema, mlUtil
    ) {
      /**
       * @ngdoc type
       * @name SsAnswerObject
       * @description The model instance prototype for
       * {@link ssAnswer}.
       */

      /**
       * @ngdoc method
       * @name SsAnswerObject#constructor
       * @param {object} spec Data used to populate
       * the new instance.
       * @description Constructor. Uses default implementation.
       */
      var SsAnswerObject = function (spec, parent) {
        mlModelBase.object.call(this, spec, parent);
      };
      SsAnswerObject.prototype = Object.create(
        mlModelBase.object.prototype
      );

      Object.defineProperty(SsAnswerObject.prototype, 'hasVoted', {
        get: function () {
          return this.parent.hasVotedOn(this.id);
        }
      });

      SsAnswerObject.prototype.$mlSpec = {
        schema: mlSchema.addSchema({
          id: 'http://marklogic.com/samplestack#answer',
          required: ['text'],
          properties: {
            id: {
              type: 'string',
              minLength: 36,
              maxLength: 36
            },
            text: { type: 'string' }
          }
        })
      };

      SsAnswerObject.prototype.preconstruct = function (spec, parent) {
        // validate that parent is an ssQnaDoc object
      };

      SsAnswerObject.prototype.getResourceName = function (httpMethod) {
        return 'answers';
      };

      SsAnswerObject.prototype.getHttpUrl = function (httpMethod) {
        switch (httpMethod) {
          case 'POST':
            return '/' + this.$ml.parent.getResourceName(httpMethod) +
            this.$ml.parent.getEndpointIdentifier(httpMethod) +
            '/' + this.getResourceName(httpMethod);
          default:
            throw new Error(
              'unsupported http method passed to getEndpoint: ' + httpMethod
            );
        }
      };

      // Endpoint returns entire QnaDoc content, call parent method
      SsAnswerObject.prototype.onResponsePOST = function (data) {
        this.$ml.parent.onResponsePOST(data);
      };

      return mlModelBase.extend('SsAnswerObject', SsAnswerObject);
    }
  ]);
});
