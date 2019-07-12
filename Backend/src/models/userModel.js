'user strict';
var sql = require('../../config/db');
//var bcrypt = require('bcrypt');
//var jwt = require('jsonwebtoken');
//User object constructor
var User = function (id, user) {
    this.id = id;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
};

User.createUser = function createUser(user, result) {
    sql.query("INSERT INTO User SET ?", user, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, user.id);
        }
    });
};