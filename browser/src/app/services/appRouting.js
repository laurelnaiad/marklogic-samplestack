define(['app/module'], function (module) {

  /**
   * @ngdoc provider
   * @name appRoutingProvider
   * @requires statesHierarchy
   *
   * @description
   * Manages routing for the application. Uses
   * <a href="https://github.com/angular-ui/ui-router"
   * target="_blank">ui-router</a>.
   *
   * More TODO
   */

  module.provider('appRouting', [

    'statesHierarchy',
    'stateHelperProvider',
    '$provide',
    '$locationProvider',
    '$urlRouterProvider',
    function (
      statesHierarchy,
      stateHelperProvider,
      $provide,
      $locationProvider,
      $urlRouterProvider
    ) {
      // don't be fooled -- html5 mode is controlled above based on settings
      // we do it this way so we can author all URLs in the app in a manner
      // that lets us choose at build time which mode to use, rather than
      // having to go back and change all of the URLs based on the decision
      // of html5mode or not.
      $locationProvider
        .html5Mode(true)
        .hashPrefix('');

      // define the state defs tree -- secon param
      // says that we've alrady prepared the names of
      // the states so don't use dot notation on them
      // to construct the names internally.
      // this is done to avoid having to refer to states
      // which are always abstract in state names
      this.forceHashMode = function (hashMode) {

        $provide.decorator('$sniffer', function ($delegate) {
          // set history to false if you want to run hashode (perhaps your
          // webserver isn't configured for url rewriting in support of html5,
          // or you want hash signs in your urls for some other reason)
          // See buildParams to change this, see /gulp/tasks (search for
          // "modrewrite" to see an html5 push-mode
          // supporting configuration).

          // if we set history to false, we're telling angular the browser
          // does not support html5 mode, which will cause it to adjust
          // (on the fly all of our URLs to use hash marks.  effectively
          // this disables html5 mode without invalidating all of the URLs
          // that are used throughout the application code (e.g for
          // state url assignments)
          $delegate.history = false;
          return $delegate;
        });
      };

      this.configure = function (hierarchy) {
        stateHelperProvider.setNestedState(hierarchy, true);

      };

      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/404');


      // TODO -- lots of stuff to be done here

      /**
       * @ngdoc service
       * @name appRouting
       *
       * @description
       * TBD -- like now -- or now -- it';s really time to do this.
       *
       */

      this.$get = [
        '$rootScope',
        '$state',
        '$stateParams',
        '$location',
        '$uiViewScroll',
        'initialize',
        'statesHierarchy',
        'mlStore',
        function (
          $rootScope, $state, $stateParams, $location, $uiViewScroll,
          initialize, statesHierarchy, mlStore
        ) {

          // make sure non-logged in users don't get a page which isn't
          // supposed to be navigable for them
          $rootScope.$on(
            '$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
              if (
                statesHierarchy.find(toState.name).authRequired &&
                !(mlStore.session && mlStore.sessionId)
              ) {
                $rootScope.errorCondition = 'authRequiredNav';
              }
              else {
                // if we have any error condition, clear it because
                // the user is trying something that we hope will
                // succeed (pending server-side rejection)
                // Doing this assumes that the server-side rejection
                // and corresponding errorCondition setting will take
                // place after $stateChangeStart
                $rootScope.errorCondition = null;
              }
            }
          );

          // this was rescrolling the window. Not clear why we were doing this
          // but we certainly don't want to do it each and every time.
          // $rootScope.$on('$locationChangeSuccess',function () {
          //   $window.scrollTo(0, 0);
          // });
          $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.clearLocalError();
          });

          $rootScope.$on('sessionChange', function () {
            if (!$rootScope.store.session) {
              $location.url('/');
            }
          });

          return {
            params: $stateParams,

            go: $state.go,

            scroll: $uiViewScroll,

            updateQueryParams: function (params) {
              $location.search(params);
              $rootScope.$emit('$locationChangeSuccess');
            }
          };
        }
      ];
    }
  ]);
});
