var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '33060',
    database: 'widerklang',
}); 

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection; 