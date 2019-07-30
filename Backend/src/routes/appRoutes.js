'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');
    var mmdController = require('../controllers/mmdController');
    var materialController = require('../controllers/materialController');
    var pflegerController = require('../controllers/pflegerController');

/*Hier schreiben wir später die Routen, die wir brauchen

Beispiel für alle user:*/
 app.route('/users/')
        .get(userController.get_all_users)
        .post(userController.create_a_user);

 app.route('/users/')
        .get(userController.get_all_users)
        .post(userController.create_a_user);

app.route('/login/')
        .post(userController.login_a_user);

app.route('/users/:user_id')
        .get(userController.get_a_user)
        .put(userController.update_a_user)
        .delete(userController.delete_a_user);


//Pfleger
app.route('/pfleger/')
        .post(pflegerController.create_a_pfleger);
//Mensch mit Demenz MmD
app.route('/mmd/')
        .get(mmdController.get_all_mmd)
        .post(mmdController.create_a_mmd);

//Material 
app.route('/material/:generic')
        .get(materialController.get_all_material)
        .post(materialController.create_a_material);
};



