angular.module('stockTrack.search', [])

.controller('searchController', function($scope, Stock) {

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
        console.log("OVER HERE", $scope.stocks)
      })
  }

  $scope.getStocks();

  $scope.addStock = function(symbol) {
    Stock.addStock(symbol)
      .then(function(result) {
        console.log('In PROMISE');
        $scope.getStocks();
        $scope.$digest();
      })
      .catch(function(err) {
        console.log('error!');
      });
      // $scope.getStocks();
  }

  $scope.removeShare = function(stock) {
    Stock.removeShare(stock)
    .then(function() {
      $scope.$apply(function() {
        $scope.getStocks();
      });
    })
  }

  $scope.removeStock = function(stock) {
    Stock.removeStock(stock);
    $scope.$digest();
  }
});