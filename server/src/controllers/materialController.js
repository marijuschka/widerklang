'use strict';
var Material = require('../models/materialModel.js');
var Mmd_Material = require('../models/mmd_materialModel.js');
var multer = require('multer');
var ejs = require('ejs');
var path = require('path');
//var jwt = require('jsonwebtoken');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

const storage = multer.diskStorage({
    destination: './material/',
    filename:function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single('myImage');


exports.upload_material = function(req, res){
    upload(req, res, (err) => {
        if(err){
            res.send(err);
        }else{
            console.log(req.file);
            var material_id = generateUniqueId();
            var mmd_material_id = generateUniqueId();
            var mmd_id = req.body.mmd_id;
            var material = {
                id: material_id,
                name: req.body.name,
                description: req.body.description,
                path: req.file.path,
                type: req.file.mimetype,
                mmd_id: mmd_id,
                category: req.body.category,
            }
            Material.uploadFile(material, function (err, resMaterial) {
                if (err)
                    res.send(err);
                res.json(resMaterial);
            });
        }
    });
};


exports.get_all_material = function (req, res) {
    var list = [];
    var mmdmat = {
       category: req.params.category,
       mmd_id: req.params.mmdid
    }
    console.log(req.body.mmdid)
              /* Mmd_Material.getAllMaterial(mmdmat, function (err, generic) {
                   if (err)
                       res.send(err);
                list = generic;*/
                Material.getAllMaterial(mmdmat, function (err, selected) {
                    if (err){
                        res.send(err);
                    }
                 res.json(selected); 
                   });
              //  });
   };