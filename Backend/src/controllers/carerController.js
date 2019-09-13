'use strict';

var Carer = require('../models/carerModel.js');
var User = require('../models/userModel.js');
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.update_a_carer = function (req,res) {

    var updated_carer = {
        id: req.body.id,
        name: req.body.name
    }
    var updated_user = {
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    }

    if (!updated_carer.id || !updated_carer.name || !updated_user.email || !updated_user.username || !updated_user.password) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Carer.updateById(updated_carer, function (err,resCarer){
            if (err)
                res.send(err);
            res.json(resCarer);
        })
        
        User.updateById(updated_user,req.body.id, function (err, resUser){
            if(err)
                res.send(err);
            res.json(resUser) 
        })

    }
}
exports.delete_a_carer = function(req,res) {



    User.removeByRoleID(req.params.carer_id, function (err, user_id) {
        if (err)
            res.send(err);
        res.json(user_id);
    });

    Carer.remove(req.params.carer_id, function (err, resCarer_id) {
        if (err)
            res.send(err);
        res.json(resCarer_id);
    });
}

exports.get_all_carer = function(req,res) {
    Carer.getAllCarer( function(err,all_carer){
        if (err)
            res.send(err)
        res.json(all_carer)
    });
}

exports.get_a_carer = function(req,res) {
    Carer.getCarerById(req.params.carer_id, function (err, resCarer) {
        if (err)
            res.send(err);
        res.json(resCarer);
    });
}
exports.create_a_carer = function (req, res) {
    var carer_id = generateUniqueId();
    var user_id = generateUniqueId();
    var carer = {
        id: carer_id,
        name: req.body.name,

    }
    var user = {
        id: user_id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Carer",
        role_id: carer_id
      //  profile_img: req.body.profile_img
    }

    if (!carer.name || !user.email || !user.username || !user.password ) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Carer.createCarer(carer, function (err, resCarer) {
            if (err)
                res.send(err);
            res.json(resCarer);
        });
        User.createUser(user, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser);
        });
    }
};