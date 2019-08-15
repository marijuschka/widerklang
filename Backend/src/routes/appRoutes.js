'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');
    var mmdController = require('../controllers/mmdController');
    var materialController = require('../controllers/materialController');
    var pflegerController = require('../controllers/pflegerController');
    var genericController = require('../controllers/genericController');
    var familyController = require('../controllers/familyController');
    var angehoerigerController = require('../controllers/angehoerigerController');

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

//Angehoeriger
app.route('/angehoeriger/')
        .post(angehoerigerController.create_a_angehoeriger);
//Pfleger
app.route('/pfleger/')
        .post(pflegerController.create_a_pfleger);
//Mensch mit Demenz MmD
app.route('/mmd/')
        .get(mmdController.get_all_mmd)
        .post(mmdController.create_a_mmd);

//Material 

        
app.route('/material/')
        .get(materialController.get_all_material)
        .post(materialController.upload_material);

app.route('/generic/')
        .get(genericController.get_all_generic)
        .post(genericController.upload_generic);

 //Stack
 app.route('/familie/')
        .post(familyController.set_to_stack);       
};




