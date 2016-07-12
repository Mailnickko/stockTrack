var sales = [
  {"name":"Alphabet Inc","shares":2},
  {"name":"McDonald's Corp","shares":2},
  {"name":"Yum! Brands Inc","shares":2},
  {"name":"Domino's Pizza Inc","shares":4},
  {"name":"Apple Inc","shares":3},
  {"name":"Starbucks Corp","shares":6}
];

//set up the angles of the pie chart using the pie layout helper
var pie = d3.layout.pie()
  .value(function(d) { return d.shares })

//connect our data to the slices
var slices = pie(sales);

//size of the pie chart
var arc = d3.svg.arc()
  .innerRadius(0)
  .outerRadius(100);

// another helper that returns a color based on an ID, category10
var color = d3.scale.category10();


var svg = d3.select('svg.pie');
var g = svg.append('g')
  .attr('transform', 'translate(200, 100)')

g.selectAll('path.slice')
  .data(slices)
    .enter()
      .append('path')
        .attr('class', 'slice')
        .attr('d', arc)
        .attr('fill', function(d) {
          return color(d.data.name);
        });

// building a legend
svg.append('g')
  .attr('class', 'legend')
    .selectAll('text')
    .data(slices)
      .enter()
        .append('text')
          .text(function(d) { return '• ' + d.data.name + ' (' + d.data.shares + ')'; })
          .attr('fill', function(d) { return color(d.data.name); })
          .attr('y', function(d, i) { return 20 * (i + 1); })
          .attr('margin-right', 50 + 'px')
