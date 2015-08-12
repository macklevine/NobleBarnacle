var general = [
        {
          category: 'Marketing',
          name: 'Radio Ad',
          description: 'We plan to purchase a radio ad to increase awareness',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 1000, "apr": 1000, "jul": 1000, "aug": 1000, "sep": 1000
              }
            }
          ]
        },
        {
          category: 'Marketing',
          name: 'Branding Design',
          description: 'Payment for logo design',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: 'Marketing',
          name: 'Trade Show',
          description: 'Traveling to a trade show in Las Vegas',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: 'Facilities and Equipment',
          name: 'Rent',
          description: 'communication costs for the team',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000
              }
            },
            {
              year: 2016,
              months: {
                "jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000
              }
            }
          ]
        },
        {
          category: "Facilities and Equipment",
          name: "Cell Phone",
          description: 'Rent for office space',
          money: [
            {
              year: 2015,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            },
            {
              year: 2016,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            }
          ]
        },
        {
          category: "Facilities",
          name: "Cell Phone",
          description: 'Rent for office space',
          money: [
            {
              year: 2015,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            },
            {
              year: 2016,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            }
          ]
        },
        {
          category: "Facilities and Equipment",
          name: "Cleaning",
          description: "Cleaning service for the office space",
          money: [
            {
              year: 2015,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            },
            {
              year: 2016,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            }
          ]
        },
        {
          category: "Insurance",
          name: "General Liability",
          description: "General liability insurance",
          money: [
            {
              year: 2015,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            },
            {
              year: 2016,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            }
          ]
        },
        {
          category: "Insurance",
          name: 'Property Insurance',
          description: 'Property Insurance',
          money: [
            {
              year: 2015,
              months: {
                "jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200
              }
            },
            {
              year: 2016,
              months: {
                "jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200
              }
            }
          ]
        },
        {
          category: "Supplies",
          name: "Computers",
          description: "Laptops for new employees",
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: "Supplies",
          name: "Servers",
          description: "Server stack for deployment",
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        }
      ]

//set up the lanes
var lanes = buildLanes(general);
//console.log(lanes);

//set up the items
var items = buildItems(general, lanes);
console.log(items);



var now = new Date();

//settings for chart
var margin = {top: 20, right: 90, bottom: 15, left: 150}
  , width = window.innerWidth - margin.left - margin.right
  , height = window.innerHeight - 50 - margin.top - margin.bottom
  , miniHeight = lanes.length * 12 + 50
  , mainHeight = height - miniHeight - 50;

//time scale for the mini display
var x = d3.time.scale()
  .domain([d3.time.month(d3.min(items, function(d) { return d.start; })),
       d3.max(items, function(d) { return d.end; })])
  .range([0, width]);

//time scale for main display
var x1 = d3.time.scale().range([0, width]);

var ext = d3.extent(lanes, function(d) { return d.id; });
var y1 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, mainHeight]);
var y2 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, miniHeight]);

var chart = d3.select('body')
  .append('svg:svg')
  .attr('width', '100%')
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'chart');

chart.append('defs').append('clipPath')
  .attr('id', 'clip')
  .append('rect')
    .attr('width', width)
    .attr('height', mainHeight);

var main = chart.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', mainHeight)
  .attr('class', 'main');

var mini = chart.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + (mainHeight + 60) + ')')
  .attr('width', width)
  .attr('height', miniHeight)
  .attr('class', 'mini');

// draw the lanes for the main chart
main.append('g').selectAll('.laneLines')
  .data(lanes)
  .enter().append('line')
  .attr('x1', 0)
  .attr('y1', function(d) { return d3.round(y1(d.id)) + 0.5; })
  .attr('x2', width)
  .attr('y2', function(d) { return d3.round(y1(d.id)) + 0.5; })
  .attr('stroke', function(d) { return d.label === '' ? 'white' : 'lightgray' });

main.append('g').selectAll('.laneText')
  .data(lanes)
  .enter().append('text')
  .text(function(d) { return d.label; })
  .attr('x', -10)
  .attr('y', function(d) { return y1(d.id + .5); })
  .attr('dy', '0.5ex')
  .attr('text-anchor', 'end')
  .attr('class', 'laneText');

// draw the lanes for the mini chart
mini.append('g').selectAll('.laneLines')
  .data(lanes)
  .enter().append('line')
  .attr('x1', 0)
  .attr('y1', function(d) { return d3.round(y2(d.id)) + 0.5; })
  .attr('x2', width)
  .attr('y2', function(d) { return d3.round(y2(d.id)) + 0.5; })
  .attr('stroke', function(d) { return d.label === '' ? 'white' : 'lightgray' });

mini.append('g').selectAll('.laneText')
  .data(lanes)
  .enter().append('text')
  .text(function(d) { return d.label; })
  .attr('x', -10)
  .attr('y', function(d) { return y2(d.id + .5); })
  .attr('dy', '0.5ex')
  .attr('text-anchor', 'end')
  .attr('class', 'laneText');

var x1DateAxis = d3.svg.axis()
  .scale(x1)
  .orient('bottom')
  .ticks(d3.time.months, 1)
  .tickFormat(d3.time.format('%a %d'))
  .tickSize(2, 0, 0);

var xMonthAxis = d3.svg.axis()
  .scale(x)
  .orient('top')
  .ticks(d3.time.years, 1)
  .tickFormat(d3.time.format('%b %Y'))
  .tickSize(15, 0, 0);

