'use strict';
var Generic = require('../models/genericModel.js');
var Material = require('../models/materialModel.js');
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

exports.get_all_generic = function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
            console.log(req.params.category)
               Generic.getAllGeneric(req.params.category, function (err, generic) {
                   if (err)
                       res.send(err);
                res.json(generic);
                  });
               
      /*     }
       })*/
   };

   exports.upload_generic = function(req, res){
    upload(req, res, (err) => {
        if(err){
            res.send(err);
        }else{
            var generic_id = generateUniqueId();
            var generic = {
                id: generic_id,
                name: req.body.name,
                description: req.body.description,
                path: req.file.path,
                type: req.file.mimetype,
                category: req.body.category,
            }
            Generic.saveMaterial(generic, function (err, resMaterial) {
                if (err)
                    res.send(err);
                res.json(resMaterial);
            });
        }
    });
};