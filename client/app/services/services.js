angular.module('stockTrack.services', [])

  .factory('Stock', function($http) {
    return {
      searchStock: function(stock) {
        return $http.jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${stock}&callback=JSON_CALLBACK`)
        .then(function(data) {
          console.log(data)
          return data;
        })
      }
    }
  })