// line chart 

// var trace1 = {
//     x:['Milk','Eggs','Bread','Cheese','Pasta'],
//     y:[1,6,2,1,3],
//     mode: 'lines',
//     type: 'scatter',
//     name: 'Monday',
//     marker:{size:12},
//     text:[1,6,2,1,3],
//     textfont:{
//         family:'Times New Roman',
//         size:16,
//         color:'DeepPink'
//     },
//     textposition:'top center',
//     marker:{
//         size:12,
//         // color:'LimeGreen'
//         color: 'rgb(139,0,0)'
//     }
// };

// var trace2 = {
//     x:['Milk','Eggs','Bread','Cheese','Pasta'],
//     y:[3,12,2,3,5],
//     mode:'markers',
//     type:'scatter',
//     name:'Tuesday',
//     marker:{size:12}
// }


// var data = [trace1,trace2]

// var layout = {
//     title: 'Groceries',
//     xaxis:{
//         range:[]
//     },
//     yaxis:{
//         range:[0,12]
//     }
// };

// Plotly.newPlot('chart',data,layout);


// bar chart 

// var yValue = [20,40,10,15,15]

// var trace1 = {
//         x:["Basketball",'Baseball','Tennis','Track','Soccer'],
//         y:yValue,
//         type:'bar',
//         name:'USA',
//         text: yValue.map(String),
//         textposition:'auto',
//         hoverinfo:'none'
//     };

// var trace2 = {
//         x:["Basketball",'Baseball','Tennis','Track','Soccer'],
//         y:[15,5,25,15,40],
//         type:'bar',
//         name:'Spain',
//         text:[15,5,25,15,40].map(String),
//         textposition:'auto',
//         hoverinfo:'none'
//     };

//     var data = [trace1,trace2]

//     var layout = {
//         barmode:'stack', // stack,group
//         // bargap:0.25
//         showlegend:false,
//         xaxis:{
//             tickangle:-45
//         },
//         yaxis:{
//             zeroline: false,
//             gridwidth:2
//         }
//     };

// Plotly.newPlot('charttwo',data,layout);

// Pie

// var redcolors = ['Red','Crimson','IndianRed','LightCoral','LightSalmon']

// var data = [
//     {
//         values:[8.1,3.8,2.7,2.3,1.4],
//         labels:['New York City','L.A','Chicago','Houston','Phoenix'],
//         type:'pie',
//         name:'USA',
//         hole:.4,
//         marker:{
//             colors:redcolors
//         },
//         hoverinfo:'label+percent+name',
//         textinfo:'none'
//     }
// ];

// var layout = {
//     height: 400,
//     width: 500,
//     title:'Top 5 US Cities by Population'
// };

// Plotly.newPlot('chart',data,layout);


// scatter 

// var randomNumber = []

// for(var i = 0; i <= 19; i++){
//     randomNumber.push(Math.random())
// };

// var trace1 = {
//     y:randomNumber,
//     mode:'markers',
//     marker:{
//         size:10,
//         color:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
//         colorscale:'Picnic'
//     }
// };

// var data = [trace1]

// var layout = {
//     title:'Random Generated Scatter plot'
// }

// Plotly.newPlot('scatter',data,layout);


// histogram
// var randomNumber = [];
// var randomNumber1 = [];
// var randomNumber2 = [];

// for(var i = 0; i < 500; i ++){
//     randomNumber[i] = Math.random();
//     randomNumber1.push(Math.random() + 1);
//     randomNumber2.push(Math.random() + 1);
// }

// method 1
// var trace = {
//     x: randomNumber,
//     type: 'histogram',
// };

// var data = [trace];
// Plotly.newPlot('histogram',data)

// method 2
// var data = [
//     {
//         y:randomNumber,
//         type:'histogram',
//         marker:{
//             color:'red'
//         }
//     }
// ];

// Plotly.newPlot('histogram',data)

//method 3
// var trace1 = {
//     x:randomNumber1,
//     type:'histogram',
//     cumulative: {enabled:true},
//     opacity:0.5,
//     marker:{
//         color:'red'
//     }
// };

// var trace2 = {
//     x:randomNumber2,
//     type:'histogram',
//     opacity:0.7,
//     marker:{
//         color:'blue'
//     }
// };

// var data = [trace1,trace2];

// var layout = {barmode:'stack'};

// Plotly.newPlot('histogram',data,layout);


// bubble

// var trace1 = {
//     x:[1,2,3,4],
//     y:[5,6,7,8],
//     mode:'markers',
//     marker:{
//         size:[20,40,60,80]
//     }
// };

// var data = [trace1];

// var layout = {
//     title:'Bubble Chart',
//     showlegend: false
// }

// Plotly.newPlot('bubble',data,layout)

// combo

// var trace1 = {
//     x:['Milk','Eggs','Bread','Cheese','Pasta'],
//     y:[1,4,2,1,3],
//     type:'bar'
// };

// var trace2 = {
//     x:['Milk','Eggs','Bread','Cheese','Pasta'],
//     y:[0.07,0.46,0.15,0.07,0.23],
//     xaxis:'x2',
//     yaxis:'y2',
//     type:'scatter'
// };

// var data = [trace1,trace2]

// var layout = {
//     title:'Groceries',
//     yaxis2:{
//         domain:[0.8,1],
//         anchor:'x2'
//     },
//     xaxis2:{
//         domain:[0.8,1],
//         anchor:'y2'
//     }
// }

// Plotly.newPlot('combo',data,layout);

// responsive

// var xValue = ["Basketball","Baseball","Tennis","Track","Soccer"]
// var yValue = [20,40,10,15,15]

// var trace1 = {
//     x:xValue,
//     y:yValue,
//     type:'bar',
//     name:'USA',
//     text:yValue.map(String),
//     textposition:'auto',
//     hoverinfo:'none'
// };

// var data = [trace1]

// var layout = {
//     barmode:'stack',
//     autosize:true
// }

// var config = {
//     responsive:true
// };

// Plotly.newPlot('responsive',data,layout);

// line hover 

// var d3 = Plotly.d3,
//     N = 5,
//     x = d3.range(N).map(d3.random.normal()),
//     y = d3.range(N).map(d3.random.normal()),
//     data = [{ x:x, y:y, type:'scatter', mode:'markers',
//     name:'test',
//     marker:{size:16},
//     hoverinfo:'x+y',
//     hovertemplate: '<i>Price</i>: $%{y:.2f}' +
//                    '<br><b>X</b>: %{x}<br>' +
//                    '<b>%{text}</b>',
//                    text:["Text A","Text B","Text C","Text C","Text D","Text E"]

//     }];

// var layout = {
//     hovermode:'closest',
//     xaxis:{zeroline:false,hoverformat:'.2f'},
//     yaxis:{zeroline:false,hoverformat:'.2f'}
// };

// Plotly.newPlot('hv',data,layout);

// text on graph

var layout = {
    showlegend:false,
    annotations:[{
            x:2,
            y:3,
            xref:'x',
            yref:'y',
            text:'Look here',
            showarrow: true,
            arrowhead:1,
            ax:0,
            ay:-40
         }]
};

// configuration options

Plotly.newPlot('divID',data,layout,
    {displayModeBar:true},
    {displaylogo:true}
);