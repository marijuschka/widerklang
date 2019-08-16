'use strict';

var Carer = require('../models/carerModel.js');
var User = require('../models/userModel.js');
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}

exports.create_a_carer = function (req, res) {
    var carer_id = generateUniqueId();
    var user_id = generateUniqueId();
    var carer = {
        id: carer_id,
        name: req.body.name,
        email: req.body.email
    }
    var user = {
        id: user_id,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Carer",
        role_id: carer_id
      //  profile_img: req.body.profile_img
    }

    if (!carer.name || !carer.email || !user.username || !user.password ) {
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