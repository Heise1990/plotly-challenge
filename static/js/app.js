// Fetch the JSON data and console log it

// Use the filter method to create a custom filtering function
var id = 940
// function top10otus(otu) {
//  return parseInt(otu.id) == id;
// }
// Use filter() to pass the function as its argument
function init (id){
  d3.json("././data/samples.json").then(function(data) {


    data.names.forEach(d => 
d3.select("#selDataset").append("option").text(d)
);
var top10 = data.samples.filter(d => d.id == id)[0];
var slicedOtu_ids = top10.otu_ids.slice(0,10).reverse();
var slicedSamples = top10.sample_values.slice(0,10).reverse();
console.log(slicedOtu_ids);


var barChart = [{
  type: 'bar',
  orientation: 'h',
  y: slicedOtu_ids.map(d => `OTUid ${d}`),
  x: slicedSamples
}];

var layout = {title: "Bar Chart"} 



Plotly.newPlot('bar', barChart, layout);

// Bubble Chart



});




// gauge wash meter

// var gaugeWash = [
//   {
//     domain: { x: [0, 1], y: [0, 1] },
//     value: 270,
//     title: { text: "Speed" },
//     type: "indicator",
//     mode: "gauge+number"
//   }
// ];

// var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
// Plotly.newPlot('myDiv', data, layout);

};
init(id);

function optionChanged(selectedID){

init (selectedID)
};