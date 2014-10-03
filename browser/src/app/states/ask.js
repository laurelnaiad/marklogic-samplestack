define(['app/module'], function (module) {

  module.controller('askCtlr', [

    '$scope', 'appRouting', 'ssQnaDoc',
    function ($scope, appRouting, ssQnaDoc) {

      $scope.setPageTitle('ask');

      ssQnaDoc.create().attachScope($scope, 'qnaDoc');

      $scope.save = function () {
        // How does the following method work? Pass itself as arg?
        // Shouldn't it know to test its current state?
        window.console.log($scope.qnaDoc.validateObject());
        $scope.qnaDoc.post().$ml.waiting.then(function () {
          appRouting.go('^.qnaDoc', {id: $scope.qnaDoc.id});
        });
      };

    }

  ]);

});
