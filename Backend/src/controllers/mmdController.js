'use strict';
var MmD = require('../models/mmdModel.js');
//var jwt = require('jsonwebtoken');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.get_all_mmd = function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
               MmD.getAllMmD(function (err, mmd) {
                   if (err)
                       res.send(err);
                   res.send(mmd);
               });
      /*     }
       })*/
   };

   exports.create_a_mmd = function (req, res) {
    var mmd_id = generateUniqueId();
    var mmd = {
        mmd_id: mmd_id,
        name: req.body.name,
        age: req.body.age,
      //  profile_img: req.body.profile_img
    }
    //handles null error 
    if (!mmd.name || !mmd.age ) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        MmD.createMmD(mmd, function (err, resMmD) {
            if (err)
                res.send(err);
            res.json(resMmD);
        });
    }
};
   