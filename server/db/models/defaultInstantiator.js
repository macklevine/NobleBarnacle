var mongoose = require('mongoose');
var bluebird = require('bluebird');
var constructor = require('./schemas-functions.js');

var instantiateDefaultModel = function(username){
  console.log("instantiate called");
  //validate the username first.
  //consider this: http://mongoosejs.com/docs/middleware.html

  var defaultModel = new constructor.Model({
    username: username,
    startingCash: 0,
    companyName: "My Company",
  }).save(function (err, model){
    if (err) {return err};

    //TODO: revise startDate, endDate. review schemas...

    var ceo = new constructor.Employee({
      _parentModel: model._id,
      title: "CEO",
      yearlySalary: 150000,
      startDate: {
        year: 2015,
        month: 'jan'
      },
      endDate: {
        year: 2016,
        month: 'dec'
      }
    }).save(function(err, employee){
      model.expenses.employees.push(employee);
      console.log("employee parent id: " + employee._parentModel)
    }).then(function(){

      var cto = new constructor.Employee({
        _parentModel: model._id,
        title: "CTO",
        yearlySalary: 140000,
        startDate: {
          year: 2015,
          month: 'apr'
        },
        endDate: {
          year: 2016,
          month: 'dec'
        }
      }).save(function(err, employee){
        model.expenses.employees.push(employee);
      });

    }).then(function(){

      var frontendDev = new constructor.Employee({
        _parentModel: model._id,
        title: "Frontend Developer",
        yearlySalary: 100000,
        startDate: {
          year: 2016,
          month: 'apr'
        },
        endDate: {
          year: 2016,
          month: 'dec'
        }
      }).save(function(err, employee){
        model.expenses.employees.push(employee);
      })

    }).then(function(){

      var backendDev = new constructor.Employee({
        _parentModel: model._id,
        title: "Backend Developer",
        yearlySalary: 90000,
        startDate: {
          year: 2015,
          month: 'may'
        },
        endDate: {
          year: 2016,
          month: 'dec'
        }
      }).save(function(err, employee){
        model.expenses.employees.push(employee);
      });

    }).then(function(){

      var healthCare = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Health Care',
        dollarsPerMonth: 200,
        increasePerYear: .12
      }).save(function(err, benefit){
        model.settings.benefits.push(benefit);
      });

    }).then(function(){
      
      var dental = new constructor.Benefit({
        _parentModel: model._id,
        name: 'dental',
        dollarsPerMonth: 25,
        increasePerYear: .03
      }).save(function(err, benefit){
        model.settings.benefits.push(benefit);
      });

    }).then(function(){

      var shortTermDisability = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Short Term Disability',
        percentageOfPay: .014,
        increasePerYear: .03
      }).save(function(err, benefit){
        model.settings.benefits.push(benefit);
      });

    }).then(function(){

      var longTermDisability = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Long Term Disability',
        percentageOfPay: .009,
        increasePerYear: .03
      }).save(function(err, benefit){
        model.settings.benefits.push(benefit);
      });

    }).then(function(){
    
      var lifeInsurance = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Life Insurance',
        percentageOfPay: .005,
        increasePerYear: .03
      }).save(function(err, benefit){
        model.settings.benefits.push(benefit);
      });

    }).then(function(){
    
      var stateUnemploymentIns = new constructor.Tax({
        _parentModel: model._id,
        name: 'Statue Unemployment Insurance',
        percentageOfPay: .002,
        upTo: 14400
      }).save(function(err, tax){
        model.settings.taxes.push(tax);
      });

    }).then(function(){

      var employerFICA = new constructor.Tax({
        _parentModel: model._id,
        name: 'Employer FICA',
        percentageOfPay: .062,
        upTo: 100000
      }).save(function(err, tax){
        model.settings.taxes.push(tax);
      });

    }).then(function(){
    
      var medicare = new constructor.Tax({
        _parentModel: model._id,
        name:             'Medicare',
        percentageOfPay:  .0145,
        upTo:             999999
      }).save(function(err, tax){
        model.settings.taxes.push(tax);
      });

    }).then(function(){
    
      var federalUnemploymentIns = new constructor.Tax({
        _parentModel: model._id,
        name:             'Federal Unemployment Insurance',
        percentageOfPay:  .008,
        upTo:             7400  
      }).save(function(err, tax){
        model.settings.taxes.push(tax);
      });

    }).then(function(){

      var workersComp = new constructor.Tax({
        _parentModel: model._id,
        name:             'Worker\'s Compensation',
        percentageOfPay:  .0032,
        upTo:             999999
      }).save(function(err, tax){
        model.settings.taxes.push(tax);
      });

    }).then(function(){
    
      var radioAd = new constructor.GAndA({
        _parentModel: model._id,
        category: 'Marketing',
        name: 'Radio Ad',
        description: 'We plan to purchase a radio ad to increase awareness',
        money: ['{year: 2015, months: {"jan": 2000, "feb": 1000, "apr": 1000, "jul": 1000, "aug": 1000, "sep": 1000}}'],
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var brandingDesign = new constructor.GAndA({
        _parentModel: model._id,
        money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "apr": 2000}}'],//need a string
        category: 'Marketing',
        name: 'Branding Design',
        description: 'Payment for logo design'
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var tradeShow = new constructor.GAndA({
        _parentModel: model._id,
        money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "apr": 2000}}'],//need a string
        category: 'Marketing',
        name: 'Trade Show',
        description: 'Traveling to a trade show in Las Vegas'
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var rent = new constructor.GAndA({
        _parentModel: model._id,
        category: "Facilities and Equipment",
        name: "Rent",
        description: 'Rent for office space',
        money: ['{year: 2015, months: {"jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000}}', '{year: 2016, months: {"jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){

      var cellPhones = new constructor.GAndA({
        _parentModel: model._id,
        category: 'Facilities and Equipment',
        name: 'Cell Phones',
        description: 'communication costs for the team',
        money: ['{year: 2015, months: {"jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300}}', '{year: 2016, months: {"jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var cleaning = new constructor.GAndA({
        _parentModel: model._id,
        category: "Facilities and Equipment",
        name: "Cleaning",
        description: "Cleaning service for the office space",
        money: ['{year: 2015, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}', '{year: 2016, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var insurance = new constructor.GAndA({
        _parentModel: model._id,
        category: "Insurance",
        name: "General Liability",
        description: "General liability insurance",
        money: ['{year: 2015, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}', '{year: 2016, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var propertyInsurance = new constructor.GAndA({
        _parentModel: model._id,
        category: "Insurance",
        name: 'Property Insurance',
        description: 'Property Insurance',
        money: ['{year: 2015, months: {"jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200}}', '{year: 2016, months: {"jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){
    
      var computers = new constructor.GAndA({
        _parentModel: model._id,
        category: "Supplies",
        name: "Computers",
        description: "Laptops for new employees",
        money: ['{year: 2015, months:{"jan": 2000, "feb": 2000, "apr": 2000}}', '{year: 2016, months:{"jan": 2000, "feb": 2000, "apr": 2000}}']//need a string
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){

      var servers = new constructor.GAndA({
        _parentModel: model._id,
        category: "Supplies",
        name: "Servers",
        description: "Server stack for deployment",
        money: ['{year: 2015, months:{"jan": 2000, "feb": 2000, "apr": 2000}}']
      }).save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
      });

    }).then(function(){

      var purchaseEquipment = new constructor.StartupCost({
        _parentModel: model._id,
        name: "Purchase Equipment",
        money: '{2015: {"feb": 10000}}'
      }).save(function(err, cost){
        model.expenses.startupCosts.push(cost);
      });

    }).then(function(){

      var purchaseEquipment2 = new constructor.StartupCost({
        _parentModel: model._id,
        name: "Purchase Equipment",
        money: '{2016: {"jun": 100000}}'
      }).save(function(err, cost){
        model.expenses.startupCosts.push(cost);
      })

    }).then(function(){

      var loan1 = new constructor.DebtAndEquity({
        _parentModel: model._id,
        years: [2015],
        name: "Loan 1",
        type: "loan",
        principal: 160000,
        startYear: 2015
      }).save(function(err, debt){
        model.debtsAndEquities.push(debt);
      });

    }).then(function(){

      var product1 = new constructor.Product({
        _parendModel: model._id,
        years: [2015],
        productName: "Proudct 1",
        pricePerUnit: 10,
        costOfProductionPerUnit: 3,
        commision: .1,
        monthlyUnitSales: {
          jan: 100,
          feb: 150,
          mar: 200,
          apr: 250,
          may: 300,
          jun: 350,
          jul: 400,
          aug: 450,
          sep: 500,
          oct: 550,
          nov: 600,
          dec: 650
        }
      }).save(function(err, product){
        model.revenueSources.push(product);
        model.save();
      });
    });
  });
}

exports.instantiateDefaultModel = instantiateDefaultModel;





