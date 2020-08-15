var data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      y: [1, 2, 1, 2, 1, 5, 5, 16, 13, 7, 8, 14, 8, 3, 9, 9, 4, 13, 9, 6],
      mode: 'markers',
    }
  ];

var layout = {
};

Plotly.newPlot('chart', data, layout);