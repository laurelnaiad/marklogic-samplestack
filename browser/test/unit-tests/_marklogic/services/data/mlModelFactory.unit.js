define(['testHelper'], function (helper) {

  return function () {
    describe('mlModelFactory', function () {
      var mlModelFactory;
      var mlModelSpec;
      var mlUtil;

      // var $q;
      // var $http;
      // var $httpBackend;
      // var $rootScope;
      // var mlModelBase;
      // var mlSchema;
      // var impl1;
      // var impl2;

      beforeEach(function (done) {
        module('_marklogic');
        inject(function (
          _mlModelFactory_,
          _mlModelSpec_,
          _mlUtil_
        ) {
          mlModelFactory = _mlModelFactory_;
          mlModelSpec = _mlModelSpec_;
          mlUtil = _mlUtil_;
          done();
        });
      });

      it('should support overriding a base object definition', function () {
        var serviceObj = mlModelFactory.extend({
          name: 'mlTestModel',
          spec: {
            getHttpDataPOST: function () {
              return mlUtil.merge({ myPropB: 2 }, this);
            }
          }
        });
        var postedObj = serviceObj.create({ myPropA: 1 }).getHttpDataPOST();
        expect(mlUtil.objectify(postedObj))
            .to.deep.equal({ myPropA: 1, myPropB: 2 });
      });
    });
  };
});
