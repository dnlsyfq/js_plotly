var trace = {
    x: [1.5, 3.5],
    y: [0.75, 2.5],
    text: ['Fig 1', 'Fig 2'],
    mode: 'text'
};

var layout = {
    title: 'chart',
    xaxis: {
        range: [0, 4.5],
        zeroline: false
    },
    yaxis: {
        range: [0, 4.5]
    },
    width: 500,
    height: 500,
    shapes: [
        {
            type: 'rect',
            xref: 'x',
            yref: 'y',
            x0: 2.5,
            y0: 0,
            x1: 3.5,
            y1: 2,
            line: {
              color: 'rgb(55, 128, 191)',
              width: 3
            },
            fillcolor: 'rgba(55, 128, 191, 0.6)'
        },
        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            fillcolor: 'rgba(50, 171, 96, 0.7)',
            x0: 3,
            y0: 3,
            x1: 4,
            y1: 4,
            line: {
              color: 'rgba(50, 171, 96, 1)'
            }
        }
    ]
};

var data = [trace];

Plotly.newPlot('chart', data, layout);