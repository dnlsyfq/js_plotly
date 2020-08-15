// line chart 

var trace1 = {
    x:['Milk','Eggs','Bread','Cheese','Pasta'],
    y:[1,6,2,1,3],
    mode: 'lines',
    type: 'scatter',
    name: 'Monday',
    marker:{size:12},
    text:[1,6,2,1,3],
    textfont:{
        family:'Times New Roman',
        size:16,
        color:'DeepPink'
    },
    textposition:'top center',
    marker:{
        size:12,
        // color:'LimeGreen'
        color: 'rgb(139,0,0)'
    }
};

var trace2 = {
    x:['Milk','Eggs','Bread','Cheese','Pasta'],
    y:[3,12,2,3,5],
    mode:'markers',
    type:'scatter',
    name:'Tuesday',
    marker:{size:12}
}


var data = [trace1,trace2]

var layout = {
    title: 'Groceries',
    xaxis:{
        range:[]
    },
    yaxis:{
        range:[0,12]
    }
};

Plotly.newPlot('chart',data,layout);


// bar chart 

var datatwo = [
    {
        x:["Basketball",'Baseball','Tennis','Track','Soccer'],
        y:[20,40,10,15,15],
        type:'bar'
    }
];

Plotly.newPlot('charttwo',datatwo)


