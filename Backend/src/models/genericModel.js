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
    sql.query("SELECT materials_id FROM generic WHERE category = ?", category, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            var generic = [];
            for(var i = 0; i <= res.length -1; i++){
                generic.push(res[i].materials_id)
            }
            result(null, generic);
        }
    });
}

module.exports = Generic;