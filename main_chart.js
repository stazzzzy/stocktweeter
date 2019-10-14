var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers'
};

var trace2 = {
  x: [1, 3, 4, 5],
  y: [16, 5, 11, 10],
  mode: 'lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data = [ trace1, trace2, trace3 ];

var layout= {
      paper_bgcolor:"rgba(0,0,0,0)",
	  hovermode:"x",
	  hoverdistance:20
}



Plotly.newPlot('chart', data, layout, {showSendToCloud: true});
