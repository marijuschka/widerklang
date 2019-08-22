'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//Material object constructor
var Heimat = function (id, material) {
    this.id = id;
    this.mmd_id = material.mmd_id;
    this.relation = material.relation;
    this.materials_id = material.materials_id;
    this.display = material.display;
    this.stacknr = material.stacknr;
};


Heimat.setToStack = function setToStack(material, result){
    sql.query("INSERT INTO heimat SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

Heimat.proof = function proof(material, result){
    sql.query("SELECT * FROM heimat WHERE mmd_id = ? AND display = ? AND stacknr = ?", [material.mmd_id, material.display, material.stacknr], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
            console.log(res)
        }
    });   
}

Heimat.update = function update(material, result){
    sql.query("UPDATE heimat SET relation = ? , materials_id = ? WHERE mmd_id =? AND display = ? AND stacknr = ?", [material.relation, material.materials_id, material.mmd_id, material.display, material.stacknr], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

module.exports = Heimat;