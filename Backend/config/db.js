var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gm2019pmw',
    port: '3306',
    database: 'widerklang',
    _socket: '/var/run/mysqld/mysqld.sock',
}); 

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection; 