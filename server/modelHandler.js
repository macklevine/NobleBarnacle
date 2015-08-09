//imitation general data that would be returned from the db
var generals = [
  {
    year: 2015,
    gAndA: [
      {
        category: 'Marketing',
        items: [
          {
            itemId: 10302,
            name: 'Radio Ad',
            money:
              {
                jan: 2000,
                feb: 2000,
                apr: 1000
              }
          },
          {
            itemId: 10402,
            name: 'Branding',
            money:
              {
                feb: 1000,
                mar: 1000,
                apr: 1000,
                may: 1000
              }
          },
          {
            itemId: 10502,
            name: 'Conference',
            money:
              {
                nov: 1000,
                dec: 1000
              }
          }
        ]
      },
      {
        category: 'Facilities and Maintenance',
        items: [
          {
            itemId: 20302,
            name: 'Rent',
            money:
              {
                jan: 2000,
                feb: 2000,
                mar: 2000,
                apr: 2000,
                may: 2000,
                jun: 2000, 
                jul: 2000,
                aug: 2000,
                sep: 2000, 
                oct: 2000,
                nov: 2000,
                dec: 2000
              }
          },
          {
            itemId: 20402,
            name: 'Supplies',
            money:
              {
                jan: 1000,
                feb: 1000,
              }
          }
        ]
      }
    ]
  }
];

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
  getGenerals: function(req, res) {
    var userId = req.body.id;
    // db.getGAndAs(userId, function (err, gAndAs) {
    //   if (err) throw new err;
    //   res.end(gAndAs);
    // });
    res.end(JSON.stringify(generals));
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