'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Angehoeriger = function (id, angehoeriger) {
    this.id = id;
    this.name = angehoeriger.name;
};

Angehoeriger.getAllAngehoerigen = function getAllAngehoerigen(result) {
    sql.query("SELECT * FROM mmd_member", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
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

Angehoeriger.getAngehoergierById = function getAngehoergierById(angehoeriger_id,result) {
    sql.query("SELECT * FROM mmd_member WHERE id = ?",angehoeriger_id,function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}
Angehoeriger.updateById = function updateById(input,result) {
    sql.query("UPDATE mmd_member SET name = ? WHERE id = ?",[input.name, input.id], function (err,res){
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });

}

Angehoeriger.remove = function remove(id, result) {
    sql.query("DELETE FROM mmd_member WHERE id = ?", [id], function (err, res) {

        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Angehoeriger;