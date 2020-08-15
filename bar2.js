var xValue = ["Basketball", "Baseball", "Tennis", "Track", "Soccer"]

var yValue = [20, 40, 10, 15, 15]

var trace1 =
    {
      x: xValue,
      y: yValue,
      type: 'bar',
      name: 'USA',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
    };
  
    var data = [trace1];

    var layout = {
        barmode: 'stack',
        autosize: false,
        width: 500,
        height: 500,
        margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4
          },
          paper_bgcolor: 'pink',
          plot_bgcolor: 'grey',
    };

    /*var config = {
        responsive: true};*/

  Plotly.newPlot('chart', data, layout);