//axis for the main display
var x1MonthAxis = d3.svg.axis()
  .scale(x1)
  .orient('top')
  .ticks(d3.time.months, 1)
  .tickFormat(d3.time.format('%b'))
  .tickSize(10, 0, 0);

// main.append('g')
//   .attr('transform', 'translate(0,' + mainHeight + ')')
//   .attr('class', 'main axis date')
//   .call(x1DateAxis);

//append X axis for main display
main.append('g')
  .attr('transform', 'translate(0,0.5)')
  .attr('class', 'main axis month')
  .call(x1MonthAxis)
  .selectAll('text')
    .attr('dx', 5)
    .attr('dy', 12);

mini.append('g')
  .attr('transform', 'translate(0,0.5)')
  .attr('class', 'axis month')
  .call(xMonthAxis)
  .selectAll('text')
    .attr('dx', 5)
    .attr('dy', 12);

// draw the items
var itemRects = main.append('g')
  .attr('clip-path', 'url(#clip)');

mini.append('g').selectAll('miniItems')
  .data(getPaths(items))
  .enter().append('path')
  .attr('class', function(d) { return 'miniItem ' + d.class; })
  .attr('d', function(d) { return d.path; });

// invisible hit area to move around the selection window
mini.append('rect')
  .attr('pointer-events', 'painted')
  .attr('width', width)
  .attr('height', miniHeight)
  .attr('visibility', 'hidden')
  .on('mouseup', moveBrush);

// draw the selection area
var brush = d3.svg.brush()
  .x(x)
  .extent([d3.time.month(now),d3.time.month.ceil(now)])
  .on("brush", display);

mini.append('g')
  .attr('class', 'x brush')
  .call(brush)
  .selectAll('rect')
    .attr('y', 1)
    .attr('height', miniHeight - 1);

mini.selectAll('rect.background').remove();
display();

function display () {

  var rects, labels
    , minExtent = d3.time.day(brush.extent()[0])
    , maxExtent = d3.time.day(brush.extent()[1])
    , visItems = items.filter(function (d) { return d.start < maxExtent && d.end > minExtent});

  mini.select('.brush').call(brush.extent([minExtent, maxExtent]));   

  x1.domain([minExtent, maxExtent]);

  if ((maxExtent - minExtent) > 1468800000) {
    x1MonthAxis.ticks(d3.time.months, 1).tickFormat(d3.time.format('%b'))    
  }
  else if ((maxExtent - minExtent) > 172800000) {
    x1DateAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%a %d'))
    x1MonthAxis.ticks(d3.time.mondays, 1).tickFormat(d3.time.format('%b - Week %W'))
  }
  else {
    x1DateAxis.ticks(d3.time.hours, 4).tickFormat(d3.time.format('%I %p'))
    x1MonthAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%b %e'))
  }

  // update the axis
  main.select('.main.axis.date').call(x1DateAxis);
  main.select('.main.axis.month').call(x1MonthAxis)
    .selectAll('text')
      .attr('dx', 5)
      .attr('dy', 12);

  // update the item rects
  rects = itemRects.selectAll('rect')
    .data(visItems, function (d) { return d.id; })
    .attr('x', function(d) { return x1(d.start); })
    .attr('width', function(d) { return x1(d.end) - x1(d.start); })
    .attr('class', function(d) { return 'mainItem resizable ' + d.class;  });

  rects.enter().append('rect')
    .attr('x', function(d) { return x1(d.start); })
    .attr('y', function(d) { return y1(d.lane) + .1 * y1(1) + 0.5; })
    .attr('width', function(d) { return x1(d.end) - x1(d.start); })
    .attr('height', function(d) { return .8 * y1(1); })
    .attr('class', function(d) { return 'mainItem resizable ' + d.class; })
    .on('click', editItem);

  rects.exit().remove();

  // update the item labels
  labels = itemRects.selectAll('text')
    .data(visItems, function (d) { return d.id; })
    .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 2; });
        
  labels.enter().append('text')
    .text(function (d) { return 'Item\n\n\n\n Id: ' + d.id; })
    .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 2; })
    .attr('y', function(d) { return y1(d.lane) + .4 * y1(1) + 0.5; })
    .attr('text-anchor', 'start')
    .attr('class', 'itemLabel');

  labels.exit().remove();
}

function moveBrush () {
  var origin = d3.mouse(this)
    , point = x.invert(origin[0])
    , halfExtent = (brush.extent()[1].getTime() - brush.extent()[0].getTime()) / 2
    , start = new Date(point.getTime() - halfExtent)
    , end = new Date(point.getTime() + halfExtent);

  brush.extent([start,end]);
  display();
}

function editItem (item) {
  var newYear = prompt("Enter a new start year: ");
  var newMonth = prompt("Enter a new start month: ");
  item.start = new Date(newYear, newMonth);
  display();
}

// generates a single path for each item class in the mini display
// ugly - but draws mini 2x faster than append lines or line generator
// is there a better way to do a bunch of lines as a single path with d3?
function getPaths(items) {
  var paths = {}, d, offset = .5 * y2(1) + 0.5, result = [];
  for (var i = 0; i < items.length; i++) {
    d = items[i];
    if (!paths[d.class]) paths[d.class] = ''; 
    paths[d.class] += ['M',x(d.start),(y2(d.lane) + offset),'H',x(d.end)].join(' ');
  }

  for (var className in paths) {
    result.push({class: className, path: paths[className]});
  }

  return result;
}



