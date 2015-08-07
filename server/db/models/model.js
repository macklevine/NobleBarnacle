var mongoose = require('mongoose');
var bluebird = require('bluebird');



// Model 
//   -username
//   -expenses 
//   -debtAndEquity
//   -revenue




var modelSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  expenses: 
})




var employeeSchema = mongoose.Schema({
  title: {type: String},
  yearlySalary: {type: Number},
  startDate: {type: String}
});


var startupCostSchema = mongoose.Schema({
  type: {type: String},
  cost: {type: Number},
  month: {type: String}
});

/*
STARTUP COST SCHEMA
  - the keys for describing the data associated with individual, one-time startup costs (printers, microwaves, etc.)
  
  type: indicates the thing being paid for.
  cost: how much does it cost?
  month: the month the item will be paid for/purchased i.e. the month the cost is incurred.

*/


//add constructor functions...

var StartupCost = mongoose.model("StartupCost", startupCostSchema);
var Employee = mongoose.model("Employee", employeeSchema);

var expenseSchema = mongoose.Schema({
  expense: {type: String},
});

var gAndAExpenseSchema = mongoose.Schema({
  items: {type: Array}
});

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



































