angular.module('stockTrack.services', [])

  .factory('Stock', function($http) {
    return {
      searchStock: function(stock) {
        //returns array of objects
        return $http.jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${stock}&jsoncallback=JSON_CALLBACK`)
        .then(function(data) {
          return data;
        })
        .catch(function(err) {
          console.log('Error in factory: ' + err);
        })
      },

      addStock: function(symbol) {
        var result = [];
        var promise = $http.jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}&callback=JSON_CALLBACK`);
        return promise.then(function(stock) {
          console.log("SERVICES", stock.data)
          result.push(stock.data);
          return result;
        }).catch(function(err) {
          console.log("Error when adding stock");
        })
      }
    }
  })