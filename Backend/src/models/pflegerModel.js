'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Pfleger = function (id, pfleger) {
    this.id = id;
    this.name = pfleger.name;
    this.email = pfleger.email;
};

Pfleger.createPfleger = function createPfleger(pfleger, result) {
    sql.query("INSERT INTO pfleger SET ?", pfleger, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, pfleger.id);
        }
    });
};

module.exports = Pfleger;