define(['app/module'], function (module) {

  module.controller('askCtlr', [

    '$scope', 'appRouting', 'ssQnaDoc',
    function ($scope, appRouting, ssQnaDoc) {

      $scope.setPageTitle('ask');

      ssQnaDoc.create().attachScope($scope, 'qnaDoc');

      $scope.save = function () {
        $scope.qnaDoc.post().$ml.waiting.then(function () {
          appRouting.go('^.qnaDoc', {id: $scope.qnaDoc.id});
        });
      };

    }

  ]);

});
