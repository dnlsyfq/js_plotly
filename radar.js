data = [{
    type: 'scatterpolar',
    r: [40, 30, 45, 30, 50],
    theta: ['Weight','Speed','Usefulness', 'Design', 'Capacity'],
    fill: 'toself',
    name: 'Product A'
  },
  {
    type: 'scatterpolar',
    r: [15, 10, 39, 31, 15, 30],
    theta: ['Weight','Speed','Usefulness', 'Design', 'Capacity'],
    fill: 'toself',
    name: 'Product B'
    }
]

  layout = {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 50]
        }
    },
    showlegend: false
}

Plotly.newPlot("chart", data, layout)