'use strict';

var User = require('../models/userModel.js');
//var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 10);
}


exports.get_all_users = function (req, res) {
 /*   ensureToken(req, res);
    jwt.verify(req.token, 'my_secret_key', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {*/
            User.getAllUsers(function (err, users) {
                if (err)
                    res.send(err);
                res.send(users);
            });
   /*     }
    })*/
};



exports.create_a_user = function (req, res) {
    var user_id = generateUniqueId();
    var user = {
        id: user_id,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        mmd_id: generateUniqueId()
      //  profile_img: req.body.profile_img
    }
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    //handles null error 
    if (!user.username || !user.password || !user.email || !user.role) {
        res.status(400).send({ error: true, message: 'Please provide all necessary fields!' });
    }
    else {

        User.createUser(user, function (err, resUser) {
            if (err)
                res.send(err);
            res.json(resUser);
        });
    }
};

exports.get_a_user = function (req, res) {
      User.getUserById(req.params.user_id, function (err, user) {
                if (err) {
                    res.send(err);
                }
                else if (user == null) {
                    res.send("User does not exist!");
                } else {
                    res.json(user);
                }
            });
        };

 exports.update_a_user = function (req, res) {
                var updated_user = {
                        id: req.params.user_id,
                        username: req.body.username,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                        profile_img: req.body.profile_img,
                        role: req.body.role
                    }
                    User.updateById(updated_user, function (err, user) {
                        if (err) {
                            res.send(err);
                        } else if (user == null) {
                            res.send("User does not exist!");
                        } else {
                            res.json(user);
                        }
                    });
                };

 exports.delete_a_user = function (req, res) {
                    ensureToken(req, res);
                    jwt.verify(req.token, 'my_secret_key', function (err, data) {
                        if (err) {
                            res.sendStatus(403);
                        } else {
                            User.remove(req.params.user_id, function (err, user) {
                                if (err)
                                    res.send(err);
                                res.json({ message: 'User successfully deleted' });
                            });
                        };
                    });
                }

   exports.login_a_user = function (req, res) {
         User.login(req.body.username, req.body.password, function (err, authRes) {
             if (err)
                res.send(err);
                res.send(authRes)
            });
    }