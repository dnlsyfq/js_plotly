var data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      y: [12, 7, 11, 7, 18, 14, 14, 16, 13, 7, 8, 14, 8, 3, 9, 9, 4, 13, 9, 6],
      mode: 'line',
      name: 'rainfall in mm',
      showlegend: true,
    }
  ];
  
  var layout = {
        shapes: [
            {
            type: 'rect',
            xref: 'x',  
            yref: 'paper',
            x0: 4,
            y0: 0,
            x1: 8,
            y1: 1,
            fillcolor: 'grey',
            opacity: 0.2,
            line: {
                width: 0
              }
          },
      ],
      height: 500,
      width: 500
  }
  
  Plotly.newPlot('chart', data, layout);