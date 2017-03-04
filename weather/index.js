// https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/

var express = require('express');
var request = require('request');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', function(req, res) {
  var url = 'http://tiles.aqicn.org' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
