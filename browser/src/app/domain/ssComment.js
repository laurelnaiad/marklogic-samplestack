define(['app/module'], function (module) {

  /**
   * @ngdoc domain
   * @name ssComment
   * @requires mlModelBase
   * @requires mlSchema
   *
   * @description
   * TBD
   */

  module.factory('ssComment', [

    '$q', 'mlModelBase', 'mlSchema', 'mlUtil',
    function (
      $q, mlModelBase, mlSchema, mlUtil
    ) {
      /**
       * @ngdoc type
       * @name SsCommentObject
       * @description The model instance prototype for
       * {@link ssComment}.
       */

      /**
       * @ngdoc method
       * @name SsCommentObject#constructor
       * @param {object} spec Data used to populate
       * the new instance.
       * @description Constructor. Uses default implementation.
       */
      var SsCommentObject = function (spec, parent) {
        mlModelBase.object.call(this, spec, parent);
      };
      SsCommentObject.prototype = Object.create(
        mlModelBase.object.prototype
      );

      SsCommentObject.prototype.$mlSpec = {
        schema: mlSchema.addSchema({
          id: 'http://marklogic.com/samplestack#comment',
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

      SsCommentObject.prototype.preconstruct = function (spec, parent) {
        // validate that parent is an ssQnaDoc object
      };

      SsCommentObject.prototype.getResourceName = function (httpMethod) {
        return 'comments';
      };

      SsCommentObject.prototype.getHttpUrl = function (httpMethod) {
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

      return mlModelBase.extend('SsCommentObject', SsCommentObject);
    }
  ]);
});
