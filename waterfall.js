var data = [
  {
      name: "Cash Net Working Capital 2018 to 2019",
      type: "waterfall",
      orientation: "v",
      measure: [
          "absolute",
          "relative",
          "relative",
          "relative",
          "relative",
          "total"
      ],
      x: [
          "2018 Total Cash Net Working Capital",
          "Inventories",
          "Receivables",
          "Payables",
          "FX Effects",
          "2019 Total Cash Net Working Capital"
      ],
      textposition: "outside",
      text: [
          "+10",
          "+4",
          "-5",
          "-3",
          "+1",
          "7"
      ],          
      y: [
          10,
          4,
          -5,
          -3,
          1,
          0
      ],
      connector: {
        line: {
          color: "rgb(63, 63, 63)"
        }
      },
    },
  ];
  
layout = {
  title: {
      text: "Cash Net Working Capital 2018 to 2019"
  },
  xaxis: {
      type: "category"
  },
  yaxis: {
      type: "linear",
      range: [0, 16]
  },
  autosize: true,
  showlegend: true
};

Plotly.newPlot('chart', data, layout);