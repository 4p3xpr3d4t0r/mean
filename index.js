var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;

var app = express();

var appROutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
mongoose.connect('mongodb://localhost/meanDb');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/', appROutes);

http.createServer(app).listen(port);

console.log("Server is running on:",port); 