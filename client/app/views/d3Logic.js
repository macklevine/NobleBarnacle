
/*========================================================
 Sets up variables to use throughout function
 ========================================================= */
// used so we can see axises
var margin = {
	top: 60,
	bottom: 60,
	left: 60,
	right: 60,
};
// used to calculate the actual room we have within the SVG
var width = 1080 - margin.left - margin.right, 
    height = 620 - margin.top - margin.bottom;
//What data will look like for General once we transform it
var data = [[0, 0, 160, 100, 'radioAd', '2000'], [240, 0, 80, 50, 'radioAd', '1000'],
            [80, 100, 320, 50, 'branding', '1000'], [800, 200, 160, 50, 'conference', '1000' ],
            [0, 300, 960, 100, 'rent', '2000'], [0, 400, 160, 50, 'supplies', '1000']];
//item names to pass for y axis
var items = ['Radio Ad', 'Branding', 'Conference', 'Rent', 'Supplies', 0];

/*========================================================
Sets up SVG specs and specs for all the bars in the graph 
==========================================================*/
//creates a grouping element in our SVG to put all our rectanges/texts/etc
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right )
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//creates little grouping elements for each rectangle
var bar = chart.selectAll("g")
               .data(data)
               .enter().append("g")
               .attr('transform', function(d){ return 'translate(' + (d[0]) + ',' + (d[1] + 10 ) + ')';});
//puts the rectangles in these little group elements
            bar.append('rect')
               .attr('width', function(d){return d[2];})
               .attr('height', function(d){return d[3] - 20;})
               .attr('rx', '5px')
               .attr('ry', '5px');
//puts text in these group elements that represent the cost
            bar.append('text')
               .attr('x', '41px')
               .attr('y', '27px')
               .text(function(d) { return d[5];});
/*=======================================================
Sets up the x/y axis for the graph
=========================================================*/

//sets our x-axis to be a years worth of time
var x = d3.time.scale()
          .domain([new Date(2012, 0, 1), new Date(2012, 11, 31)])
          .range([0, width]);
//sets our y-axis to be the item names
var y = d3.scale.ordinal()
          .domain(items)
          .rangePoints([0, height]);

//sets up formatting for x-axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(d3.time.months)
    .tickSize(6, 0)
    .tickFormat(d3.time.format("%B"));
//sets up formating for y-axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(0,1);
//appends the x-axis to the svg
chart.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + height + ")")
     .call(xAxis);
//appends the y-axis to the svg
chart.append("g")
     .attr("class", "y axis")
     .call(yAxis);



/* ======================================================
How I need data to be structured
=========================================================

There are 4 transformations I need to occur in order to form all the rectangles

For the x coordinate of the triangle I need the month the item begins in as a number
for example, Radio Ad begins in January so I'd need the number 1, however it also begins in April
so I'd need to form a whole new array with the number 4. These numbers are then put in a calculation like this:
(width(varible)/12) * (MONTH NUMBER - 1)

For the y coordinate I need the number of item properties and a number which relates to the order in which the
property came. For example Radio Ad is 0 and Supplies is 5. The calculation for this goes like so:
(height(variable)/# OF ITEMS) * ITEM NUMBER

For height we simply calculate (height(variable)/# OF ITEMS)

For width we need to turn the number of consecutive months and item goes for into a number.
For example rent is 12, The first Radio Ad is 2, and the second Radio Ad is 1.
We then calculate the width like so:
(width(variable/12) * NUMBER OF CONSECUTIVE MONTHS
*/