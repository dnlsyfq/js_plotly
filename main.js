

var trace1 = {
    x : ['Milk','Eggs','Bread'],
    y : [1,5,2],
    mode : 'markers',
    type: 'scatter',
    name:'line1',
    marker: {size:12}
};

var trace2 = {
    x : ['Milk','Eggs','Bread'],
    y : [3,8,4],
    mode : 'lines',
    type: 'scatter',
    name:'line2'
};

var trace3 = {
    x : ['Milk','Eggs','Bread'],
    y : [14,4,6],
    text: [14,4,6],
    textfont:{
      family:'Times New Roman',
      size: 16,
      color: 'red'
    },
    mode : 'markers+text',
    type: 'scatter',
    name:'line3',
    textposition:'top center',
    marker:{size:12,color:'rgb(139,0,0)'}
};

var data = [
    trace1 , trace2 , trace3
]

var layout = {
    xaxis:{
      range:[]
    },
    yaxis:{
        range:[0,20]
    },
    title: 'Line Chart'
};

Plotly.newPlot('linechart',data,layout)


var trace3 = {
    x: ["Basketball","Baseball","Tennis","Track","Soccer"],
    y: [20,40,10,15,15],
    type:'bar',
    name:'USA',
    text:[
        'Above mean','Above mean','Below mean','Below mean','Below mean'
    ]
};

var trace4 = {
    x: ["Basketball","Baseball","Tennis","Track","Soccer"],
    y:[15,5,25,15,40],
    type:'bar',
    name:'Spain',
    text:[15,5,25,15,40].map(String),
    textposition:'auto',
    hoverinfo:'none'
}

var data = [trace3,trace4];

var layout = {
    barmode: 'group', // stack
    bargap:0.25,
    showlegend:false,
    xaxis:{
        tickangle:-45
    },
    yaxis:{
        zeroline:false,
        gridwidth:2
    }
};

Plotly.newPlot('bar',data,layout);

var redcolors = ['Red','Crimson','IndianRed','LightCoral','LightSalmon']

var data = [{
    values:[8.1,3.8,2.7,2.3,1.4],
    labels:['New York City','Los Angeles','Chicago','Houston','Phoenix'],
    type:'pie',
    marker:{
        colors:redcolors
    }
}];

var layout = {
    height:400,
    width:500,
    title:'Top 5 US Cities by Population'
};

Plotly.newPlot('pie',data,layout);



