var xValues = ['y 2012', 'y 2013', 'y 2014']
var yValues = ['Australia', 'Brazil', 'Canada', 'Mexico', 'UK']
var zValues = [[ 0.39, 0.37, 0.36], [ 0.47, 0.50, 0.53], [ 0.52, 0.52, 0.54], [0.50, 0.49, 0.48], [0.47, 0.46, 0.42]]
/*var colorscaleValue = [[0, '#038a36'], [1, '#ff9900']]*/

var data = [
    {
        z: zValues,
        x: xValues,
        y: yValues,
        type: 'heatmap',
        /*colorscale: colorscaleValue*/
    }
];

var layout = {
    title: 'CO2 Emmissions by Country in BTons',
    annotations: []
}

for ( var i = 0; i < yValues.length; i++ ) {
    for ( var j = 0; j < xValues.length; j++ ) {
      var currentValue = zValues[i][j];
      if (currentValue <= 0.45) {
        var textColor = 'white';
      }else{
        var textColor = 'black';
      }
      var result = {
        xref: 'x1',
        yref: 'y1',
        x: xValues[j],
        y: yValues[i],
        text: zValues[i][j],
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(50, 171, 96)'
        },
        showarrow: false,
        font: {
          color: textColor
        }
      };
      layout.annotations.push(result);
    }
  }

Plotly.newPlot('chart', data, layout);