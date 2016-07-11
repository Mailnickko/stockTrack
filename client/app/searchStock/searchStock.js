angular.module('stockTrack.search', [])

.controller('searchController', function($scope, Stock) {
  $scope.searchStock = function() {
    if ($scope.searchQuery === null || $scope.searchQuery === '') {
      return false;
    } else {
      Stock.searchStock($scope.searchQuery)
        .then(function(result) {
          $scope.searchResults = result;
        })
        .catch(function(err) {
          console.log('Something broke: ' + err);
        });
      $scope.searchQuery = '';
    }
  }
});