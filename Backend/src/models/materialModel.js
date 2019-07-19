'user strict';
var sql = require('../../config/db_lokal');
var jwt = require('jsonwebtoken');
//Material object constructor
var Material = function (id, material) {
    this.id = id;
    this.name = material.name;
    this.description = material.description;
    this.path = material.path;
    this.type = material.type;
    this.generic = material.generic;
};

Material.createMaterial = function createMaterial(material, result) {
    sql.query("INSERT INTO material SET ?", material, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, material.id);
        }
    });
};

Material.getAllMaterial = function getAllMaterial(result) {
    sql.query("SELECT * FROM material", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Material;