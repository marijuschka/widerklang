'use strict';

var Angehoeriger = require('../models/angehoerigerModel.js');
var User = require('../models/userModel.js');
var MmD = require('../models/mmdModel.js')
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.create_a_angehoeriger = function (req, res) {
    var angehoeriger_id = generateUniqueId();
    var user_id = generateUniqueId();
    var mmd_id = generateUniqueId();
    var angehoeriger = {
        id: angehoeriger_id,
        name: req.body.name,
        email: req.body.email,
        mmd_id: mmd_id
    }
    var user = {
        id: user_id,
        email: req.body.user_email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Angehoeriger",
        role_id: angehoeriger_id
      //  profile_img: req.body.profile_img
    }
    var mmd = {
        id: mmd_id,
        name: req.body.mmd_name,
        age: req.body.age
    }

    if (!angehoeriger.name || !angehoeriger.email || !user.username || !user.email || !user.password  || !mmd.name || !mmd.age) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Angehoeriger.createAngehoeriger(angehoeriger, function (err, resPfleger) {
            if (err)
                res.send(err);
            res.json(resPfleger);
        });
        User.createUser(user, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser);        
        });
        MmD.createMmD(mmd, function (err,resMmd) {
            if (err)
                res.send(err);
            res.json(resMmd);
        });
    }
};