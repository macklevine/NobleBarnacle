var db = require('./db/mongoSchema.js');

module.exports = {
  //******************************
  //GET's
  //******************************

  //get all G&A's
  getModel: function(req, res) {
    console.log('In the modelHandler');
    db.getModel(req, res);
  }

}


