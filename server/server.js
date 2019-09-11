var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var history = require('connect-history-api-fallback');


//var jwt = require('jsonwebtoken');
port = process.env.PORT || 8081;
var app = express();


/* decclare static folder of image uploads */
app.use(express.static('./'));
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



const staticFileMiddleware = express.static('./public');



//displays 
app.get('/imageUpload', (req, res ) => res.render('../views/index'));
app.get('/imageUploadMmD', (req, res ) => res.render('../views/uploadMaterialMmD'));
app.get('/terminal', (req, res ) => res.render('../views/terminal'));
app.get('/slider', (req, res ) => res.render('../views/slider'));
app.get('/tv', (req, res ) => res.render('../views/tv'));
app.get('/bild1', (req, res ) => res.render('../views/bild1'));
app.get('/bild2', (req, res ) => res.render('../views/bild2'));
app.get('/bild3', (req, res ) => res.render('../views/bild3'));

var routes = require('./src/routes/appRoutes');
routes(app); //register the route

// 1st call for unredirected requests 
app.use(staticFileMiddleware);
// Support history api 
app.use(history({
  index: '/index.html'
}));

// 2nd call for redirected requests
app.use(staticFileMiddleware);


var server = app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
console.log('API server started on: ' + port);

var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log("SocketID: " + socket.id);
        io.emit('user join', {for: 'everyone'})
      socket.on('message', function(data){
          io.emit('reMessage', data, {for: 'everyone'})
      }) 
      socket.on('tvStack', function(data){
        io.emit('retvStack', data, {for: 'everyone'})
    }) 
})

var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route */

