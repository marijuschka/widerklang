'user strict';

var mysql = require('mysql');

/* ###DB-SETUP### */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'widerklang'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;