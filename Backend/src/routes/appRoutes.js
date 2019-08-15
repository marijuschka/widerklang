'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');
    var mmdController = require('../controllers/mmdController');
    var materialController = require('../controllers/materialController');
    var pflegerController = require('../controllers/pflegerController');
    var angehoerigerController = require('../controllers/angehoerigerController');

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



///////////////////////////////////Angehoeriger/////////////////////////////////////////////

        // Zugriff //

app.route('/angehoeriger/:angehoeriger_id')

                // UEBER ID AUF ANGEHOERIGEN ZUGREIFEN
        .get(angehoerigerController.get_a_angehoeriger)

                // LOESCHEN
        .delete(angehoerigerController.delete_a_angehoeriger);


app.route('/angehoeriger/')

                // ALLE ANGEHOERIGEN AUSGEBEN
        .get(angehoerigerController.get_all_angehoerigen)


        // Verwalten //

                // HINZUFUEGEN
        .post(angehoerigerController.create_a_angehoeriger)



                // BEARBEITEN
        .put(angehoerigerController.update_a_angehoeriger);


               


///////////////////////////////////Pfleger/////////////////////////////////////////////

        // Zugriff //
app.route('/pfleger/')

        // 
        //.get(pflegerController.get_all_pfleger)
        .post(pflegerController.create_a_pfleger);





///////////////////////////////////Angehoeriger/////////////////////////////////////////////
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



