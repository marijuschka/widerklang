'user strict';
var sql = require('../../config/db');
var jwt = require('jsonwebtoken');
//Material object constructor
var Material = function (id, material) {
    this.id = id;
    this.name = material.name;
    this.description = material.description;
    this.path = material.path;
    this.type = material.type;
};



Material.uploadFile = function uploadFile(material, result){
    sql.query("INSERT INTO material SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material.name);
        }
    });
}

/*Material.createMaterial = function createMaterial(material, result) {
    sql.query("INSERT INTO material SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material.id);
        }
    });
};*/

/*
Material.getAllMaterial = function getAllMaterial(list, result) {
    var arr = list.map( function(el) { return el.material_id; });
    sql.query("SELECT * FROM material WHERE id IN (?)", [arr], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            console.log(res);
            result(null, res);
        }
    }); 
};*/
Material.getStackMaterial = function getStackMaterial(list, result) {  
    var arr = list.map( function(el) { return el.materials_id; });
    sql.query("SELECT * FROM material WHERE id IN (?)", [arr], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            console.log(res);
            result(null, res);
        }
    }); 
};
Material.getAllMaterial = function getAllMaterial(mmdmat, result){
    sql.query("SELECT * FROM material WHERE category = ? AND mmd_id = ?", [mmdmat.category, mmdmat.mmd_id], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Material;


