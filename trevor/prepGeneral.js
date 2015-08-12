
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
  var obj = categoryCounter(general);
  var id = 0;
  general.forEach(function(item){
    var newItem = {};
    var firstYear = parseInt(findFirstYear(item));
    var lastYear = parseInt(findLastYear(item));

    var firstMonth = findFirstMonth(item, firstYear);
    var lastMonth = findLastMonth(item, lastYear);

    newItem.start = new Date(firstYear, firstMonth);
    newItem.end = new Date(lastYear, lastMonth);
    newItem.id = item.name;
    id++;
    newItem.category = item.category;
    newItem.categoryCount = obj[newItem.category];
    newItem.propVal = obj[item.name] - 1;
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

var categoryCounter = function(general){
  var obj = {};
  for(var i = 0; i < general.length; i++){
    if(obj[general[i].category] === undefined){
      obj[general[i].category] = 1;
      obj[general[i].name] = obj[general[i].category]
    }else{
      obj[general[i].category]++;
      obj[general[i].name] = obj[general[i].category]
    }
  }
  return obj;
};

// var propNumber = function(general){
//   var obj = {};
//   for(var i = 0; i < general.length; i++){
//     obj[general[i].name] = 
//   }
// }


