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

                // GET A MMD_MEMBER BY ID
        .get(mmd_memberController.get_a_mmd_member)

                // DELETE A MMD_MEMBER
        .delete(mmd_memberController.delete_a_mmd_member);


app.route('/mmd_member/')

                // GET ALL MMD_MEMBER
        .get(mmd_memberController.get_all_mmd_member)


        // Verwalten //

                // CREATE A MMD_MEMBER
        .post(mmd_memberController.create_a_mmd_member)



                // UPDATE A MMD_MEMBER
        .put(mmd_memberController.update_a_mmd_member);


               


///////////////////////////////////Carer/////////////////////////////////////////////

        // Zugriff //
app.route('/carer/:carer_id')

                // GET A USER BY ID
        .get(carerController.get_carer) 


                // DELETE
        .delete(carerController.delete_a_carer); 



app.route('/carer/')

                // GET ALL CARER
        //.get(carerController.get_all_carer) // TO BE IMPLEMENTED



        // Verwalten

                // CREATE A CARER
        .post(carerController.create_a_carer)

        
                // UPDATE A CARER
        .put(carerController.update_a_carer); 






///////////////////////////////////Mmd /////////////////////////////////////////////
//Mensch mit Demenz MmD

// Es ist zu beachten, dass wenn ein MmD geloescht wird sich auch der gesamte Inhalt aus der Datenbank loescht, sprich:
// Alle Tabellen eintrege von Materialen etc. muessen auch geloescht werden

        
        // Zugriff //
app.route('/mmd/:mmd_id')

                // GET A MMD BY ID
        .get(mmdController.get_a_mmd) 

                // DELETE A MMD AND ALL THE CONTENT
        .delete(mmdController.delete_a_mmd); 


app.route('/mmd/')

                // GET ALL MMD 
        .get(mmdController.get_all_mmd)


        // Manage

                // CREATE A MMD
        .post(mmdController.create_a_mmd)

                // UPDATE A MMD
        .put(mmdController.update_a_mmd);

//Material 
app.route('/material/:generic')
        .get(materialController.get_all_material)
        .post(materialController.create_a_material);
};



