'user strict';
var sql = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
//User object constructor
var User = function (id, user) {
    this.id = id;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
};

User.getAllUsers = function getAllUsers(result) {
    sql.query("SELECT * FROM user", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


User.createUser = function createUser(user, result) {
    sql.query("INSERT INTO user SET ?", user, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, user.id);
        }
    });
};


User.updateById = function updateById(input, role_id, result) {
    sql.query("UPDATE user SET username = ?, password = ?, email = ?  WHERE role_id = ?", [input.username, input.password, input.email, role_id], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.removeByRoleID = function removeByRolerID(id, result) {
    sql.query("DELETE FROM user WHERE role_id = ?", id, function (err, res) {

        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}


User.remove = function remove(id, result) {
    sql.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {

        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.login = function login(username, password, result) {
    sql.query("SELECT * FROM user WHERE username = ? ",
        [username], function (err, row, field) {
            if (err) {
                console.log(err);
                result(err, { 'token': false, 'message': 'Could not connect to db' })
            }
            if (row.length > 0) {
                if (bcrypt.compareSync(password, row[0].password)) {
                    const user = row[0];
                    if (user.role == 'Carer') {
                        sql.query("SELECT name FROM carer WHERE id = ?", user.role_id, function (err, res) {
                            if (err)
                                result(err);
                            carer = res[0];
                            const token = jwt.sign({
                                email: user.email,
                                userId: user.id,
                                username: user.username,
                                name: carer
                            }, 'my_secret_key');
                            result(null, {
                                'token': token,
                                'auth': true,
                                'userid': user.id,
                                'name': user.username,
                                'email': user.email,
                                'role': user.role,
                                'role_id': user.role_id,
                                'name': 'dummy'
                            });
                        });
                    }
                    else {
                        sql.query("SELECT name,mmd_id FROM mmd_member WHERE id = ?", user.role_id, function (err, res) {
                            if (err)
                                result(err);
                            member = res[0];
                            const token = jwt.sign({
                                email: user.email,
                                userId: user.id,
                                username: user.username,
                                name: member.name
                            }, 'my_secret_key');
                            result(null, {
                                'token': token,
                                'auth': true,
                                'userid': user.id,
                                'name': user.username,
                                'email': user.email,
                                'role': user.role,
                                'role_id': user.role_id,
                                'mmd_id': member.mmd_id
                            });
                        });
                    }
                }
                else {
                    result(null, { 'token': false, 'message': 'Username or password is not correct' });
                }
            }
            else {
                result(null, { 'token': false, 'message': 'Username or password is not correct' });
            }
        }
    );
}

module.exports = User;