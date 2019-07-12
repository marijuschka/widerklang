var connection = mysql.createConnection({
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    port: '33060',
    database: 'widerklang'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;