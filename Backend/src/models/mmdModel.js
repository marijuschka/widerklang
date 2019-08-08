'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//User object constructor
var MmD = function (id, mmd) {
    this.mmd_id = id;
    this.name = mmd.name;
    this.age = mmd.age;
};

MmD.getAllMmD = function getAllMmD(result) {
    sql.query("SELECT * FROM mmd", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

MmD.createMmD = function createMmD(mmd, result) {
    sql.query("INSERT INTO mmd SET ?", mmd, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, mmd.mmd_id);
        }
    });
};



module.exports = MmD;