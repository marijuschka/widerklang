'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');
    var mmdController = require('../controllers/mmdController');
    var materialController = require('../controllers/materialController');
    var carerController = require('../controllers/carerController');
    var mmd_memberController = require('../controllers/mmd_memberController');

/*Hier schreiben wir später die Routen, die wir brauchen

Beispiel für alle user:*/
 app.route('/users/')
        .get(userController.get_all_users)
        .post(userController.create_a_user);

app.route('/login/')
        .post(userController.login_a_user);

app.route('/users/:user_id')
        .get(userController.get_a_user)
        .put(userController.update_a_user)

        // Token erst am ende implementieren
        .delete(userController.delete_a_user);



///////////////////////////////////Mmd_member/////////////////////////////////////////////

        // Zugriff //

app.route('/mmd_member/:mmd_member_id')

                // UEBER ID AUF Mmd_member ZUGREIFEN
        .get(mmd_memberController.get_a_mmd_member)

                // LOESCHEN
        .delete(mmd_memberController.delete_a_mmd_member);


app.route('/mmd_member/')

                // ALLE Mmd_member AUSGEBEN
        .get(mmd_memberController.get_all_mmd_member)


        // Verwalten //

                // HINZUFUEGEN
        .post(mmd_memberController.create_a_mmd_member)



                // BEARBEITEN
        .put(mmd_memberController.update_a_mmd_member);


               


///////////////////////////////////Carer/////////////////////////////////////////////

        // Zugriff //
app.route('/carer/')

        // 
        //.get(carerController.get_all_carer)
        .post(carerController.create_a_carer);





///////////////////////////////////Mmd /////////////////////////////////////////////
//Mensch mit Demenz MmD

// Es ist zu beachten, dass wenn ein MmD geloescht wird sich auch der gesamte Inhalt aus der Datenbank loescht, sprich:
// Alle Tabellen eintrege von Materialen etc. muessen auch geloescht werden

// Wird der MmD gelöscht wer
        
        // Zugriff //
app.route('/mmd/:mmd_id')
        .get(mmdController.get_a_mmd) 
        .delete(mmdController.delete_a_mmd); 


app.route('/mmd/')
        .get(mmdController.get_all_mmd)


        
        .post(mmdController.create_a_mmd);

//Material 
app.route('/material/:generic')
        .get(materialController.get_all_material)
        .post(materialController.create_a_material);
};



