var d3 = Plotly.d3,
        N = 5,
        x = d3.range(N).map( d3.random.normal() ),
        y = d3.range(N).map( d3.random.normal() ),
        data = [{ x:x, y:y, type:'scatter', mode:'markers',
        marker:{size:16},
        hoverinfo:"x+y",
        hovertemplate: '<i>Price</i>: $%{y:.2f}' +
                        '<br><b>X</b>: %{x}<br>' +
                        '<b>%{text}</b>',
                        text: ["Text A", "Text B", "Text C", "Text D", "Text E"],
       }];

  var layout = {
    hovermode:'closest',
    xaxis:{zeroline:false, hoverformat: '.2f'},
    yaxis:{zeroline:false, hoverformat: '.2f'}
    };

Plotly.newPlot('chart', data, layout);
