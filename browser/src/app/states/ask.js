define(['app/module'], function (module) {

  module.controller('askCtlr', [

    '$scope', 'appRouting', 'ssQnaDoc',
    function ($scope, appRouting, ssQnaDoc) {

      $scope.setPageTitle('ask');

      ssQnaDoc.create().attachScope($scope, 'qnaDoc');

      $scope.tagsInput; // store tags-input data

      $scope.save = function () {

        // convert tags-input data from object to array of values
        $scope.qnaDoc.tags = Object.keys($scope.tagsInput)
          .map(function (key) {
            return $scope.tagsInput[key].text;
          });

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
