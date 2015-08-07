module.exports = {

  //******************************
  //GET's
  //******************************

  //get all expenses
  getExpenses: function(req, res) {
    var expenses = {};
    //get the all gAndA expenses 
    db.getExpenses(function(err, expenses) {
      if (err) //throw error

    });
    //do some stuff with the expenses
    res.end(expenses);
    //expenses: {
    //  gAndA: [],
    //   
    }
  },

  //get all employees
  getEmployees: function(req, res) {
    var employees = db.getEmployees();
    //do some stuff with the employees
    res.end(employees);
  },

  //get employee by id
  getEmployeeById: function(req, res) {
    var id = req.; //figure out how to get the employee id
    var employee = db.getEmployee(id);
    //do some stuff with the employee
    res.end(employee);
  },

  //get all G&A's
  getGAndAs: function(req, res) {
    var userId = req.body.id;
    db.getGAndAs(userId, function (err, gAndAs) {
      if (err) throw new err;
      res.end(gAndAs);
    });
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
    var id = req.stuff?; 
    var updates = req.data?;

    db.
  }


}