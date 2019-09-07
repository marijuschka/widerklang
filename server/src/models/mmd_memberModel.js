'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Mmd_member = function (id, mmd_member) {
    this.id = id;
    this.name = mmd_member.name;
};

Mmd_member.getAllMmd_member = function getAllMmd_member(result) {
    sql.query("SELECT * FROM mmd_member", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Mmd_member.createMmd_member = function createMmd_member(mmd_member, result) {
    sql.query("INSERT INTO mmd_member SET ?", mmd_member, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, mmd_member.id);
        }
    });
};

Mmd_member.getMmd_memberById = function getMmd_memberById(mmd_member_id,result) {
    sql.query("SELECT * FROM mmd_member WHERE id = ?",mmd_member_id,function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res[0]);
        }
    });
}
Mmd_member.updateById = function updateById(input,result) {
    sql.query("UPDATE mmd_member SET name = ? WHERE id = ?",[input.name, input.id], function (err,res){
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });

}

Mmd_member.remove = function remove(id, result) {
    sql.query("DELETE  FROM mmd_member WHERE id = ?", id, function (err, res) {

        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Mmd_member;