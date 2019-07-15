var express = require('express');
var bodyParser = require('body-parser');
//var jwt = require('jsonwebtoken');
port = process.env.PORT || 8080;
var sql = require('./config/db_lokal');

var app = express();

app.use(express.static('./public'));

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route */

