

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


let allValues = [
    [8.4,4.0,2.7,2.3,1.6,1.5],
    [3.7,3.3,2.9,2.1,2.1,1.9],
    [26.8,20.3,15.7,13.5,13.1,12.2],
    [8.4,4.0,3.7,3.3,26.8,20.3]
]

let allLabels = [
    ['New York City','Los Angeles','Chicago','Houston','Phoenix','Philadelphia'],
    ['Berlin','Madrid','Rome','Paris','Bucharest','Vienna'],
    ['Shanghai','Beijing','Chongqing','Tianjin','Guangzhou','Shenzen'],
    ['New York City','Los Angeles','Chicago','Houston','Phoenix','Philadelphia'],
]

let allColors = [
    ['Red','Crimson','IndianRed','LightCoral','LightSalmon','Firebrick'],
    ['Green','MediumSeaGreen','SpringGreen','GreenYellow','Lime','Olive'],
    ['Blue','Navy','CornflowerBlue','LightSkyBlue','PowderBlue','LightSteelBlue'],
    ['Gold','Chocolate','Khaki','Sienna','SandyBrown','Tan']
]

var data = [{
    values: allValues[0],
    labels: allLabels[0],
    type: 'pie',
    name: 'USA',
    marker: {
        colors: allColors[0]
    },
    hoverinfo:  'label+percent+name',
    textinfo: 'none',
}];

var layout = {
    height: 400,
    width: 500,
    title: 'Top 5 US Cities by Population'
};

Plotly.newPlot('pietwo',data,layout);

var data = [{
    values: allValues[0],
    labels: allLabels[0],
    type: 'pie',
    name: 'USA',
    marker: {
        colors: allColors[0]
    },
    domain:{
      row: 0,
      column: 0
    },
    hoverinfo:  'label+percent+name',
    textinfo: 'none',
},{
    values: allValues[1],
    labels: allLabels[1],
    type: 'pie',
    name: 'EU',
    marker: {
        colors: allColors[1]
    },
    domain:{
        row: 1,
        column: 0
    },
    hoverinfo:  'label+percent+name',
    textinfo: 'none',
},{
    values: allValues[2],
    labels: allLabels[2],
    type: 'pie',
    name: 'China',
    marker: {
        colors: allColors[2]
    },
    domain:{
        row: 0,
        column: 1
    },
    hoverinfo:  'label+percent+name',
    textinfo: 'none',
},{
    values: allValues[3],
    labels: allLabels[3],
    type: 'pie',
    name: 'All',
    marker: {
        colors: allColors[3]
    },
    domain:{
        row: 1,
        column: 1
    },
    hoverinfo:  'label+percent+name',
    textinfo: 'none',
}];

var layout = {
    height: 400,
    width: 500,
    grid:{
      rows:2,
      columns:2
    },
    title: 'Top 5 US Cities by Population',
    showlegend: false
};

Plotly.newPlot('piethree',data,layout);

var randomNumber = []
for(var i = 0; i <= 19; i ++){
    randomNumber.push(Math.random())
};

var trace1 = {
    y: randomNumber,
    mode: 'markers',
    marker: {
        size:10,
        color: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        colorscale:'Picnic'
    }
}

var data = [trace1]

var layout = {
    title:'Random Scatter Plot'
}

Plotly.newPlot('scatter',data,layout)

var randomNumber = [];
for(var i=0; i < 500; i++){
    randomNumber[i] = Math.random();
}

var trace = {
    x: randomNumber,
    type:'histogram'
};

var data = [trace];

Plotly.newPlot('scattertwo',data)


var randomNumber1 = [];
var randomNumber2 = [];

for(var i=0; i < 500; i++){
    randomNumber1[i] = Math.random() + 1;
    randomNumber2[i] = Math.random() + 1.2;
}

var trace1 = {
    x: randomNumber1,
    type:'histogram',
    opacity:0.5,
    marker:{
        color:'red'
    }
}

var trace2 = {
    x:randomNumber2,
    type:'histogram',
    opacity:0.7,
    marker:{
        color:'blue'
    }
}

var data = [trace1,trace2]

var layout = {barmode:"overlay"};

Plotly.newPlot('hist',data,layout);


var trace1 = {
    x:[1,2,3,4],
    y:[5,6,7,8],
    text:['size<br>20','size<br>40','size<br>60','size<br>80'],
    mode:'markers',
    marker:{
        size:[20,40,60,80],
        color:['red','orange','yellow','green']
    }
}

var data = [trace1]

var layout = {
    title:'Bubble',
    showlegend:false
}

Plotly.newPlot('bubble',data,layout)

// combo chart

var trace1 = {
    x:['milk','eggs','bread','cheese','pasta'],
    y:[1,4,2,1,3],
    type:'bar'
}

var trace2 = {
    x:['milk','eggs','bread','cheese','pasta'],
    y:[0.07,0.46,0.15,0.07,0.23],
    yaxis:'y2',
    type:'scatter'
}

var data = [trace1,trace2]

var layout = {
    title:'Combo chart',
    yaxis2:{
        overlaying:'y',
        side:'right'
    }
}

Plotly.newPlot('combo',data,layout);



var trace1 = {
    x:['milk','eggs','bread','cheese','pasta'],
    y:[1,4,2,1,3],
    type:'bar'
}

var trace2 = {
    x:['milk','eggs','bread','cheese','pasta'],
    y:[0.07,0.46,0.15,0.07,0.23],
    xaxis:'x2',
    yaxis:'y2',
    type:'scatter'
}

var data = [trace1,trace2]

var layout = {
    title:'Embed combo chart',
    yaxis2:{
        domain:[0.8,1],
        anchor:'x2'
    },
    xaxis2:{
        domain:[0.8,1],
        anchor:'y2'
    }
}

Plotly.newPlot('embedcombo',data,layout);