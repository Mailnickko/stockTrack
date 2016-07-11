angular.module('stockTrack', [
  'stockTrack.search',
  'stockTrack.manage',
  'stockTrack.services',
  'ui.router',
  'ngMessages'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
      .state('search', {
        templateUrl: 'app/searchStock/searchStock.html',
        url: '/search',
        controller: 'searchController'
      })
      .state('manage', {
      templateUrl: 'app/manageStock/manageStock.html',
      url: '/manage',
      controller: 'manageController'
      })

      $urlRouterProvider.otherwise('/search');
})