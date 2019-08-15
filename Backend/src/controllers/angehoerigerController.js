'use strict';

var Angehoeriger = require('../models/angehoerigerModel.js');
var User = require('../models/userModel.js');
var MmD = require('../models/mmdModel.js')
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}


// Gibt einen Angehoerigen anhand der ID zurück
exports.get_a_angehoeriger = function (req,res) {

    var res_angehoeriger = null;

    Angehoeriger.getAngehoergierById(req.params.angehoeriger_id,function (err,angehoeriger) {
        if (err) {
            res.send(err);
        }
        else if (angehoeriger == null) {
            res.send("Angehoeriger does not exist!");
        } else {
            res_angehoeriger = angehoeriger;
        }
    });

    User.getUserByAngehoerigenId(req.params.angehoeriger_id, function (err,user) {
        if (err) {
            res.send(err);
        }
        else if (user == null) {
            res.send("Angehoeriger does not exist!");
        } else {
            var ob = Object.assign({},res_angehoeriger,user)
            res.json(ob);
        }
    });
}

// Gibt alle in der Datenbank exestierenden Angehoerigen in einer JSON-Liste zuruek
exports.get_all_angehoerigen = function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
               Angehoeriger.getAllAngehoerigen(function (err, angehoeriger) {
                   if (err)
                       res.send(err);
                   res.send(angehoeriger);
               });
      /*     }
       })*/
}
exports.delete_a_angehoeriger = function (req, res) {
    //ensureToken(req, res);
    //jwt.verify(req.token, 'my_secret_key', function (err, data) {
        //if (err) {
            //res.sendStatus(403);
        //} else {
            Angehoeriger.remove(req.params.angehoeriger_id, function (err, user) {
                if (err)
                    res.send(err);
                res.json({ message: 'MmD-Member successfully deleted' });
            });

            User.remove(req.body.user_id, function (err,user) {
                if (err)
                    res.send(err);
                res.json({ message1: 'User successfully deleted' });
            });
            //});
        //};
    //});
}

exports.update_a_angehoeriger = function (req,res) {

    var updated_angehoeriger = {
        id: req.body.angehoeriger_id,
        name: req.body.name
    }
    var updated_user = {
        id: req.body.user_id,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    }

    if (!updated_angehoeriger.id || !updated_angehoeriger.name || !updated_user.id || !updated_user.email || !updated_user.username || !updated_user.password) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {

        Angehoeriger.updateById(updated_angehoeriger, function (err,resAngehoeriger){
            if (err)
            res.send(err);
            res.json(resAngehoeriger);
        })
        
        User.updateById(updated_user, function (err, resUser){
            if(err)
            res.send(err);
            res.json(resUser) 
        })

    }
}

exports.create_a_angehoeriger = function (req, res) {
    var angehoeriger_id = generateUniqueId();
    var user_id = generateUniqueId();
    var angehoeriger = {
        id: angehoeriger_id,
        name: req.body.name,
        mmd_id: req.body.mmd_id
    }
    var user = {
        id: user_id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Angehoeriger",
        role_id: angehoeriger_id
      //  profile_img: req.body.profile_img
    }

    if (!angehoeriger.name || !user.username || !user.email || !user.password || !angehoeriger.mmd_id) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Angehoeriger.createAngehoeriger(angehoeriger, function (err, resAngehoeriger) {
            if (err)
                res.send(err);
            res.json(resAngehoeriger);
        });
        User.createUser(user, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser);        
        });
    }
};