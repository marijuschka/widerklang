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

Mmd_Material.getAllMaterial = function getAllMaterial(mmdmat, result){
    sql.query("SELECT material_id FROM material_mmd WHERE category = ? AND mmd_id = ?", [mmdmat.category, mmdmat.mmd_id], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
}



module.exports = Mmd_Material;