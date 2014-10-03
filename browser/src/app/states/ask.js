define(['app/module'], function (module) {

  module.controller('askCtlr', [

    '$scope', 'appRouting', 'ssQnaDoc',
    function ($scope, appRouting, ssQnaDoc) {

      $scope.setPageTitle('ask');

      ssQnaDoc.create().attachScope($scope, 'qnaDoc');

      $scope.save = function () {
        if ($scope.qnaDoc.$ml.valid) {
          $scope.qnaDoc.post().$ml.waiting.then(function () {
            appRouting.go('^.qnaDoc', {id: $scope.qnaDoc.id});
          },
          function (error) {
            if (error.status === 401) {
              $scope.setLocalError(
                'User does not have permission to ask questions'
              );
            }
            else {
              throw new Error('Error occurred: ' + JSON.stringify(error));
            }
          });
        }
      };

    }

  ]);

});
