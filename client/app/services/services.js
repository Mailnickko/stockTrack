angular.module('stockTrack.services', [])

  .factory('Stock', function($http) {
    return {
      searchStock: function(stock) {
        //returns array of objects
        return $http.get(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${stock}&jsoncallback=JSON_CALLBACK`)
        .then(function(data) {
          console.log(data);
          return data;
        })
        .catch(function(err) {
          console.log('Error in factory: ' + err);
        })
      }
    }
  })