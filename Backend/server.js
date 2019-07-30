var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var ejs = require('ejs');
var path = require('path');
//var jwt = require('jsonwebtoken');
port = process.env.PORT || 8080;

var app = express();

// Public Folder
app.use(express.static('./public'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route */

