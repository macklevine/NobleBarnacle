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
          }
        ]
      },
      {
        category: 'Facilities and Maintenance',
        items: [
          {
            itemId: 10302,
            name: 'Radio Ad',
            money:
              {
                jan: 2000,
                feb: 2000,
                mar: 0
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