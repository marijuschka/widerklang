'use strict';
var Family = require('../models/familyModel.js');
var Material = require('../models/materialModel.js');
//var jwt = require('jsonwebtoken');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.set_to_stack = function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
            var proof;
            var stack = {
                id: generateUniqueId(),
                mmd_id: req.body.mmd_id,
                relation: req.body.relation,
                materials_id: req.body.materials_id,
                display: req.body.display,
                stacknr: req.body.stacknr
            } 
            //prüfen, ob mmd_id mit display= und stacknr= existiert
            Family.proof(stack, function (err, material) {
                if (err)
                    res.send(err);
                proof = material;
                console.log(proof)

                if (typeof proof === "undefined"){
                    console.log("init")
                    Family.setToStack(stack, function (err, material) {
                        if (err)
                            res.send(err);
                        res.send(material);
                    });
                } else{
                    console.log("update")
                    Family.update(stack, function (err, material) {
                        if (err)
                            res.send(err);
                        res.send(material);
                    });
                }
            });
   };

   exports.getStack = function (req, res) {
    Family.getStackById(req.params.mmd_id, async function(err, stackData) {
        if (err)
            res.send(err);
    Material.getStackMaterial(stackData, async function(err, materialData){
            res.json({
                data: {
                    stackData,
                    materialData
                }
            })
        })
 })
}