define(['_marklogic/module'], function (module) {



  module.factory('mlModelFactory', [

    'mlModelSpec',
    function (
      mlModelSpec
    ) {
      var getFunctionNames = function (obj) {
        return Object.getOwnPropertyNames(obj).filter(function (property) {
          return typeof obj[property] === 'function';
        });
      };

      var MlModelFactory = function (Spec) {
        this.Spec = Spec;
      };

      MlModelFactory.prototype.getSpecPrototype = function () {
        return this.Spec.prototype;
      };

      MlModelFactory.prototype.extend = function (newSpec) {
        // start with constructor, either theirs or ours
        var MySpec = newSpec.factory || this.Spec;
        // inherit prototype from *our* prototype
        MySpec.prototype = Object.create(this.Spec.prototype, {
          $mlSpec: { value: this.Spec.prototype.$mlSpec }
        });
        // override non-function specs
        MySpec.prototype.$mlSpec.name = newSpec.name;
        // override prototype functions that are specified,
        // binding them to the new Spec's prototype
        getFunctionNames(newSpec.spec).forEach(function (specFuncName) {
          MySpec.prototype[specFuncName] = newSpec.spec[specFuncName];
        });

        // new create a new service-ish object
        var svc = Object.create(this);
        svc.create = function (data) {
          return new MySpec(data);
        };
        return svc;
      };
      var svc = new MlModelFactory(mlModelSpec);
      return svc;
    }

  ]);
});
