define(['app/module'], function (module) {

  /**
   * @ngdoc state
   * @name _layout
   * @requires appRouting
   *
   * @description
   * TBD
   *
   */

  module.controller('layoutCtlr', [
    '$scope', 'appRouting', 'authRestored',
    function ($scope, appRouting, authRestored) {
      $scope.ask = function () {
        appRouting.go('root.layout.ask');
      };
    }

  ]);
});
