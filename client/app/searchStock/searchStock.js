angular.module('stockTrack.search', [])

.controller('searchController', function($scope, Stock) {
  $scope.searchStock = function() {
    if ($scope.searchQuery === null || $scope.searchQuery === '') {
      return false;
    } else {
      var promise = Stock.searchStock($scope.searchQuery);

        promise.then(function(result) {
          $scope.searchResults = result.data;
          $scope.showTable = true;
          console.log($scope.searchResults);
        })
        .catch(function(err) {
          console.log('Error in controller: ' + err);
        });
    }
    $scope.searchQuery = '';
  }
});