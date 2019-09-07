'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//User object constructor
var Generic = function (id, generic) {
    this.id = id;
    this.material_id = generic.material_id;
    this.category = generic.category;
};

Generic.saveMaterial = function saveMaterial(generic, result) {
    sql.query("INSERT INTO generic SET ?", generic, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, generic.id);
        }
    });
};

Generic.getAllGeneric = function getAllGeneric(category, result){
    sql.query("SELECT * FROM generic WHERE category = ?", category, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Generic;