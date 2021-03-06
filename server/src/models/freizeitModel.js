'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//Material object constructor
var Freizeit = function (id, material) {
    this.id = id;
    this.mmd_id = material.mmd_id;
    this.relation = material.relation;
    this.materials_id = material.materials_id;
    this.display = material.display;
    this.stacknr = material.stacknr;
};


Freizeit.setToStack = function setToStack(material, result){
    sql.query("INSERT INTO freizeit SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

Freizeit.proof = function proof(material, result){
    sql.query("SELECT * FROM freizeit WHERE mmd_id = ? AND display = ? ", [material.mmd_id, material.display], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
            console.log(res)
        }
    });   
}

Freizeit.update = function update(material, result){
    sql.query("UPDATE freizeit SET relation = ? , materials_id = ? WHERE mmd_id =? AND display = ? ", [material.relation, material.materials_id, material.mmd_id, material.display], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

Freizeit.getStackById = function getStackById(mmd_id, display, result) {
    sql.query("SELECT * FROM freizeit WHERE mmd_id = ? AND display = ?", [mmd_id, display], function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Freizeit;