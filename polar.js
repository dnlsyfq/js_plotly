data = [{
    type: 'scatterpolar',
    r: [40, 30, 45, 30],
    theta: [0, 165, 195, 0],
    fill: 'toself',
    name: 'Product A'
  },
  {
    type: 'scatterpolar',
    r: [15, 10, 39, 31, 15],
    theta: [0, 100, 120, 0, 305],
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