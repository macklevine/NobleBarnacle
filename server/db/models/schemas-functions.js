var mongoose = require('mongoose');
var bluebird = require('bluebird');
var Schema = mongoose.Schema;

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
  revenueSources: [{type: Schema.Types.ObjectId, ref: 'RevenueSource'}]
});

var benefitSchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  name: String,
  dollarsPerMonth: Number, //each benefit has either a fixed dollars per month...
  percentageOfPay: Number, //...or a percentage of pay.
  increasePerYear: Number
});

var taxSchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  name: String,
  percentageOfPay: Number,
  upTo: Number,
});

var gAndASchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  category: String,
  name: String,
  description: String,
  money: [String] //JSON strings representing year objects.
});

var employeeSchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  title: String,
  yearlySalary: Number,
  startDate: {
    year: Number, //YYYY
    month: String //'jan', 'feb', etc.
  },
  endDate: {
    year: Number,
    month: String
  }
});


var startupCostSchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  name: String,
  money: String //A JSON string.
});

var debtAndEquitySchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  name: String,
  type: String, //'loan' or 'equity'
  principal: Number,
  startYear: Number,
  startMonth: String,
  interest: Number,
  months: Number,
  payment: Number
});

var revenueSchema = mongoose.Schema({
  _parentModel: {type: Schema.Types.ObjectId, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  productName: String,
  pricePerUnit: Number,
  costOfProductionPerUnit: Number,
  comission: Number,
  monthlyUnitSales: {
    jan: Number,
    feb: Number,
    mar: Number,
    apr: Number,
    may: Number,
    jun: Number,
    jul: Number,
    aug: Number,
    sep: Number,
    oct: Number,
    nov: Number,
    dec: Number
  }
});

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
  // username = req.body.username;
  Model.findOne({username: "mack"})
    .populate('settings.benefits settings.taxes expenses.gAndA expenses.employees expenses.startupCosts debtsAndEquities revenueSources')
    .exec(function(err, model) {
      res.send(200, model);
    });
  //TODO: populate can take a space-delimited list of strings
  //as an argument. Do this and see if it works.
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



































