 

// Property Losses

var trace1 = {
  x: loss.map(row => row.Calendar_Year),
  y: loss.map(row => row.Number_of_Losses_Paid),
  // text: data.map(row => row.SeaLevel_signals),
  name: "Losses_Paid",
  type: "bar",
  marker: {
    color: 'rgba(255,153,51,0.6)'}
};

// Combining both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "Losses Paid",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("loss", data, layout);


// Increase in policies


var trace3 = {
  x: policies.map(row => row.Calendar_Year),
  y: policies.map(row => row.Policies_in_Force),
  // text: data.map(row => row.SeaLevel_signals),
  name: "Policies",
  type: "bar",
  marker: {
    color: 'rgba(255,153,51,0.6)'}
};

// Combining both traces
var data = [trace3];

// Apply the group barmode to the layout
var layout = {
  title: "Number of Policies by Year",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("policy", data, layout);

///Statewise

var trace4 = {
  x: stateloss.map(row => row.Calendar_Year),
  y: policies.map(row => row.Policies_in_Force),
  // text: data.map(row => row.SeaLevel_signals),
  name: "Policies",
  type: "bar",
  marker: {
    color: 'rgba(255,153,51,0.6)'}
};

// Combining both traces
var data = [trace3];

// Apply the group barmode to the layout
var layout = {
  title: "Number of Policies by Year",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("policy", data, layout);


////


var trace1 = {
  x: stateloss.map(row => row.State),
  y: stateloss.map(row => row.TotalPaid),
  name: 'TotalPaid',
  type: 'bar',
  transforms: [{
    type: 'aggregate',
    groups: stateloss.map(row => row.State),
    aggregations: [
      {target: 'y', func: 'sum', enabled: true},
    ]
  }],
  
};

var trace2 = {
  x: stateloss.map(row => row.State),
  y: stateloss.map(row => row.NumberOfClaimsClosedWithPayment),
  name: 'Claims Closed',
  yaxis: 'y2',
  type: 'scatter',
  transforms: [{
    type: 'aggregate',
    groups: stateloss.map(row => row.State),
    aggregations: [
      {target: 'y', func: 'sum', enabled: true},
    ]
  }]
};

var trace3 = {
  x: stateloss.map(row => row.State),
  y: stateloss.map(row => row.Year),
  name: '# of claims',
  yaxis: 'y2',
  type: 'bar',
  transforms: [{
    type: 'aggregate',
    groups: stateloss.map(row => row.State),
    aggregations: [
      {target: 'y', func: 'count', enabled: true},
    ]
  }]
};

// var data = [trace1];

var layout = {
  title: 'Analysis by State',
  yaxis: {title: 'Total Paid $'},
  yaxis2: {
    title: '# of Claims',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  },
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

Plotly.newPlot('stateloss1', [trace1,trace2], layout);



