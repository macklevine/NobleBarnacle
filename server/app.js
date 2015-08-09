var express = require('express');
var bodyParser = require('body-parser');
var modelHandler = require('./modelHandler.js');

var app = express();
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.send('index');
});

app.get('/model', function (req, res) {
  //get entire model for given username
  modelHandler.getModel(req, res);
});

app.get('/expenses', function (req, res) {
  //get all expenses from database
  modelHandler.getExpenses(req, res);
});

app.get('/general', function (req, res) {
  //get all general's from database
  modelHandler.getGenerals(req, res);
});

//routes from client
//get main page ('/')
// GET
  //Model
    //('/model/modelid') => get model by id
  // Expenses
    // ('/expenses') => get all expenses
    // ('/expenses/employees') => get all employees
    // ('/expenses/employees/employeeId') => get employee by id
    // ('/expenses/ganda') => get all g&A expenses
    // ('expenses/ganda/itemid') => get g&A expense by id
    // ('/expenses/startupCosts') => get all startup startupCosts
  //Debt and Equity
    // ('/debtandequity') => get all debt and equity
  //Products
    // ('/products') => get all products
    // ('/products/productId') => get product by id

// POST
  //Expenses
    // ('/expenses/employees') => add employee
    // ('/expenses/employees/employeeId') => update employee by id
    // ('/expenses/ganda/') => add ganda item
    // ('/expenses/ganda/itemId') => update ganda expense by id
    // ('/expenses/startupCosts') => add startup cost
    // ('/expenses/startupCosts/startupCostId') => update startup cost by id
  //Debt and Equity
    // ('/debtandequity') => add debt and equity item
    // ('/debtandequity/debtandequityid') => update debt and equity by id
  //Products
    // ('/products') => add product
    // ('/products/productid') => update product by id



