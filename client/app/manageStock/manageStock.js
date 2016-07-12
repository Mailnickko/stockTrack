angular.module('stockTrack.manage', [])

.controller('manageController', function($scope, Stock) {
  $scope.getStocks = function() {
    Stock.getStocks()
      .then(function(stocks) {
        $scope.stocks = [];
        angular.forEach(stocks, function(obj, key) {
          $scope.stocks.push({
            name: obj.name,
            shares: obj.shares
          })
        })
      })
  }
  $scope.getStocks();
});