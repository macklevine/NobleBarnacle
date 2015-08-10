var mongoose = require('mongoose');
var bluebird = require('bluebird');
var Schema = mongoose.Schema;

//NOTES:

/* the schema differs from Trevor's spec in the following
ways:

-"Years" is no longer a top-level key in the model object; it is now a property
on gAndA objects, employee objects, startup cost objects, debt and equity objects,
and revenue source objects. This is because the nesting of properties was getting
out of control. You can find the key 'years' on each of these items as an array of numbers.

-The same is also true of gAndA expenses. They're no longer nested like they were
in Trevor's example JSON object--they're individual objects with a "category" property.

*/
var modelSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true }},
  companyName: String,
  startingCash: 0,
  settings: {
    benefits: [{type: Schema.Types.ObjectId, ref: 'Benefit'}],
    taxes: [{type: Schema.Types.ObjectId, ref: 'Tax'}]
  },
  //wrap expenses in a key with array value of objects called 'years'
  expenses: {
    gAndA: [{type: Schema.Types.ObjectId, ref: 'GAndA'}],
    employees: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    startupCosts: [{type: Schema.Types.ObjectId, ref: 'StartupCost'}]
  },
  debtsAndEquities: [{type: Schema.Types.ObjectId, ref: 'DebtAndEquity'}],
  revenueSources: [{type: Schema.Types.ObjectId, ref: "RevenueSource"}]
});

var benefitSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  name: String,
  dollarsPerMonth: Number, //each benefit has either a fixed dollars per month...
  percentageOfPay: Number, //...or a percentage of pay.
  increasePerYear: Number
});

var taxSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  name: String,
  percentageOfPay: Number,
  upTo: Number,
});

var gAndASchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing each year.
  category: String,
  name: String,
  description: String,
  cost: Number,
  months: [String] //an array of strings.
});

var employeeSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  title: String,
  yearlySalary: Number,
  startDate: String
});


var startupCostSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  name: String,
  cost: Number,
  month: String
});

var debtAndEquitySchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  name: String,
  type: String, //'loan' or 'equity'
  principal: Number,
  startMonth: String,
  months: String, //maybe an array of strings?
  interest: Number
});

var revenueSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
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
var Benefit = mongoose.model("Benefit", benefitSchema);
var Tax = mongoose.model("Tax", taxSchema);
var GAndA = mongoose.model("GAndA", gAndASchema);
var Employee = mongoose.model("Employee", employeeSchema);
var StartupCost = mongoose.model("StartupCost", startupCostSchema);
var DebtAndEquity = mongoose.model("DebtAndEquity", debtAndEquitySchema);
var RevenueSource = mongoose.model("RevenueSource", revenueSchema);
var Model = mongoose.model("Model", modelSchema);

//Functions to add and delete items from an existing financial model are declared below (scaffolding)

var getModel = function(req, res){
  username = req.body.username;
  Model.findOne({username: username}).exec(function(err, model) {
    res.send(200, model);
  });
};

//Trevor's requested functions are below:

exports.Benefit = Benefit;
exports.Tax = Tax;
exports.GAndA = GAndA;
exports.Employee = Employee;
exports.StartupCost = StartupCost;
exports.DebtAndEquity = DebtAndEquity;
exports.RevenueSource = RevenueSource;
exports.Model = Model;

exports.getModel = getModel;


//add more of Trevor's functions:


//the function for creating each user's default model is below.




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



































