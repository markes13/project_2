
d3.json('/static/climate_data.json', function(data) {
  console.log(data)
  nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
                  .x(function(d) { return d[0] })
                  .y(function(d) { return d[1]/100 }) //adjusting, 100% is 1.00, not 100 as it is in the data
                  .color(d3.scale.category10().range())
                  .useInteractiveGuideline(true)
                  ;

     chart.xAxis
        .tickValues([2000,2025,2050,2075,2100])
        // .tickFormat(function(d) {
        //     return d3.time.format('%x')(new Date(d))
        //   });

    chart.yAxis
        .tickFormat(d3.format(',.1%'));

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);

    return chart;
  });
})