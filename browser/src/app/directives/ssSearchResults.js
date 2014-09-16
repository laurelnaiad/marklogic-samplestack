define(['app/module'], function (module) {

  /**
   * @ngdoc directive
   * @name ssSearchResults
   * @restrict E
   *
   * @description
   * Directive for displaying a set of search results.
   *
   */
  module.directive('ssSearchResults', [
    '$parse',
    function ($parse) {
      return {
        restrict: 'E',
        templateUrl: '/app/directives/ssSearchResults.html',
        scope: {
          search: '='
        },
        controller: function ($scope) {

        },
        link: function (scope, element, attrs) {
          scope.$watch('search.results', function () {
            //Sort settings
            scope.sorts = [
              {
                label: 'relevance',
                value: ['relevance']
              },
              {
                label: 'newest',
                value: ['active']
              },
              {
                label: 'score',
                value: ['score']
              }
            ];

            scope.setSort = function (sort) {
              scope.search.criteria.sort = sort;
              scope.$emit('criteriaChange');
            };

          });
        }
      };
    }
  ]);
});
