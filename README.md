# A Custom Interactive Scatter Plot Built With D3 SVG Elements! D3-Challenge
Welcome to the D3Times - D3 Challenge! 

This D3 visualization creates a scatter plot between two of the health dataset variables: Income vs. Obesity.

![image](https://user-images.githubusercontent.com/68246130/114629453-713b1d80-9c6d-11eb-9c21-4c03208ea999.png)

Using D3 methods, a scatter plot is created that represents each US State datapoint with SVG circle elements. You'll find the code for these graphics in the app.js file within the D3-Challenge directory. The data is pulled from data.csv using the d3.csv method. 

Some unique features of this scatter plot:
- Includes state abbreviations in each of the data point circles
- Uses D3 SVG elements to create & situate its axes and labels to the left and bottom of the chart
- Has event handlers for mouse clicks & mousing out for interactive response to the user
- Uses changing colors to show which data points have already been viewed (blue = unviewed, red = currently selected, green = previously viewed)
- And, incorporates a customized d3-tip tooltip by increasing the size of the datapoint 

![image](https://user-images.githubusercontent.com/68246130/114629563-ad6e7e00-9c6d-11eb-81ca-7d594d860678.png)
![image](https://user-images.githubusercontent.com/68246130/114629629-c840f280-9c6d-11eb-9fa5-93692adf2026.png)


By using the d3-tip.js plugin, developed by Justin Palmer, users are able to click on individual datapoints to find the more specific detailed data being displayed. This allows users to view the scatter plot at a glance to infer trends and correlations, while also being able to inspect the actual data/numbers without having to only infer approximate values for each circle from the tick marks.

Thank you, and enjoy exploring my D3 chart!



Data Science & Visualization Boot Camp - Homework 16 D3 Challenge
