define(['app/module','mocks/index'], function (module,mocksIndex) {

  /**
   * @ngdoc state
   * @name exploreResults
   *
   * @description
   * TBD
   *
   */

  module.controller('exploreCtlr', [

    '$scope',
    '$timeout',
    '$location',
    'appRouting',
    'ssSearch',
    'allTagsDialog',
    function (
      $scope,
      $timeout,
      $location,
      appRouting,
      ssSearch,
      allTagsDialog
    ) {
      // after everything is arranged, this function is called to initialize
      // the state
      var init = function () {
        $scope.setPageTitle('explore');

        // while we haven't finished loading, say so
        $scope.setLoading(true);

        $scope.search = ssSearch.create();
        applySearchToScope();

        setWatches();
      };

      // convert spaces to dashes and encode dashes so that
      // we will tend to have a prettier url
      var dasherize = function (str) {
        return str && str.length ?
          str.trim()
            .replace(/-/g, '%2D')
            .replace(/ /g, '-') :
          null;
      };

      var setWatches = function () {
        var onChange = function (newVal, oldVal) {
          if (newVal !== oldVal) { $scope.$emit('criteriaChange'); }
        };

        $scope.$watch(
          'search.criteria.q', onChange
        );
        $scope.$watch(
          'search.criteria.constraints.userName.value', onChange
        );
        $scope.$watch(
          'search.criteria.constraints.resolved.value', onChange
        );
      };

      var applyScopeToSearch = function () {
        $scope.search.criteria.constraints.userName.value =
            $scope.showMineOnly === true ? $scope.store.session.userName.value :
            null;
        $scope.search.criteria.constraints.resolved.value =
            $scope.showMineOnly === true ? true : null;
        $scope.search.criteria.q = $scope.searchbarText;
      };

      var applySearchToScope = function () {
        // showMineOnly only if the user is a contributor AND they have
        // specified it in the url. see also setShowMineOnly and
        // showMineOnlyEnabled
        $scope.showMineOnly = $scope.showMineOnlyEnabled() &&
            $scope.search.criteria.constraints.userName.value;

        // IF there is a session, set resolved only if they have specified
        // it in the url.  see also setResolvedOnly and resolvedOnly enabled
        if ($scope.resolvedOnlyEnabled()) {
          $scope.resolvedOnly =
              $scope.search.criteria.constraints.resolved.value === true;
        }

        $scope.searchbarText = $scope.search.criteria.q;
      };


      // these inputs are only enabled for contributors
      $scope.showMineOnlyEnabled = $scope.resolvedOnlyEnabled = function () {
        return $scope.store.session;
      };

      // whenever criteria changes, go to the state that represents the
      // criteria's results
      $scope.$on('criteriaChange', function () {
        applyScopeToSearch();
        var newStateParams = $scope.search.getStateParams();
        if (newStateParams.q) {
          newStateParams.q = dasherize(newStateParams.q);
        }
        appRouting.updateQueryParams(newStateParams);
      });

      // will be broadcast by mlAuth on a change to the session state
      // do a search b/c permissions are impacted
      $scope.$on('sessionChange', $scope.runSearch);

      $scope.clearTagsConstraint = function () {
        var tags = $scope.search.criteria.constraints.tags;
        if (tags.values && tags.values.length) {
          tags.values = [];
          $scope.$emit('criteriaChange');
        }
      };

      $scope.clearDatesConstraints = function () {
        $scope.search.criteria.constraints.dateStart.value = null;
        $scope.search.criteria.constraints.dateEnd.value = null;
        $scope.$emit('criteriaChange');
      };

      $scope.runSearch = function () {
        $scope.searching = true;

        applyScopeToSearch();

        $scope.search.shadowSearch().then(
          function () {

            // if the search params specify an out-of-bounds page,
            // change the page spec
            if ($scope.search.pageOutOfBounds()) {
              $scope.search.setPageInBounds();
              $scope.$emit('criteriaChange');
              return;
            }

            // until there is snippeting, abbreviate the body
            $scope.search.results.items.forEach(function (item) {
              if (item.content.body && item.content.body.length > 400) {
                item.content.body = item.content.body.substring(0,400) +
                    '...';
              }
            });

            // notify directives so they don't have to watch
            // wait for a digestcycle so that we don't show repeaters
            // while they're repeating
            $timeout(function () {
              $scope.$broadcast('newResults');
              // so templates can stop showing spinners
              $scope.searching = false;
              // so the layout can stop showing its spinner
              $scope.setLoading(false);
            });
          },
          function (reason) {
            // so templates can stop showing spinners
            $scope.searching = false;
            // so the layout can stop showing its spinner
            $scope.setLoading(false);
            throw new Error(
              JSON.stringify(reason),
              'ssSearch:post'
            );
          }
        );

      };

      init();

    }

  ]);

});
