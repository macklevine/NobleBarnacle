var mongoose = require('mongoose');
var bluebird = require('bluebird');
var constructor = require('./schemas-functions.js');

//the function below returns the default model.

var instantiateDefaultModel = function(username){
  // console.log("instantiate called");

  var defaultModel = new constructor.Model({
    username: username,
    startingCash: 0,
    companyName: "My Company",
  }).save(function (err, model){
    if (err) {return err};

    //in the callback for saving the default model,
    //we instantiate all of the employees, expenses,
    //etc. and push their foreign keys to the model.

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
    }).then(function(){

      // console.log("CTO started");

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
      });

      return cto.save(function(err, employee){
        model.expenses.employees.push(employee);
        // console.log("CTO pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("dev started")

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
      });

      return frontendDev.save(function(err, employee){
        model.expenses.employees.push(employee);
        // console.log("dev pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("backend dev started");

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
      });

      return backendDev.save(function(err, employee){
        model.expenses.employees.push(employee);
        // console.log("backend dev pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("healthcare started");

      var healthCare = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Health Care',
        dollarsPerMonth: 200,
        increasePerYear: .12
      });

      return healthCare.save(function(err, benefit){
        model.settings.benefits.push(benefit);
        // console.log("healthcare pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("dental started");
      
      var dental = new constructor.Benefit({
        _parentModel: model._id,
        name: 'dental',
        dollarsPerMonth: 25,
        increasePerYear: .03
      });

      return dental.save(function(err, benefit){
        model.settings.benefits.push(benefit);
        // console.log("dental pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("disability started");

      var shortTermDisability = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Short Term Disability',
        percentageOfPay: .014,
        increasePerYear: .03
      });

      return shortTermDisability.save(function(err, benefit){
        model.settings.benefits.push(benefit);
        // console.log("disability pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("longterm disability started");

      var longTermDisability = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Long Term Disability',
        percentageOfPay: .009,
        increasePerYear: .03
      });

      return longTermDisability.save(function(err, benefit){
        model.settings.benefits.push(benefit);
        // console.log("longterm disability pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("life insurance started");
    
      var lifeInsurance = new constructor.Benefit({
        _parentModel: model._id,
        name: 'Life Insurance',
        percentageOfPay: .005,
        increasePerYear: .03
      });

      return lifeInsurance.save(function(err, benefit){
        model.settings.benefits.push(benefit);
        // console.log("life insurance pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("unemployment started");
    
      var stateUnemploymentIns = new constructor.Tax({
        _parentModel: model._id,
        name: 'Statue Unemployment Insurance',
        percentageOfPay: .002,
        upTo: 14400
      });

      return stateUnemploymentIns.save(function(err, tax){
        model.settings.taxes.push(tax);
        // console.log("unemployment pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("FICA started");

      var employerFICA = new constructor.Tax({
        _parentModel: model._id,
        name: 'Employer FICA',
        percentageOfPay: .062,
        upTo: 100000
      });

      return employerFICA.save(function(err, tax){
        model.settings.taxes.push(tax);
        // console.log("FICA pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("medicare started");
    
      var medicare = new constructor.Tax({
        _parentModel: model._id,
        name:             'Medicare',
        percentageOfPay:  .0145,
        upTo:             999999
      });

      return medicare.save(function(err, tax){
        model.settings.taxes.push(tax);
        // console.log("medicare pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("fed unemp started");
    
      var federalUnemploymentIns = new constructor.Tax({
        _parentModel: model._id,
        name:             'Federal Unemployment Insurance',
        percentageOfPay:  .008,
        upTo:             7400  
      });

      return federalUnemploymentIns.save(function(err, tax){
        model.settings.taxes.push(tax);
        // console.log("fed unemp pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("worker's comp started");

      var workersComp = new constructor.Tax({
        _parentModel: model._id,
        name:             'Workers Compensation',
        percentageOfPay:  .0032,
        upTo:             999999
      });

      return workersComp.save(function(err, tax){
        model.settings.taxes.push(tax);
        // console.log("worker's comp pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("marketing started");
    
      var radioAd = new constructor.GAndA({
        _parentModel: model._id,
        category: 'Marketing',
        name: 'Radio Ad',
        description: 'We plan to purchase a radio ad to increase awareness',
        money: [{year: 2015, months: {"jan": 2000, "feb": 1000, "apr": 1000, "jul": 1000, "aug": 1000, "sep": 1000}}],
      });

      return radioAd.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("radio ad pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("branding started");
    
      var brandingDesign = new constructor.GAndA({
        _parentModel: model._id,
        money: [{year: 2015, months: {"jan": 2000, "feb": 2000, "apr": 2000}}],
        category: 'Marketing',
        name: 'Branding Design',
        description: 'Payment for logo design'
      });

      return brandingDesign.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("branding pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("tradeshow started");
    
      var tradeShow = new constructor.GAndA({
        _parentModel: model._id,
        money: [{year: 2015, months: {"jan": 2000, "feb": 2000, "apr":2000}}],
        category: 'Marketing',   
        name: 'Trade Show',
        description: 'Traveling to a trade show in Las Vegas'
      });

      return tradeShow.save(function(err, ganda){   
        model.expenses.gAndA.push(ganda);
        // console.log("tradeshow pushed");
        return model.save(); 
      });

    }).then(function(){

      // console.log("rent started");
    
      var rent = new constructor.GAndA({   _parentModel: model._id, 
        category: "Facilities and Equipment",   
        name:"Rent", 
      description: 'Rent for office space',   
      money: [{year: 2015, months: {"jan": 2000, "feb": 2000, "mar":2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000,"dec": 2000}}, {year: 2016, months: {"jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000,"jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000}}]
      });

      return rent.save(function(err, ganda){ 
        model.expenses.gAndA.push(ganda);
        // console.log("rent pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("cell phones started");

      var cellPhones = new constructor.GAndA({   _parentModel:
      model._id,   
      category: 'Facilities and Equipment',   
      name: 'Cell Phones',   
      description: 'communication costs for the team',
      money: [{year: 2015, months: {"jan": 300, "feb": 300, "mar":300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300,"sep": 300, "oct": 300, "nov": 300, "dec": 300}}, {year: 2016,months: {"jan": 300, "feb": 300, "mar": 300, "apr": 300, "may":300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300,"nov": 300, "dec": 300}}] 
      });

      return cellPhones.save(function(err, ganda){   
        model.expenses.gAndA.push(ganda);
        // console.log("cell phone pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("cleaning started");
    
      var cleaning = new constructor.GAndA({
        _parentModel: model._id,
        category: "Facilities and Equipment",
        name: "Cleaning",
        description: "Cleaning service for the office space",
        money: [{year: 2015, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}, {year: 2016, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}]
      });

      return cleaning.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("cleaning pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("general liability started");
    
      var insurance = new constructor.GAndA({
        _parentModel: model._id,
        category: "Insurance",
        name: "General Liability",
        description: "General liability insurance",
        money: [{year: 2015, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}, {year: 2016, months: {"jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150}}]//need a string
      });

      return insurance.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("liability pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("property insurance started");
    
      var propertyInsurance = new constructor.GAndA({
        _parentModel: model._id,
        category: "Insurance",
        name: 'Property Insurance',
        description: 'Property Insurance',
        money: [{year: 2015, months: {"jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200}}, {year: 2016, months: {"jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200}}]//need a string
      });

      return propertyInsurance.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("property insurance pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("computer started");
    
      var computers = new constructor.GAndA({
        _parentModel: model._id,
        category: "Supplies",
        name: "Computers",
        description: "Laptops for new employees",
        money: [{year: 2015, months:{"jan": 2000, "feb": 2000, "apr": 2000}}, {year: 2016, months:{"jan": 2000, "feb": 2000, "apr": 2000}}]//need a string
      });

      return computers.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("laptops pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("servers started");

      var servers = new constructor.GAndA({
        _parentModel: model._id,
        category: "Supplies",
        name: "Servers",
        description: "Server stack for deployment",
        money: [{year: 2015, months:{"jan": 2000, "feb": 2000, "apr": 2000}}]
      });

      return servers.save(function(err, ganda){
        model.expenses.gAndA.push(ganda);
        // console.log("servers pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("equipment started");

      var purchaseEquipment = new constructor.StartupCost({
        _parentModel: model._id,
        name: "Purchase Equipment",
        money: '{2015: {"feb": 10000}}'
      });

      return purchaseEquipment.save(function(err, cost){
        model.expenses.startupCosts.push(cost);
        // console.log("equipment pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("equipment2 started");

      var purchaseEquipment2 = new constructor.StartupCost({
        _parentModel: model._id,
        name: "Purchase Equipment",
        money: '{2016: {"jun": 100000}}'
      });

      return purchaseEquipment2.save(function(err, cost){
        model.expenses.startupCosts.push(cost);
        // console.log("equipment2 pushed");
        return model.save();
      })

    }).then(function(){

      // console.log("loan1 started");

      var loan1 = new constructor.DebtAndEquity({
        _parentModel: model._id,
        years: [2015],
        name: "Loan 1",
        type: "loan",
        principal: 160000,
        startYear: 2015
      });

      return loan1.save(function(err, debt){
        model.debtsAndEquities.push(debt);
        // console.log("loan 1 pushed");
        return model.save();
      });

    }).then(function(){

      // console.log("product 1 started");

      var product1 = new constructor.Product({
        _parentModel: model._id,
        productName: "Product 1",
        pricePerUnit: 10,
        costOfProductionPerUnit: 3,
        commission: 0.1,
        years: [2015, 2016],
        sales: {
          '2015': {
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
          },
          '2016': {
            jan: 700,
            feb: 750,
            mar: 800,
            apr: 850,
            may: 900,
            jun: 950,
            jul: 1000,
            aug: 1050,
            sep: 1100,
            oct: 1150,
            nov: 1200,
            dec: 1250
          }
        }
      });

      return product1.save(function(err, product){
        model.products.push(product);
        // console.log("product 1 pushed");
        // console.log("model saved");
        return model.save();
      });
    });
  });
}

exports.instantiateDefaultModel = instantiateDefaultModel;





