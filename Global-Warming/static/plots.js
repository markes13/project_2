//  Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.Date),
  y: data.map(row => row.SeaLevel_signals),
  // text: data.map(row => row.SeaLevel_signals),
  name: "SeaLevel_signals",
  type: "bar",
  marker: {
    color: 'rgba(255,153,51,0.6)'}
};

// Combining both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "SeaLevel_signals",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
