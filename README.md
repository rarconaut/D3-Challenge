# D3-Challenge
Homework 16 - D3 Challenge

This D3 visualization creates a scatter plot between two of the data variables: Income vs. Obesity.
Using the D3 techniques, a scatter plot is created that represents each state datapoint with SVG circle elements. You'll find the code for these graphics in the app.js file within the D3-Challenge directory. The data is pulled from data.csv using the d3.csv function. 

The scatter plot includes:
- State abbreviations in the circles
- Creates and situates its axes and labels to the left and bottom of the chart.
- Incorporates d3-tip

Using the d3-tip.js plugin developed by Justin Palmer, users are able to click on individual datapoints to find the more specific detailed data being displayed. This allows users to view the scatter plot at a glance to infer trends and correlations, while also being able to inspect the actual data/numbers without having to only infer approximate values for each circle from the tick marks. 
