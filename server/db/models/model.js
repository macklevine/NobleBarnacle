var mongoose = require('mongoose');
var bluebird = require('bluebird');

var modelSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true }},
  expenses: {
    employees: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    startupCosts: [{type: Schema.Types.ObjectId, ref: 'StartupCost'}]
  }, //a schema can have nested keys like this.
  debtsAndEquities: [{type: Schema.Types.ObjectId, ref: 'DebtAndEquity'}],
  revenueSources: [{type: Schema.Types.ObjectId, ref: "RevenueSource"}]
});

//important questions: are objectIds generated automatically for every
//instance of a mongoose model?

var employeeSchema = mongoose.Schema({
  //Trevor wants to be able to fetch employees by an ID value;
  //this will not be the same as the big hash string Mongo automatically
  //assigns to the invisible _id field.
  _parentModel: {type: String, ref: "Model"},
  title: String,
  yearlySalary: Number,
  startDate: String
});


var startupCostSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  type: String,
  cost: Number,
  month: String
});

var debtAndEquitySchema = mongoose.Schema({ //need to find an actual example from Trevor's data.
  _parentModel: {type: String, ref: "Model"},
  name: String,
  type: String, //'loan' or 'equity'
  principle: Number,
  startMonth: String,
  months: String,//maybe an array of strings?
  interest: Number
});

var revenueSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  productName: String,
  pricePerUnit: Number,
  costOfProductionPerUnit: Number,
  comission: Number,
  grossProfit: Number, //is this something that has to be stored, or calculated on the server/front end?
  monthlyUnitSales: {
    jan: Number,
    feb: Number,
    mar: Number,
    apr: Number,
    may: Number,
    june: Number,
    jul: Number,
    aug: Number,
    sep: Number,
    oct: Number,
    nov: Number,
    dec: Number
  }
})

//constructors below.

var Employee = mongoose.model("Employee", employeeSchema);
var StartupCost = mongoose.model("StartupCost", startupCostSchema);
var DebtAndEquity = mongoose.model("DebtAndEquity", debtAndEquitySchema);
var RevenueSource = mongoose.model("RevenueSource", revenueSchema);
var Model = mongoose.model("Model", modelSchema);

//Functions to add and delete items from an existing financial model are declared below (scaffolding)

var addEmployee = function(username){

};

var deleteEmployee = function(username){

};

var addStartupCost = function(username){

};

var deleteStartupCost = function(username){

};

var addDebtAndEquity = function(username){

};

var deleteDebtAndEquity = function(username){

};

var addRevenueSource = function(username){

};

var deleteRevenueSource = function(username){

}

//Trevor's requested functions are below:

var getExpenses = function(username){
  //return all expenses for a given model/username as an array.
  return Model.findOne({username: username}).exec(function(err, model){
    if (err){
      //handle an error somehow.
    } else {
      return model.expenses;
    }
  });
  //check if Trevor wants this in a specific format.
}

//add more of Trevor's functions:


//the function for creating each user's default model is below.

var instantiateDefaultModel = function(username){
  //validate the username first.

  var defaultModel = new Model({
    username: username,
  }).save(function (err){
    if (err) {return err};

    var CEO = new Employee({
      _parentModel: defaultModel.id
      title: "CEO",
      yearlySalary: 150000,
      startDate: 'feb'
    });

    CEO.save(); //maybe do some error handling for each one of these?

    //TODO: populate the rest of this constructor function with shit
    //from dataFromServerToClient.js.


  })
  return defaultModel;
}


//start defining exports here.

/*
STARTUP COST SCHEMA
  - the keys for describing the data associated with individual, one-time startup costs (printers, microwaves, etc.)
  
  type: indicates the thing being paid for.
  cost: how much does it cost?
  month: the month the item will be paid for/purchased i.e. the month the cost is incurred.

*/



/*
EMPLOYEE SCHEMA
  - the keys for describing the data associated with individual employee expenses

  title: Employee title/position with the start-up
  yearlySalary: yearly salary of employee
  startDate: date the employee stared/expected to start. For MVP, just using a month

  NTH:
    - using start date of employee, prorate emplyee salary for remaining year expenses
    - use actual date stamps for employee start date
*/



































