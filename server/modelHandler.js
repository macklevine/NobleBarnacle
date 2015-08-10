//imitation general data that would be returned from the db
var model = {
    username: "mack",
    companyName: "My Company",
    startingCash: 0,
    settings: {
      benefits: [
        {
          name: 'Health Care',
          dollarsPerMonth: -200,
          increasePerYear: .12
        },
        {
          name: 'dental',
          dollarsPerMonth: -25,
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
          years: [2015],
          category: 'Marketing',
          name: 'Radio Ad',
          description: 'We plan to purchase a radio ad to increase awareness',
          cost: 2000,
          money: ["jan", "feb", "apr", "jul", "aug", "sep"]
        },
        {
          years: [2015],
          category: 'Marketing',
          name: 'Branding Design',
          description: 'Payment for logo design',
          cost: 200,
          money: ["aug"]
        },
        {
          years: [2015],
          category: 'Marketing',
          name: 'Trade Show',
          description: 'Traveling to a trade show in Las Vegas',
          cost: 3000,
          money: ["dec"]
        },
        {
          years: [2015],
          category: 'Facilities and Equipment',
          name: 'Cell Phones',
          description: 'communication costs for the team',
          cost: 500,
          money: ["apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        {
          years: [2015],
          category: "Facilities and Equipment",
          name: "Rent",
          description: 'Rent for office space',
          cost: 2500,
          money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        {
          years: [2015],
          category: "Facilities and Equipment",
          name: "Cleaning",
          description: "Cleaning service for the office space",
          cost: 300,
          money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        {
          years: [2015],
          category: "Insurance",
          name: "General Liability",
          description: "General liability insurance",
          cost: 400,
          money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        {
          years: [2015],
          category: "Insurance",
          name: 'Property Insurance',
          description: 'Property Insurance',
          cost: 300,
          money: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        {
          years: [2015],
          category: "Supplies",
          name: "Computers",
          description: "Laptops for new employees",
          cost: 4000,
          money: ["sep"]
        },
        {
          years: [2015],
          category: "Supplies",
          name: "Servers",
          description: "Server stack for deployment",
          cost: 3000,
          money: ["dec"]
        }
      ],
      employees: [
        {
          years: [2015], 
          title: "CEO",
          yearlySalary: 150000,
          startDate: 'feb'
        }
      ],
      startupCosts: [
        {
          years: [2015],
          name: "Purchase Equipment",
          cost: 10000,
          month: ['feb']
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
    revenueSources: [{
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

module.exports = {

  //******************************
  //GET's
  //******************************

  //get all expenses
  getExpenses: function(req, res) {
    var expenses = {};
    //get the all gAndA expenses 
    db.getExpenses()
      .then(function(expenses) {

      });
    //do some stuff with the expenses
    res.end(expenses);
    //expenses: {
    //  gAndA: [],
    //   
    },

  //get all employees
  getEmployees: function(req, res) {
    var employees = db.getEmployees();
    //do some stuff with the employees
    res.end(employees);
  },

  //get employee by id
  getEmployeeById: function(req, res) {
    var id = req.data; //figure out how to get the employee id
    var employee = db.getEmployee(id);
    //do some stuff with the employee
    res.end(employee);
  },

  //get all G&A's
  getModel: function(req, res) {
    var userId = req.body.id;
    // db.getGAndAs(userId, function (err, gAndAs) {
    //   if (err) throw new err;
    //   res.end(gAndAs);
    // });
    res.end(JSON.stringify(model));
  },

  //get g&a by id
  getgAndA: function(req, res) {
    var id = 10; //figure out how to get the id
    db.getGAndA(id, function(err, data) {

    });
    //do some stuff
    res.end(gAndA);
  },

  //******************************
  //UPDATE's
  //******************************

  updateEmployee: function(req, res) {
    var id = req.data;
    var updates = req.data;

  }

}