var mongoose = require('mongoose');
var bluebird = require('bluebird');

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
    gAndA: [{type: Schema.TypesObjectId, ref: 'GAndA'}],
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
  //Trevor wants to be able to fetch employees by an ID value;
  //this will not be the same as the big hash string Mongo automatically
  //assigns to the invisible _id field.
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  title: String,
  yearlySalary: Number,
  startDate: String
});


var startupCostSchema = mongoose.Schema({
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  type: String,
  cost: Number,
  month: String
});

var debtAndEquitySchema = mongoose.Schema({ //need to find an actual example from Trevor's data.
  _parentModel: {type: String, ref: "Model"},
  years: [Number], //an array of numbers representing eaach year.
  name: String,
  type: String, //'loan' or 'equity'
  principle: Number,
  startMonth: String,
  months: String,//maybe an array of strings?
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
    startingCash: 0,
  }).save(function (err){
    if (err) {return err};

    var healthCare = new Benefit({
      _parentModel: defaultModel.id,
      name: 'Health Care',
      dollarsPerMonth: -200,
      increasePerYear: .12
    });

    healthCare.save();

    var dental = new Benefit({
      _parentModel: defaultModel.id,
      name: 'dental',
      dollarsPerMonth: -25,
      increasePerYear: .03
    });

    dental.save();

    var shortTermDisability = new Benefit({
      _parentModel: defaultModel.id,
      name: 'Short Term Disability',
      percentageOfPay: .014,
      increasePerYear: .03
    });

    shortTermDisability.save();

    var longTermDisability = new Benefit({
      _parentModel: defaultModel.id,
      name: 'Long Term Disability',
      percentageOfPay: .009,
      increasePerYear: .03
    });
    
    longTermDisability.save();

    var lifeInsurance = new Benefit({
      _parentModel: defaultModel.id,
      name: 'Life Insurance',
      percentageOfPay: .005,
      increasePerYear: .03
    });

    lifeInsurance.save();
    //done with saved benefits.

    //start taxes for the default model
    var stateUnemploymentIns = new Tax({
      _parentModel: defaultModel.id,
      name: 'Statue Unemployment Insurance',
      percentageOfPay: .002,
      upTo: 14400
    });

    stateUnemploymentIns.save();

    var employerFICA = new Tax({
      _parentModel: defaultModel.id,
      name: 'Employer FICA',
      percentageOfPay: .062,
      upTo: 100000
    });

    employerFICA.save(),

    var medicare = new Tax({
      _parentModel: defaultModel.id,
      name:             'Medicare',
      percentageOfPay:  .0145,
      upTo:             999999
    });

    medicare.save();

    var federalUnemploymentIns = new Tax({
      _parentModel: defaultModel.id,
      name:             'Federal Unemployment Insurance',
      percentageOfPay:  .008,
      upTo:             7400  
    });


    federalUnemploymentIns.save();

    var workersComp = new Tax({
      _parentModel: defaultModel.id,
      name:             'Worker\'s Compensation',
      percentageOfPay:  .0032,
      upTo:             999999
    });

    workersComp.save();

    var radioAd = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Radio Ad',
      description: 'We plan to purchase a radio ad to increase awareness',
      cost: 2000,
      money: ["jan", "feb", "apr", "jul", "aug", "sep"]
    });

    radioAd.save();

    var brandingDesign = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Branding Design',
      description: 'Payment for logo design',
      cost: 200,
      money: ["aug"]
    });

    brandingDesign.save(); //maybe consider turning these into promises w/ bluebird.

    var tradeShow = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Trade Show',
      description: 'Traveling to a trade show in Las Vegas',
      cost: 3000,
      money: ["dec"]
    });

    tradeShow.save();

    var cellPhones = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Facilities and Equipment',
      name: 'Cell Phones',
      description: 'communication costs for the team',
      cost: 500,
      money: ["apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });

    cellPhones.save();

    var rent = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Facilities and Equipment",
      name: "Rent",
      description: 'Rent for office space',
      cost: 2500,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });

    rent.save();

    var cleaning = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Facilities and Equipment",
      name: "Cleaning",
      description: "Cleaning service for the office space",
      cost: 300,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });

    cleaning.save();

    var insurance = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Insurance",
      name: "General Liability",
      description: "General liability insurance",
      cost: 400,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });

    insurance.save();

    var propertyInsurance = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Insurance",
      name: 'Property Insurance',
      description: 'Property Insurance',
      cost: 300,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });

    propertyInsurance.save();

  //     _parentModel: {type: String, ref: "Model"},
  // years: [Number], //an array of numbers representing each year.
  // category: String,
  // name: String,
  // description: String,
  // cost: Number,
  // months: [String] //an array of strings.

    //the initial employee on the default model
    var CEO = new Employee({
      _parentModel: defaultModel.id,
      years: [2015], 
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



































