'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Carer = function (id, carer) {
    this.id = id;
    this.name = carer.name;
    this.email = carer.email;
};

Carer.createCarer = function createCarer(carer, result) {
    sql.query("INSERT INTO carer SET ?", carer, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, carer.id);
        }
    });
};

module.exports = Carer;