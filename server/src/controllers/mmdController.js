'use strict';
var MmD = require('../models/mmdModel.js');
//var jwt = require('jsonwebtoken');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}
exports.get_a_mmd_by_mmd_name = function(req,res) {
    MmD.getAMmdByMmdName(req.params.mmd_name,function(err,mmd) {
        if (err)
            res.send(err);
        res.send(mmd);
    })
};


exports.get_a_mmd = function(req,res) {
    
    MmD.getAMmdById(req.params.mmd_id, function(err,mmd) {
        if (err)
            res.send(err);
        res.send(mmd);
    })
};

exports.update_a_mmd = function (req, res) {
    var updated_mmd = {
        id: req.body.mmd_id,
        name: req.body.name,
        age: req.body.age
    }

    if (!updated_mmd.name || !updated_mmd.age) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        MmD.updateById(updated_mmd, function (err, resMmd) {
            if (err)
                res.send(err);
            res.json(resMmd);
        });
    }


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

   exports.delete_a_mmd = function (req, res) {
//    ensureToken(req, res);
//    jwt.verify(req.token, 'my_secret_key', function (err, data) {
//       if (err) {
//            res.sendStatus(403);
//       } else {
            MmD.remove(req.params.mmd_id, function (err, user) {
                if (err)
                    res.send(err);
                res.json({ message: 'MmD"name successfully deleted' });
//           });
//       };
            });
            // Here we have to delete all the content out of the three categories (freizeit,heimat,natur,spaß) 
            //
            //
            //
            //
            //
            //
}

   exports.create_a_mmd = function (req, res) {
    var mmd_id = generateUniqueId();
    var mmd = {
        id: mmd_id,
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
   

//mmd by name route!