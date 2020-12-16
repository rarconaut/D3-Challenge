// @TODO: YOUR CODE HERE!

// Outline for homework adapted from 16/D3/3/Activities/09-Stu_Hair_Metal
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by 
// left and top margins.
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function (healthData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    healthData.forEach(function (data) {
        // console.log(data.state, data.income);
        //   data.hair_length = +data.income;
        //   data.num_hits = +data.income;
        //   console.log(data.state, data.income)
    });

    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d.income), d3.max(healthData, d => d.income)])
        .range([0, chartWidth]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d.obesity), d3.max(healthData, d => d.obesity)])
        .range([chartHeight, 0]);

    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .classed("x", true)
        .call(bottomAxis);

    chartGroup.append("g")
        .classed("y", true)
        .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.append("g")
        .selectAll("circle")
        .data(healthData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.income))
        .attr("cy", d => yLinearScale(d.obesity))
        .attr("r", "15")
        .attr("fill", "blue")
        .attr("opacity", ".5")
        .classed("dot", true);

    // /* Create the text for each circle */
    var textGroup = chartGroup.selectAll("g.dot")
        .data(healthData)
        .enter()
        .append("text")
        .text((d, i) => d.abbr[i])
        .attr({
            'font-size': 8, //font size
            "text-anchor": "middle" //positions text in center of the circle
        });

    // Event handlers for interactive scatter points 
    circlesGroup.on("click", function (healthData) {
        toolTip.show(healthData, this);
        d3.select(this)
            .transition()
            .duration(500)
            .attr("r", "85")
            .attr("fill", "red")
            .attr("opacity", ".99")
            .attr("class", "clicked");
    })
        .on("mouseout", function (healthData, index) {
            toolTip.hide(healthData);
            // for clicked points, returns to original size with different color
            // console.log(this);
            if (d3.select(this).classed("clicked")) {
                // console.log(this);
                d3.select(this)
                    .attr("fill", "green")
                    .attr("opacity", ".5")
                    .transition()
                    .duration(500)
                    .attr("r", "15");
            }
            // for unclicked points, returns to original size and color
            else {
                // console.log(this);
                d3.select(this)
                    .attr("fill", "blue")
                    .attr("opacity", ".5")
                    .transition()
                    .duration(500)
                    .attr("r", "15");
            }
        });

        // Step 6: Initialize tool tip
        // ==============================
    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([10, 0])
        // .attr({
        //     // 'font-size': 8, //font size
        //     "text-anchor": "middle" //positions text in center of the circle
        // })
        .html(function (d) {
            return (`${d.state}<br>Income: ${d.income}<br>Obesity: ${d.obesity}`);
        });

        // Step 7: Create tooltip in the chart
        // ==============================
        chartGroup.call(toolTip);

        // Step 8: Create event listeners to display and hide the tooltip
        // ==============================
        // circlesGroup.on("click", function(healthData) {
        //   toolTip.show(healthData, this);
        // })
        //   // onmouseout event
        //   .on("mouseout", function(healthData, index) {
            // toolTip.hide(healthData);
        //   });

        // Step 9: Create axes labels
        // ==============================
        chartGroup.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left + 40)
          .attr("x", 0 - (chartHeight / 2))
          .attr("dy", "1em")
          .attr("class", "axisText")
          .text("Obesity Score");

        chartGroup.append("text")
          .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + margin.top + 30})`)
          .attr("class", "axisText")
          .text("Income ($USD)");
}).catch(function (error) {
    console.log(error);
});
