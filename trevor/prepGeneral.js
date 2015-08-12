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
      ];

/*****************************************
/* Helper Functions
/****************************************/

//filter keys
//takes an array of objects and a key
//returns a unique-sorted array of the values for that key
var getKeysInArray = function(array, key) {
  var keys = {};
  array.forEach(function(obj){
    keys[obj[key]] = true;
  });
  return Object.keys(keys);
};

//Find start Year
//returns the numerical value of the first year
var findFirstYear = function(item) {
  return getKeysInArray(item.money, 'year').sort().shift();
};

//Find last Year
//return the numerical value of the last year
var findLastYear = function(item) {
  return getKeysInArray(item.money, 'year').sort().pop();
};

//Find first month
//return the index for the first month of the given year
var findFirstMonth = function(item, year) {
  var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  for( var i = 0; i < item.money.length; i++) {
    if( item.money[i].year === year ){
      var monthsInYear = Object.keys(item.money[i].months);
    }
  }
  var monthsAsIndices = monthsInYear.map(function(month){
    return months.indexOf(month);
  });

  return monthsAsIndices.sort().shift();
};

//Find last month
//return the index for the last month of the given year
var findLastMonth = function(item, year) {
  var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  for( var i = 0; i < item.money.length; i++) {
    if( item.money[i].year === year ){
      var monthsInYear = Object.keys(item.money[i].months);
    }
  }
  var monthsAsIndices = monthsInYear.map(function(month){
    return months.indexOf(month);
  });

  return monthsAsIndices.sort().pop();
};

/*****************************************
/* End Helper Functions
/****************************************/

//Build the items

var buildItems = function(general, lanes){
  var items = [];
  //console.log(lanes)
  var id = 0;
  general.forEach(function(item){
    var newItem = {};
    var firstYear = parseInt(findFirstYear(item));
    var lastYear = parseInt(findLastYear(item));

    var firstMonth = findFirstMonth(item, firstYear);
    var lastMonth = findLastMonth(item, lastYear);

    newItem.start = new Date(firstYear, firstMonth);
    newItem.end = new Date(lastYear, lastMonth);
    newItem.id = id;
    id++;
    newItem.class = 'past ' + item.name;
    newItem.desc = item.description;
    newItem.lane = whichLane(item, lanes);
    items.push(newItem);
  });
  return items;
};

//set up the lanes
var buildLanes = function(general) {
  var categories = getKeysInArray(general, 'category');
  var lanes = [];
  var id = 0;
  categories.forEach(function(category){
    var obj = {label: category, id: id};
    lanes.push(obj);
    id++;
  });
  return lanes;
};

var whichLane = function(item, lanes){
  // console.log(item)
  // console.log(lanes)
  for(var i = 0; i < lanes.length; i++){
    if(lanes[i].label === item.category){
      console.log(lanes[i].id);
      return lanes[i].id;
    }
  }
};


