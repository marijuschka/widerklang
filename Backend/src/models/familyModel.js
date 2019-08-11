'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//Material object constructor
var Family = function (id, material) {
    this.id = id;
    this.mmd_id = material.mmd_id;
    this.relation = material.relation;
    this.materials_id = material.materials_id;
    this.display = material.display;
    this.stacknr = material.stacknr;
};


Family.setToStack = function setToStack(material, result){
    sql.query("INSERT INTO familie SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material[0]);
        }
    });
}

module.exports = Family;