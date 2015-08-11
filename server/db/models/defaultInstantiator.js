var mongoose = require('mongoose');
var bluebird = require('bluebird');
var constructor = require('./schemas-functions.js');

var instantiateDefaultModel = function(username){
  //validate the username first.
  //consider this: http://mongoosejs.com/docs/middleware.html

  var defaultModel = new constructor.Model({
    username: username,
    startingCash: 0,
    companyName: "My Company",
  }).save(function (err, model){
    if (err) {return err};

    console.log("shit got saved!");

    var ceo = new constructor.Employee({
      _parentModel: model._id,
      years: [2015], 
      title: "CEO",
      yearlySalary: 150000,
      startDate: 'feb'
    }).save(function(err, employee){
      console.log(model.expenses["employees"].push(employee));
      model.save();
      console.log("employee should be saved");
      console.log(employee);
    });

    var healthCare = new constructor.Benefit({
      _parentModel: model._id,
      name: 'Health Care',
      dollarsPerMonth: 200,
      increasePerYear: .12
    }).save(function(err, benefit){
      model.settings.benefits.push(benefit);
      model.save();
    });
    
    var dental = new constructor.Benefit({
      _parentModel: model._id,
      name: 'dental',
      dollarsPerMonth: 25,
      increasePerYear: .03
    }).save(function(err, benefit){
      model.settings.benefits.push(benefit);
      model.save();
    });

    var shortTermDisability = new constructor.Benefit({
      _parentModel: model._id,
      name: 'Short Term Disability',
      percentageOfPay: .014,
      increasePerYear: .03
    }).save(function(err, benefit){
      model.settings.benefits.push(benefit);
      model.save();
    });

    var longTermDisability = new constructor.Benefit({
      _parentModel: model._id,
      name: 'Long Term Disability',
      percentageOfPay: .009,
      increasePerYear: .03
    }).save(function(err, benefit){
      model.settings.benefits.push(benefit);
      model.save();
    });
    
    var lifeInsurance = new constructor.Benefit({
      _parentModel: model._id,
      name: 'Life Insurance',
      percentageOfPay: .005,
      increasePerYear: .03
    }).save(function(err, benefit){
      model.settings.benefits.push(benefit);
      model.save();
    });
    
    var stateUnemploymentIns = new constructor.Tax({
      _parentModel: model._id,
      name: 'Statue Unemployment Insurance',
      percentageOfPay: .002,
      upTo: 14400
    }).save(function(err, tax){
      model.settings.taxes.push(tax);
      model.save();
    });

    var employerFICA = new constructor.Tax({
      _parentModel: model._id,
      name: 'Employer FICA',
      percentageOfPay: .062,
      upTo: 100000
    }).save(function(err, tax){
      model.settings.taxes.push(tax);
      model.save();
    });
    
    var medicare = new constructor.Tax({
      _parentModel: model._id,
      name:             'Medicare',
      percentageOfPay:  .0145,
      upTo:             999999
    }).save(function(err, tax){
      model.settings.taxes.push(tax);
      model.save();
    });
    
    var federalUnemploymentIns = new constructor.Tax({
      _parentModel: model._id,
      name:             'Federal Unemployment Insurance',
      percentageOfPay:  .008,
      upTo:             7400  
    }).save(function(err, tax){
      model.settings.taxes.push(tax);
      model.save();
    });

    var workersComp = new constructor.Tax({
      _parentModel: model._id,
      name:             'Worker\'s Compensation',
      percentageOfPay:  .0032,
      upTo:             999999
    }).save(function(err, tax){
      model.settings.taxes.push(tax);
      model.save();
    });
    
    var radioAd = new constructor.GAndA({
      _parentModel: model._id,
      category: 'Marketing',
      name: 'Radio Ad',
      description: 'We plan to purchase a radio ad to increase awareness',
      money: ['{year: 2015, months: {"jan": 2000, "feb": 1000, "apr": 1000, "jul": 1000, "aug": 1000, "sep": 1000}}'],
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var brandingDesign = new constructor.GAndA({
      _parentModel: model._id,
      money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "apr": 2000}}'],//need a string
      category: 'Marketing',
      name: 'Branding Design',
      description: 'Payment for logo design'
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var tradeShow = new constructor.GAndA({
      _parentModel: model._id,
      money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "apr": 2000}}'],//need a string
      category: 'Marketing',
      name: 'Trade Show',
      description: 'Traveling to a trade show in Las Vegas'
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var rent = new constructor.GAndA({
      _parentModel: model._id,
      category: "Facilities and Equipment",
      name: "Rent",
      description: 'Rent for office space',
      money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000}}', '{year: 2016, months: {"jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000}}']//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });

    var cellPhones = new constructor.GAndA({
      _parentModel: model._id,
      category: 'Facilities and Equipment',
      name: 'Cell Phones',
      description: 'communication costs for the team',
      money: ['{year: 2015, months: {"jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300}}', '{year: 2016, months: {"jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300}}']//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var cleaning = new GAndA({
      _parentModel: model._id,
      category: "Facilities and Equipment",
      name: "Cleaning",
      description: "Cleaning service for the office space",
      money: []//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var insurance = new constructor.GAndA({
      _parentModel: model._id,
      category: "Insurance",
      name: "General Liability",
      description: "General liability insurance",
      money: []//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var propertyInsurance = new constructor.GAndA({
      _parentModel: model._id,
      money: [],//need a string
      category: "Insurance",
      name: 'Property Insurance',
      description: 'Property Insurance'
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });
    
    var computers = new constructor.GAndA({
      _parentModel: model._id,
      category: "Supplies",
      name: "Computers",
      description: "Laptops for new employees",
      money: []//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });

    var servers = new constructor.GAndA({
      _parentModel: model._id,
      category: "Supplies",
      name: "Servers",
      description: "Server stack for deployment",
      money: []//need a string
    }).save(function(err, ganda){
      model.expenses.gAndA.push(ganda);
      model.save();
    });

    var purchaseEquipment = new constructor.StartupCost({
      _parentModel: model._id,
      name: "Purchase Equipment",
      money: []//need a string
    }).save(function(err, cost){
      model.expenses.startupCosts.push(cost);
      model.save();
    });

    var purchaseEquipment2 = new constructor.StartupCost({
      _parentModel: model._id,
      name: "Purchase Equipment",
      money: []
    }).save(function(err, cost){
      model.expenses.startupCosts.push(cost);
      model.save();
    })

    var loan1 = new constructor.DebtAndEquity({
      _parentModel: model._id,
      years: [2015],
      name: "Loan 1",
      type: "loan",
      principal: 160000,
      startMonth: 'jan',
      startYear: 2015
    }).save(function(err, debt){
      model.debtsAndEquities.push(debt);
      model.save();
    });

  });
}

exports.instantiateDefaultModel = instantiateDefaultModel;





