var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

//var jwt = require('jsonwebtoken');
port = process.env.PORT || 8080;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// Public Folder
app.use(express.static('./public'));





app.get('/', (req, res ) => res.render('index'));
app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
console.log('API server started on: ' + port);




var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route */

