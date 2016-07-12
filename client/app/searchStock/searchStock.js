angular.module('stockTrack.search', [])

.controller('searchController', function($scope, Stock) {
  $scope.shares = 0;

  $scope.searchStock = function() {
    $scope.showErr = false;
    $scope.noneFound = false;
    if (!$scope.searchQuery) {
      $scope.showErr = true;
      return;
    } else {
      Stock.searchStock($scope.searchQuery)
      .then(function(result) {
          $scope.searchResults = result.data;
          if (!$scope.searchResults.length) {
            $scope.noneFound = true;
          } else {
            $scope.showTable = true;
            console.log($scope.searchResults)
          }
        })
        .catch(function(err) {
          console.log('Error in controller: ' + err);
        });
    }
    $scope.searchQuery = '';
  }

  $scope.getStocks = function() {
    Stock.getStocks()
      .then(function(stocks) {
        $scope.stocks = stocks;
      })
  }

  $scope.addStock = function(symbol) {
    Stock.addStock(symbol)
      .then(function(result) {
      })
  }
});