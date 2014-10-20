define(['app/module'], function (module) {

  module.controller('qnaDocCtlr', [

    '$scope',
    'marked',
    'appRouting',
    'ssQnaDoc',
    'ssAnswer',
    'ssComment',
    function (
      $scope,
      marked,
      appRouting,
      ssQnaDoc,
      ssAnswer,
      ssComment
    ) {

      $scope.setLoading(true);

      var init = function () {
        var doc = ssQnaDoc.getOne(
          { id: appRouting.params.id },
          // by passing a contributorId we instigate the getting
          // and availability of hasVoted properties on the content
          // objects
          $scope.store.session ? $scope.store.session.id : null
        );
        doc.$ml.waiting.then(
          function () {
            $scope.doc = doc;
            $scope.setLoading(false);
            $scope.canVoteQuestion = function () {
              if (!$scope.store.session) {
                return false;
              }
              return $scope.doc.hasVoted !== true;
            };

            $scope.canVoteAnswer = function (answer) {
              if (!$scope.store.session) {
                return false;
              }
              return answer.hasVoted !== true;
            };
          },
          function (error) {
            if (error.status === 401) {
              $scope.setLocalError('Document Not Found');
            }
            else {
              throw new Error('loading qnaDoc with id ' + appRouting.params.id +
                  ': ' + JSON.stringify(error)
              );
            }
          }
        );
        ssAnswer.create({}, doc).attachScope($scope, 'newAnswer');
        ssComment.create({}, doc).attachScope($scope, 'newComment');
        $scope.addComment = false;
      };

      $scope.answersCountLabel = function () {
        var count = $scope.doc  && $scope.doc.answers ?
            $scope.doc.answers.length :
            0;
        var plural = count !== 1;
        return count + (plural ? ' Answers' : ' Answer');
      };

      $scope.marked = function (text) {
        return marked(text);
      };

      $scope.setQueryText = function (text) {
        appRouting.go('^.explore', { q: $scope.searchbarText });
      };

      $scope.saveAnswer = function () {
        if ($scope.newAnswer.$ml.valid) {
          $scope.newAnswer.post().$ml.waiting.then(function () {
            $scope.newAnswer.text = ''; // Clear answer form field
            appRouting.go('^.qnaDoc', {id: $scope.doc.id});
          },
          function (error) {
            if (error.status === 401) {
              $scope.setLocalError(
                'User does not have permission to answer questions'
              );
            }
            else {
              throw new Error('Error occurred: ' + JSON.stringify(error));
            }
          });
        }
      };

      $scope.saveComment = function () {
        if ($scope.newComment.$ml.valid) {
          $scope.newComment.post().$ml.waiting.then(function () {
            $scope.newComment.text = ''; // Clear comment form field
            $scope.addComment = false; // Show link and hide form
            appRouting.go('^.qnaDoc', {id: $scope.doc.id});
          },
          function (error) {
            if (error.status === 401) {
              $scope.setLocalError(
                'User does not have permission to post comments'
              );
            }
            else {
              throw new Error('Error occurred: ' + JSON.stringify(error));
            }
          });
        }
      };

      $scope.setPageTitle('doc');
      $scope.searchbarText = appRouting.params.q ? appRouting.params.q : null;
      init();

    }

  ]);

});
