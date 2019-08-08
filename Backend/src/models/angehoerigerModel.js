'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Angehoeriger = function (id, angehoeriger) {
    this.id = id;
    this.name = angehoeriger.name;
    this.email = angehoeriger.email;
};

Angehoeriger.createAngehoeriger = function createAngehoeriger(angehoeriger, result) {
    sql.query("INSERT INTO mmd_member SET ?", angehoeriger, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, angehoeriger.id);
        }
    });
};

module.exports = Angehoeriger;