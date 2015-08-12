var express = require('express');
var bodyParser = require('body-parser');
var modelHandler = require('./modelHandler.js');

var app = express();
// app.set('views', __dirname + '/views');
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/model', function (req, res) {
  //get entire model for given username
  modelHandler.getModel(req, res);
});

