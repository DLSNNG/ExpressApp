'use strict';

var port = process.env.PORT || 8000; // first change

var http = require('http');
var express = require('express');

var app = express();

var server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('Hello DLS!');
});

app.get('/test', function (req, res) {
	res.send('Test successful!');
});

server.listen(port, function () { // fifth change

});