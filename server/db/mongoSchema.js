var mongoose = require('mongoose');
var defaultModel = require('./models/defaultInstantiator.js');
var funcs = require('./models/schemas-functions.js');

mongoURI = 'mongodb://localhost/mimodb';

mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log('Mongodb connection open!');
  defaultModel.instantiateDefaultModel();
});

db.getModel = funcs.getModel;

module.exports = db;
