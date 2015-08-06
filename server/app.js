var express = require('express');
var bodyParser = require('body-parser');

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

