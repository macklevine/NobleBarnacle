//imitation general data that would be returned from the db
var model = {
    username: "mack",
    companyName: "My Company",
    startingCash: 0,
    settings: {
      benefits: [
        {
          name: 'Health Care',
          dollarsPerMonth: 200,
          increasePerYear: .12
        },
        {
          name: 'dental',
          dollarsPerMonth: 25,
          increasePerYear: .03
        },
        {
          name: 'Short Term Disability',
          percentageOfPay: .014,
          increasePerYear: .03
        },
        {
          name: 'Long Term Disability',
          percentageOfPay: .009,
          increasePerYear: .03
        },
        {
          name: 'Life Insurance',
          percentageOfPay: .005,
          increasePerYear: .03
        }
      ],
      taxes: [
        {
          name: 'Statue Unemployment Insurance',
          percentageOfPay: .002,
          upTo: 14400
        },
        {
          name: 'Employer FICA',
          percentageOfPay: .062,
          upTo: 100000
        },
        {
          name:             'Medicare',
          percentageOfPay:  .0145,
          upTo:             999999
        },
        {
          name:             'Federal Unemployment Insurance',
          percentageOfPay:  .008,
          upTo:             7400  
        },
        {
          name:             'Worker\'s Compensation',
          percentageOfPay:  .0032,
          upTo:             999999
        },
      ]
    },
    //wrap expenses in a key with array value of objects called 'years'
    expenses: {
      gAndA: [
        {
          category: 'Marketing',
          name: 'Radio Ad',
          description: 'We plan to purchase a radio ad to increase awareness',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 1000, "apr": 1000, "jul": 1000, "aug": 1000, "sep": 1000
              }
            }
          ]
        },
        {
          category: 'Marketing',
          name: 'Branding Design',
          description: 'Payment for logo design',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: 'Marketing',
          name: 'Trade Show',
          description: 'Traveling to a trade show in Las Vegas',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: 'Facilities and Equipment',
          name: 'Rent',
          description: 'communication costs for the team',
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000
              }
            },
            {
              year: 2016,
              months: {
                "jan": 2000, "feb": 2000, "mar": 2000, "apr": 2000, "may": 2000, "jun": 2000, "jul": 2000, "aug": 2000, "sep": 2000, "oct": 2000, "nov": 2000, "dec": 2000
              }
            }
          ]
        },
        {
          category: "Facilities and Equipment",
          name: "Cell Phone",
          description: 'Rent for office space',
          money: [
            {
              year: 2015,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            },
            {
              year: 2016,
              months: {
                "jan": 300, "feb": 300, "mar": 300, "apr": 300, "may": 300, "jun": 300, "jul": 300, "aug": 300, "sep": 300, "oct": 300, "nov": 300, "dec": 300
              }
            }
          ]
        },
        {
          category: "Facilities and Equipment",
          name: "Cleaning",
          description: "Cleaning service for the office space",
          money: [
            {
              year: 2015,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            },
            {
              year: 2016,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            }
          ]
        },
        {
          category: "Insurance",
          name: "General Liability",
          description: "General liability insurance",
          money: [
            {
              year: 2015,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            },
            {
              year: 2016,
              months: {
                "jan": 150, "feb": 150, "mar": 150, "apr": 150, "may": 150, "jun": 150, "jul": 150, "aug": 150, "sep": 150, "oct": 150, "nov": 150, "dec": 150
              }
            }
          ]
        },
        {
          category: "Insurance",
          name: 'Property Insurance',
          description: 'Property Insurance',
          money: [
            {
              year: 2015,
              months: {
                "jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200
              }
            },
            {
              year: 2016,
              months: {
                "jan": 200, "feb": 200, "mar": 200, "apr": 200, "may": 200, "jun": 200, "jul": 200, "aug": 200, "sep": 200, "oct": 200, "nov": 200, "dec": 200
              }
            }
          ]
        },
        {
          category: "Supplies",
          name: "Computers",
          description: "Laptops for new employees",
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        },
        {
          category: "Supplies",
          name: "Servers",
          description: "Server stack for deployment",
          money: [
            {
              year: 2015,
              months: {
                "jan": 2000, "feb": 2000, "apr": 2000
              }
            }
          ]
        }
      ],
      employees: [
        {
          title: "CEO",
          yearlySalary: 150000,
          startDate: {year: 2015, month: 'jan'},
          endDate: {year: 2016, month: 'dec'}
        },
        {
          title: "CTO",
          yearlySalary: 140000,
          startDate: {year: 2015, month: 'apr'},
          endDate: {year: 2016, month: 'dec'}
        },
        {
          title: "Frontend Developer",
          yearlySalary: 100000,
          startDate: {year: 2016, month: 'apr'},
          endDate: {year: 2016, month: 'dec'}
        },
        {
          title: "Backend Developer",
          yearlySalary: 90000,
          startDate: {year: 2015, month: 'may'},
          endDate: {year: 2016, month: 'dec'}
        }
      ],
      startupCosts: [
        {
          name: "Purchase Equipment",
          money: {2015: {'feb': 10000}}
        },
        {
          name: "Purchase Equipment",
          money: {2016: {'jun': 100000}}
        }
      ]
    },
    debtsAndEquities: [
      {
        years: [2015],
        name: "Loan 1",
        type: "loan",
        principal: 160000,
        startYear: 2015,
      }
    ],
    products: [{
      years: [2015],
      productName: "Product 1",
      pricePerUnit: 10,
      costOfProductionPerUnit: 3,
      commission: .1,
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
    }]
  };

var db = require('./db/mongoSchema.js');


module.exports = {

  //******************************
  //GET's
  //******************************

  //get all G&A's
  getModel: function(req, res) {
    console.log('In the modelHandler');
    db.getModel(req, res);
  },

  //******************************
  //UPDATE's
  //******************************

  updateEmployee: function(req, res) {
    var id = req.data;
    var updates = req.data;
  }
}
