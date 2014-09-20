angular.module('docsApp', [
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'ngAnimate',
  'DocsController',
  'versionsData',
  'pagesData',
  'directives',
  'errors',
  'examples',
  'search',
  'tutorials',
  'versions',
  'bootstrap',
  'bootstrapPrettify',
  'ui.bootstrap.dropdown'
])


.config(function($locationProvider, $provide) {
  $locationProvider.html5Mode(true).hashPrefix('');
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
});
