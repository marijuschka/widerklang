var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');


//var jwt = require('jsonwebtoken');
port = process.env.PORT || 8080;
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
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
app.use(express.static('./'));
app.get('/', (req, res ) => res.render('index'));
app.get('/terminal', (req, res ) => res.render('terminal'));
app.get('/slider', (req, res ) => res.render('slider'));
app.get('/tv', (req, res ) => res.render('tv'));
app.get('/bild1', (req, res ) => res.render('bild1'));
app.get('/bild2', (req, res ) => res.render('bild2'));
app.get('/bild3', (req, res ) => res.render('bild3'));


var server = app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
console.log('API server started on: ' + port);

var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Ein neuer Nutzer hat den server betreten');
        io.emit('user join', {for: 'everyone'})
      socket.on('message', function(data){
          io.emit('reMessage', data, {for: 'everyone'})
      }) 
});

var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route */

