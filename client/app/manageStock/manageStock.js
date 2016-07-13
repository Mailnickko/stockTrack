angular.module('stockTrack.manage', [])

.controller('manageController', function($scope, Stock) {
  $scope.getStocks = function() {
    Stock.getStocks()
      .then(function(stocks) {
        $scope.stocks = [];
        angular.forEach(stocks, function(obj, key) {
          $scope.stocks.push({
            name: obj.symbol,
            shares: obj.shares
          })
        })
      })
  }
  $scope.getStocks();

  $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

})

// .directive('pieChart', function() {
//   return {
//     restrict: 'E',
//     replace: false,
//     scope: {data: '=stockData'},
//     link: function(scope, element, attrs) {
//       var pie = d3.layout.pie()
//         .value(function(d) { return d.shares })

//       //connect our data to the slices
//       var slices = pie(sales);

//       //size of the pie chart
//       var arc = d3.svg.arc()
//         .innerRadius(0)
//         .outerRadius(100);

//       // another helper that returns a color based on an ID, category10
//       var color = d3.scale.category10();


//       var svg = d3.select('svg.pie');
//       var g = svg.append('g')
//         .attr('transform', 'translate(200, 100)')

//       g.selectAll('path.slice')
//         .data(slices)
//           .enter()
//             .append('path')
//               .attr('class', 'slice')
//               .attr('d', arc)
//               .attr('fill', function(d) {
//                 return color(d.data.name);
//               });

//       // building a legend
//       svg.append('g')
//         .attr('class', 'legend')
//           .selectAll('text')
//           .data(slices)
//             .enter()
//               .append('text')
//                 .text(function(d) { return '• ' + d.data.name + ' (' + d.data.shares + ')'; })
//                 .attr('fill', function(d) { return color(d.data.name); })
//                 .attr('y', function(d, i) { return 20 * (i + 1); })
//                 .attr('margin-right', 50 + 'px')
//     }
//   }
// })