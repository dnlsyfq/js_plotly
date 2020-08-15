var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 1, 3, 2],
    name: 'Blue',
    type: 'scatter',
    showlegend: false,
  };

var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [2, 3, 2, 1, 2],
    name: 'Yellow',
    type: 'scatter',
    showlegend: true,
  };

var layout = {
    /*legend: {
        x: 0.5,
        y: -0.25,
        traceorder: 'normal',
        font: {
            family: 'sans-serif',
            size: 12,
            color: 'Black'
        },
        bgcolor: 'pink',
        bordercolor: 'grey',
        borderwidth: 2,
        "orientation": "h"
      }*/
    };

var data = [trace1, trace2];

Plotly.newPlot('chart', data, layout)