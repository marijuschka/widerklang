// Setup  
const express = require('express');
//var mysql = require('mysql');
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

/* ###DB-SETUP### */
/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    port: '33060',
    database: 'crumbs'
}); */


const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main', headline: 'WiderKlang'}));
app.set('view engine', 'handlebars');



//######Routes#########
app.get('/', (req, res) => {
    res.render('index', {
        'headtask': "WiderKlang",
        'headline': "Widerklang"

    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        'headtask': "Widerklang | About",
        'headline': "About"
    });
});


// Set Port
const PORT = process.env.PORT || 5000;
//Start Server (npm run dev --> dev mode)
var server = app.listen(PORT, () => console.log('Server started on port ${PORT}'));

//######Websocket######

var io = require('socket.io')(server);

io.on('connection', function (socket, name) {
    console.log('Ein neuer Nutzer hat den Server betreten', socket.id);
    io.emit('user join', {for: 'everyone'});
});