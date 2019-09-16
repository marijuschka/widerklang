'use strict';

var Mmd_member = require('../models/mmd_memberModel.js');
var User = require('../models/userModel.js');
var MmD = require('../models/mmdModel.js')
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}
var res_mmd_member = {
    name: null,
    username: null,
    email: null,
    mmd_id: null,
    mmd_name: null
};


// Gibt einen Mmd_member anhand der ID zurück
exports.get_a_mmd_member = function (req, res) {
    Mmd_member.getMmd_memberById(req.params.mmd_member_id, function (err,member) {
        if (err)
            res.send(err);
        res.json(member);
    });
}


// Gibt eine Liste alle Angehörigen zurück die zu einem bestimmten MmD mit ID gehören
exports.get_all_mmd_member_by_mmd_id =  function (req, res) {

    Mmd_member.getMmd_memberByMmd_id(req.params.mmd_id, function (err,member_list) {
        if (err)
            res.send(err);
        res.json(member_list);
    });

}


// Gibt eine Liste mit allen Angehörigen zurück
exports.get_all_mmd_member = function (req, res) {
    Mmd_member.getAllMmd_member( function (err, all_member_list) {
        if (err)
            res.send(err);
        res.json(all_member_list)
    });
}

exports.delete_a_mmd_member = function (req, res) {
    //ensureToken(req, res);
    //jwt.verify(req.token, 'my_secret_key', function (err, data) {
    //if (err) {
    //res.sendStatus(403);
    //} else {
    Mmd_member.remove(req.params.mmd_member_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'MmD-Member successfully deleted' });
    });

    User.removeByRoleID(req.params.mmd_member_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message1: 'User successfully deleted' });
    });
    //});
    //};
    //});
}

exports.update_a_mmd_member = function (req, res) {

    var updated_mmd_member = {
        id: req.body.id,
        name: req.body.name
    }
    var updated_user = {
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    }

    if (!updated_mmd_member.id || !updated_mmd_member.name || !updated_user.email || !updated_user.username || !updated_user.password) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Mmd_member.updateById(updated_mmd_member, function (err, resMmd_member) {
            if (err)
                res.send(err);
            res.json(resMmd_member);
        })

        User.updateById(updated_user,req.body.id, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser)
        })

    }
}

exports.create_a_mmd_member = function (req, res) {
    var mmd_member_id = generateUniqueId();
    var user_id = generateUniqueId();
    var mmd_member = {
        id: mmd_member_id,
        name: req.body.name,
        mmd_id: req.body.mmd_id
    }
    var user = {
        id: user_id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: "Mmd_member",
        role_id: mmd_member_id
        //  profile_img: req.body.profile_img
    }

    if (!mmd_member.name || !user.username || !user.email || !user.password || !mmd_member.mmd_id) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Mmd_member.createMmd_member(mmd_member, function (err, resMmd_member) {
            if (err)
                res.send(err);
            User.createUser(user, function (err, resUser) {
                if (err)
                    res.send(err);
                res.json(resUser);
            });
        });
    }
};