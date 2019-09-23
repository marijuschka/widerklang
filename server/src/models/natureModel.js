'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//Material object constructor
var Nature = function (id, material) {
    this.id = id;
    this.mmd_id = material.mmd_id;
    this.relation = material.relation;
    this.materials_id = material.materials_id;
    this.display = material.display;
    this.stacknr = material.stacknr;
};


Nature.setToStack = function setToStack(material, result){
    sql.query("INSERT INTO natur SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

Nature.proof = function proof(material, result){
    sql.query("SELECT * FROM natur WHERE mmd_id = ? AND display = ? AND stacknr = ?", [material.mmd_id, material.display, material.stacknr], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
            console.log(res)
        }
    });   
}

Nature.update = function update(material, result){
    sql.query("UPDATE natur SET relation = ? , materials_id = ? WHERE mmd_id =? AND display = ? AND stacknr = ?", [material.relation, material.materials_id, material.mmd_id, material.display, material.stacknr], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}


Nature.getStackById = function getStackById(mmd_id, display, result) {
    sql.query("SELECT * FROM nature WHERE mmd_id = ? AND display = ?", [mmd_id, display], function (err,res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Nature;