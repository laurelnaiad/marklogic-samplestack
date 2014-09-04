define(['_marklogic/module'], function (module) {

  module.factory('mlModelSpec', [

    'mlUtil',
    function (
      mlUtil
    ) {
      var bindAll = function (obj) {
        Object.getOwnPropertyNames(obj).filter(function (property) {
          if (typeof obj[property] === 'function') {
            obj[property] = obj[property].bind(obj);
          }
        });
      };

      var MlModelSpec = function (data) {
        bindAll(this);
        this.preconstruct(data);
        Object.defineProperty(this, '$ml', {
          value: {}
        });
        this.assignData(data || {});
        this.postconstruct(data);
      };

      MlModelSpec.prototype.getInstance = function () {
        return this;
      };

      MlModelSpec.prototype.preconstruct = function (spec) {
      };
      MlModelSpec.prototype.assignData = function (data) {
        angular.forEach(this, function (val, key) {
          delete this[key];
        }.bind(this));
        mlUtil.merge(this, data);
        // this.testValidity();
      };

      MlModelSpec.prototype.postconstruct = function (spec) {
      };

      var p = MlModelSpec.prototype;
      Object.defineProperty(p, '$mlSpec', {
        value: {}
      });

      /**
       * @ngdoc method
       * @description  Returns the object that should be the body for HTTP POSTs
       * of instances of this model.  By default, a   model element will post
       * itself in its entirety.
       * @returns {Object} the object to POST
       */
      p.getHttpDataPOST = function () {
        return this;
      };

      return MlModelSpec;
    }

  ]);
});
