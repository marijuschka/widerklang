'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var Carer = function (id, carer) {
    this.id = id;
    this.name = carer.name;
};


Carer.updateById = function updateById(input,result) {
    sql.query("UPDATE carer SET name = ? WHERE id = ?",[input.name, input.id], function (err,res){
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });

}

Carer.remove = function remove(carer_id,result) {
    sql.query("DELETE FROM carer WHERE id = ?",carer_id, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, carer_id);
        }
    });
}

Carer.getAllCarer = function getAllCarer(result) {
    sql.query("SELECT * FROM carer", function( err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null,res)
        }
    });
    
    
};
    Carer.getCarerById = function getCarerById(carer_id,result) {
    sql.query("SELECT * FROM carer WHERE id = ?",carer_id, function ( err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null,res)
        }
    });
}

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