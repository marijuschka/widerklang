'use strict';
var Material = require('../models/materialModel.js');
//var jwt = require('jsonwebtoken');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.create_a_material = function (req, res) {
    var material_id = generateUniqueId();
    var material = {
        id: material_id,
        name: req.body.name,
        description: req.body.description,
        path: req.body.path,
        type: req.body.type,
        generic: req.body.generic,
      //  profile_img: req.body.profile_img
    }
    //handles null error 
    if (!material.name || !material.path || !material.path || !material.type || !material.generic ) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Material.createMaterial(material, function (err, resMaterial) {
            if (err)
                res.send(err);
            res.json(resMaterial);
        });
    }
};

exports.get_all_material = function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
               Material.getAllMaterial(function (err, material) {
                   if (err)
                       res.send(err);
                   res.send(material);
               });
      /*     }
       })*/
   };