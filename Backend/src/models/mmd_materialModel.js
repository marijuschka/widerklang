'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//User object constructor
var Mmd_Material = function (id, generic) {
    this.id = id;
    this.material_id = generic.material_id;
    this.category = generic.category;
};

Mmd_Material.saveMaterial = function saveMaterial(mmd_material, result) { 
    sql.query("INSERT INTO material_mmd SET ?", mmd_material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
        }
    });
};



module.exports = Mmd_Material;