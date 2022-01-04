var _self = this;

var t = 1297110663, // start time (seconds since epoch)
    v = 70, // start value (subscribers)
    sentidata = d3.range(33).map(next); // starting dataset

var w = 20,
    h = 80;

var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

var y = d3.scale.linear()
    .domain([0, 200])
    .rangeRound([0, h]);

var z = d3.scale.ordinal()
    .range(["lightpink", "darkgray"]);

//This function creates random test data of format : time, posvalue, negvalue
function next() {
    return {
        time: ++t,
        posvalue: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5))),
        negvalue: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
    };
}

//This function readjusts the data with one new data point and calls redraw function to replot the graph
setInterval(function() {
    sentidata.shift();
    sentidata.push(next());
    redraw(sentidata);
}, 1500);

var svg = d3.select("body").append("svg:svg")
    .attr("class", "chart")
    .attr("width", w * sentidata.length - 1)
    .attr("height", h);


//Transpose the data into layers by Sentiment
var sent = d3.layout.stack()(["posvalue","negvalue"].map(function(sentiment){
    return sentidata.map(function(d){
        return {x:d.time, y:+d[sentiment]};
    });
}));


//Add a group for each Sentiment
var sentiment = svg.selectAll("g.sentiment")
    .data(sent)
    .enter()
    .append("svg:g")
    .attr("class","sentiment")
    .style("fill", function(d,i){return z(i);})
    .style("stroke", function(d,i){return d3.rgb(z(i)).darker();});

//Add a rectangle for each time value
var rect = sentiment.selectAll("rect")
    .data(Object)
    .enter()
    .append("svg:rect")
    .attr("x",function(d, i) { return x(i) - .5; })
    .attr("y",function(d){return h - y(d.y0)-y(d.y);})
    .attr("height", function(d){return y(d.y);})
    .attr("width",w);


svg.append("line")
    .attr("x1", 0)
    .attr("x2", w * sentidata.length)
    .attr("y1", h - .5)
    .attr("y2", h - .5)
    .style("stroke", "#000");


function redraw(data) {

    //Transpose the data into layers by Sentiment
    var sent = d3.layout.stack()(["posvalue","negvalue"].map(function(sentiment){
        return data.map(function(d){
            return {x:d.time, y:+d[sentiment]};
        });
    }));

    //Add a group for each Sentiment
    var sentiment = svg.selectAll("g.sentiment")
        .data(sent)
        .attr("class","sentiment")
        .style("fill", function(d,i){return z(i);})
        .style("stroke", function(d,i){return d3.rgb(z(i)).darker();});

    sentiment.selectAll("rect")
        .data(Object)
        .transition()
        .duration(1000)
        .attr("y",function(d){return h - y(d.y0)-y(d.y);})
        .attr("height", function(d){return y(d.y);});

}