var mongoose = require('mongoose');
var bluebird = require('bluebird');
var constructor = require('./schemas-functions.js');

var instantiateDefaultModel = function(username){
  //validate the username first.

  var defaultModel = new constructor.Model({
    username: username,
    startingCash: 0,
  }).save(function (err){
    if (err) {return err};

    var healthCare = new constructor.Benefit({
      _parentModel: defaultModel.id,
      name: 'Health Care',
      dollarsPerMonth: -200,
      increasePerYear: .12
    });
    
    var dental = new constructor.Benefit({
      _parentModel: defaultModel.id,
      name: 'dental',
      dollarsPerMonth: -25,
      increasePerYear: .03
    });

    var shortTermDisability = new constructor.Benefit({
      _parentModel: defaultModel.id,
      name: 'Short Term Disability',
      percentageOfPay: .014,
      increasePerYear: .03
    });

    var longTermDisability = new constructor.Benefit({
      _parentModel: defaultModel.id,
      name: 'Long Term Disability',
      percentageOfPay: .009,
      increasePerYear: .03
    });
    
    var lifeInsurance = new constructor.Benefit({
      _parentModel: defaultModel.id,
      name: 'Life Insurance',
      percentageOfPay: .005,
      increasePerYear: .03
    });
    
    var stateUnemploymentIns = new constructor.Tax({
      _parentModel: defaultModel.id,
      name: 'Statue Unemployment Insurance',
      percentageOfPay: .002,
      upTo: 14400
    });

    var employerFICA = new constructor.Tax({
      _parentModel: defaultModel.id,
      name: 'Employer FICA',
      percentageOfPay: .062,
      upTo: 100000
    });
    
    var medicare = new constructor.Tax({
      _parentModel: defaultModel.id,
      name:             'Medicare',
      percentageOfPay:  .0145,
      upTo:             999999
    });
    
    var federalUnemploymentIns = new constructor.Tax({
      _parentModel: defaultModel.id,
      name:             'Federal Unemployment Insurance',
      percentageOfPay:  .008,
      upTo:             7400  
    });

    var workersComp = new constructor.Tax({
      _parentModel: defaultModel.id,
      name:             'Worker\'s Compensation',
      percentageOfPay:  .0032,
      upTo:             999999
    });
    
    var radioAd = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Radio Ad',
      description: 'We plan to purchase a radio ad to increase awareness',
      cost: 2000,
      money: ["jan", "feb", "apr", "jul", "aug", "sep"]
    });
    
    var brandingDesign = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Branding Design',
      description: 'Payment for logo design',
      cost: 200,
      money: ["aug"]
    });
    
    var tradeShow = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Marketing',
      name: 'Trade Show',
      description: 'Traveling to a trade show in Las Vegas',
      cost: 3000,
      money: ["dec"]
    });
    
    var cellPhones = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: 'Facilities and Equipment',
      name: 'Cell Phones',
      description: 'communication costs for the team',
      cost: 500,
      money: ["apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });
    
    var rent = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Facilities and Equipment",
      name: "Rent",
      description: 'Rent for office space',
      cost: 2500,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });
    
    var cleaning = new GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Facilities and Equipment",
      name: "Cleaning",
      description: "Cleaning service for the office space",
      cost: 300,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });
    
    var insurance = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Insurance",
      name: "General Liability",
      description: "General liability insurance",
      cost: 400,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });
    
    var propertyInsurance = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Insurance",
      name: 'Property Insurance',
      description: 'Property Insurance',
      cost: 300,
      money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    });
    
    var computers = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Supplies",
      name: "Computers",
      description: "Laptops for new employees",
      cost: 4000,
      money: ["sep"]
    });

    var servers = new constructor.GAndA({
      _parentModel: defaultModel.id,
      years: [2015],
      category: "Supplies",
      name: "Servers",
      description: "Server stack for deployment",
      cost: 3000,
      money: ["dec"]
    });
    
    var CEO = new constructor.Employee({
      _parentModel: defaultModel.id,
      years: [2015], 
      title: "CEO",
      yearlySalary: 150000,
      startDate: 'feb'
    });

    var purchaseEquipment = new constructor.StartupCost({
      _parentModel: defaultModel.id,
      years: [2015],
      name: "Purchase Equipment",
      cost: 10000,
      month: ['feb']
      //look up property...
    });

    var loan1 = new constructor.DebtAndEquity({
      _parentModel: defaultModel.id,
      years: [2015],
      name: "Loan 1",
      type: "loan",
      principal: 160000,
      startYear: 2015,
    });

    healthCare.save();
    dental.save();
    shortTermDisability.save();
    longTermDisability.save();
    lifeInsurance.save();
    stateUnemploymentIns.save();
    employerFICA.save(),
    medicare.save();
    federalUnemploymentIns.save();
    workersComp.save();
    radioAd.save();
    brandingDesign.save(); //maybe consider turning these into promises w/ bluebird.
    tradeShow.save();
    cellPhones.save();
    rent.save();
    cleaning.save();
    insurance.save();
    propertyInsurance.save();
    computers.save();
    servers.save();
    CEO.save();
    purchaseEquipment.save();
    loan1.save();

  //TODO: finish loans

  //     _parentModel: {type: String, ref: "Model"},
  // years: [Number], //an array of numbers representing eaach year.
  // name: String,
  // type: String, //'loan' or 'equity'
  // principle: Number,
  // startMonth: String,
  // months: String,//maybe an array of strings?
  // interest: Number

    //TODO: populate the rest of this constructor function with shit
    //from dataFromServerToClient.js.


  })
  return defaultModel;  //do so ONLY after all the other objects have been saved.
}

exports.instantiateDefaultModel = instantiateDefaultModel;





