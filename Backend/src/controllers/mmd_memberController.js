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

    var res_mmd_member = {
        name: null,
        mmd_id: null,
        mmd_name: null
    };

    Mmd_member.getMmd_memberById(req.params.mmd_member_id, function (err, mmd_member) {
        if (err) {
            res.send(err);
        }
        else if (mmd_member == null) {
            res.send("Mmd_member does not exist!");
        } else {

            res_mmd_member.name = mmd_member.name;
            res_mmd_member.mmd_id = mmd_member.mmd_id;
        }
        MmD.getAMmdById(res_mmd_member.mmd_id, function (err, mmd) {
            if (err) {
                res.send(err);
            }
            else if (mmd == null) {
                res.send("Mmd_member does not exist!");
            } else {
                res_mmd_member.mmd_name = mmd.name;
                res.json(res_mmd_member);
            }
        });
    });

}

// Gibt alle in der Datenbank exestierenden Mmd_member in einer JSON-Liste zuruek
exports.get_all_mmd_member = async function (req, res) {
    /*   ensureToken(req, res);
       jwt.verify(req.token, 'my_secret_key', function (err, data) {
           if (err) {
               res.sendStatus(403);
           } else {*/
    var mmd_member_array = null;
    

    await Mmd_member.getAllMmd_member( async function (err, mmd_member) {
        if (err)
            res.send(err);
        mmd_member_array = mmd_member;


        for (var i = 0; i < mmd_member_array.length; i++) {

            res_mmd_member = {
                name: mmd_member_array[i].name,
                mmd_id: mmd_member_array[i].mmdid,
                mmd_name: "dummy"
            };
            
            // await User.getUserByMmd_memberId(mmd_member_array[i].id, function (err, user) {
            //     if (err) {
            //         res.send(err);
            //     }
            //     else if (user == null) {
            //         res.send("Mmd_member does not exist!");
            //     } else {

            //         res_mmd_member.username = user.username;
            //         res_mmd_member.email = user.email;

            //     }
            // });
            await MmD.getAMmdById(res_mmd_member.mmd_id, function (err, mmd) {
                if (err) {
                    res.send(err);
                }
                else if (mmd == null) {
                    res.send("Mmd_member does not exist!");
                } else {
                    res_mmd_member.mmd_name = mmd.name;
                }
            });

        }
        // Returns the whole array
        res.json(mmd_member_array);
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
        id: req.body.user_id,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    }

    if (!updated_mmd_member.id || !updated_mmd_member.name || !updated_user.id || !updated_user.email || !updated_user.username || !updated_user.password) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {
        Mmd_member.updateById(updated_mmd_member, function (err, resMmd_member) {
            if (err)
                res.send(err);
            res.json(resMmd_member);
        })

        User.updateById(updated_user, function (err, resUser) {
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