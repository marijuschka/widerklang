'use strict';

var Pfleger = require('../models/pflegerModel.js');
var User = require('../models/userModel.js');
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.create_a_pfleger = function (req, res) {
    var pfleger_id = generateUniqueId();
    var user_id = generateUniqueId();
    var pfleger = {
        id: pfleger_id,
        name: req.body.name,
        email: req.body.email
    }
    var user = {
        id: user_id,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Pfleger",
        role_id: pfleger_id
      //  profile_img: req.body.profile_img
    }

    if (!pfleger.name || !pfleger.email || !user.username || !user.password) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Pfleger.createPfleger(pfleger, function (err, resPfleger) {
            if (err)
                res.send(err);
            res.json(resPfleger);
        });
        User.createUser(user, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser);
        });
    }
};