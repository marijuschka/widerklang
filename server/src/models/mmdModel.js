'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//User object constructor
var MmD = function (id, mmd) {
    this.id = id;
    this.name = mmd.name;
    this.age = mmd.age;
};

MmD.updateById = function updateById(updated_mmd,result) {
    sql.query("UPDATE mmd SET name = ?, age = ? WHERE id = ?",[updated_mmd.name,updated_mmd.age,'',updated_mmd.id], function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    }); 
}

MmD.getAMmdByMmdName = function getAMmdByMmdName(mmd_name,result) {
    sql.query("SELECT id FROM mmd WHERE name = ?",mmd_name, function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res[0]);

        }
    });
};

MmD.getAMmdById = function getAMmdById(mmd_id,result) {
    sql.query("SELECT * FROM mmd WHERE id = ?",mmd_id, function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res[0]);
        }
    });
};

MmD.remove = function remove(mmd_id, result) {
    sql.query("DELETE FROM mmd WHERE id = ?", mmd_id, function (err, res) {

        if (err) {
            result(null, err);
        }
        else {
            result(null, mmd_id);
        }
    });
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
            result(null, mmd.id);
        }
    });
};



module.exports = MmD;