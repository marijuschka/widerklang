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

User.getUserById = function getUserById(userId, result) {
    sql.query("SELECT * FROM user WHERE id = ?", userId, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
        }
    });
};

User.getUserByMmd_memberId = function getUserByMmd_memberId(mmd_member_id,result) {
    sql.query("SELECT * FROM user WHERE role_id = ?",mmd_member_id, function (err,res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res[0]);
        }
    });
}

User.updateById = function updateById(input, result) {
    sql.query("UPDATE user SET username = ?, password = ?, email = ?  WHERE id = ?", [input.username, input.password, input.email, input.id], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

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

User.login = function login(username, password, result){
    sql.query("SELECT * FROM user WHERE username = ? ",
    [username], function (err, row, field){
        if (err){
            console.log(err);
            result(err, { 'token': false, 'message': 'Could not connect to db'})
        }
        if(row.length > 0)     
       {
        if(bcrypt.compareSync(password, row[0].password)){
            const user = row[0];
            const token = jwt.sign({
                                    email: user.email,
                                    userId: user.id,
                                    username: user.username
                                    }, 'my_secret_key');
            result(null, {'token': token, 
                          'auth': true,          
                          'userid': user.id,
                          'name': user.username,
                          'email': user.email,
                          'role': user.role,
                          'role_id': user.role_id,
                          'name': 'dummy'});
        } else{
            result(null, {'token': false, 'message': 'Username or password is not correct'});
        }
    }
        else{
            result(null, {'token': false, 'message': 'Username or password is not correct'});
        }
    }
    );
}

module.exports = User;