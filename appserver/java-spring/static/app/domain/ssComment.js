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
          //required: ['text'], // self is breaking validation on comment save
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

      SsCommentObject.prototype.getResourceName = function (httpMethod) {
        return 'comments';
      };

      /**
       * @ngdoc method
       * @name SsCommentObject#prototype.getHttpUrl
       * @description Returns URL string for accessing REST endpoint based
       * on HTTP method. Overrides mlModelBase method since the referencing
       * the parent object(s) in the URL is required.
       * @param {string} httpMethod HTTP method.
       */
      SsCommentObject.prototype.getHttpUrl = function (httpMethod) {
        switch (httpMethod) {
          case 'POST':
            // By default, for a question comment
            var url =
              this.$ml.parent.getHttpUrl('GET') +
              '/' + this.getResourceName(httpMethod);
            return url;
          default:
            throw new Error(
              'unsupported http method passed to getEndpoint: ' + httpMethod
            );
        }
      };

      /**
       * @ngdoc method
       * @name SsCommentObject#prototype.onResponsePOST
       * @description Overrides mlModelBase method. Since endpoint returns
       * an entire QnaDoc object, the comment's parent method is called.
       * @param {string} data Response data
       */
      SsCommentObject.prototype.onResponsePOST = function (data) {
        this.$ml.parent.onResponsePOST(data);
      };

      return mlModelBase.extend('SsCommentObject', SsCommentObject);
    }
  ]);
});
