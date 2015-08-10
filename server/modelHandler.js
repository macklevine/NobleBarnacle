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

var defaultInstantiator = require('./db/models/defaultInstantiator.js');

module.exports = {

  //******************************
  //GET's
  //******************************

  //get entire model for a given username
  getModel: function(req, res) {
    defaultInstantiator.instantiateDefaultModel('mack', function(){
      db.getModel(req, res);
    });
  }


  //******************************
  //UPDATE's
  //******************************

  updateEmployee: function(req, res) {
    var id = req.data;
    var updates = req.data;

  }

}