'use strict';
var Nature = require('../models/natureModel.js');
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
                display: req.body.display,
                path: req.body.path,
                type: req.body.type,
                category: req.body.category,
                description: req.body.description
            } 
            if(req.body.display == 0){
                Nature.setToStack(stack, function (err, material) {
                    if (err)
                        res.send(err);
                    res.send(material);
                });
            }else{
            //prüfen, ob mmd_id mit display= und stacknr= existiert
            Nature.proof(stack, function (err, material) {
                if (err)
                    res.send(err);
                proof = material;
                console.log(proof)

                if (typeof proof === "undefined"){
                    console.log("init")
                    Nature.setToStack(stack, function (err, material) {
                        if (err)
                            res.send(err);
                        res.send(material);
                    });
                } else{
                    console.log("update")
                    Nature.update(stack, function (err, material) {
                        if (err)
                            res.send(err);
                        res.send(material);
                    });
                }
            });
        }
                //if (result == null)
                    /* INSERT new Eintrag*/
                //else
                    /* UPDATE material_id, relation WHERE mmd_id= AND display= AND stacknr= */    
      /*     }
       })*/
   };

   exports.getStack = function (req, res) {
    Nature.getStackById(req.params.mmd_id, req.params.display, async function(err, stackData) {
        if (err)
            res.send(err);
        res.json(stackData);
        })
}