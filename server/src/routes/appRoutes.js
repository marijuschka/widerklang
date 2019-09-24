'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');
    var mmdController = require('../controllers/mmdController');
    var materialController = require('../controllers/materialController');
    var carerController = require('../controllers/carerController');
    var mmd_memberController = require('../controllers/mmd_memberController');
    var genericController = require('../controllers/genericController');
    var familyController = require('../controllers/familyController');
    var freizeitController = require('../controllers/freizeitController');
    var heimatController = require('../controllers/heimatController');
    var natureController = require('../controllers/natureController');

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


app.route('/mmd_member/mmd/:mmd_id')
        // GET ALL MMD_MEMBER
        .get(mmd_memberController.get_all_mmd_member_by_mmd_id)

app.route('/mmd_member/')



        .get(mmd_memberController.get_all_mmd_member)


        // Verwalten //

                // CREATE A MMD_MEMBER
        .post(mmd_memberController.create_a_mmd_member)



                // UPDATE A MMD_MEMBER
        .put(mmd_memberController.update_a_mmd_member);


               


///////////////////////////////////Carer/////////////////////////////////////////////

        // Zugriff //
app.route('/carer/:carer_id')

                // GET A Carer BY ID
        .get(carerController.get_a_carer) 


                // DELETE
        .delete(carerController.delete_a_carer); 



app.route('/carer/')

                // GET ALL CARER
        .get(carerController.get_all_carer) 

        // Verwalten

                // CREATE A CARER
        .post(carerController.create_a_carer)

        
                // UPDATE A CARER
        .put(carerController.update_a_carer); 






///////////////////////////////////Mmd /////////////////////////////////////////////
//Mensch mit Demenz MmD

// Es ist zu beachten, dass wenn ein MmD geloescht wird sich auch der gesamte Inhalt aus der Datenbank loescht, sprich:
// Alle Tabellen eintrege von Materialen etc. muessen auch geloescht werden

app.route('/mmd/:mmd_name')
        .get(mmdController.get_a_mmd_by_mmd_name);
        
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
app.route('/material/:mmdid/:category')
        .get(materialController.get_all_material)
app.route('/material/')
        .post(materialController.upload_material);

app.route('/generic/:category')
        .get(genericController.get_all_generic)
app.route('/generic/')   
        .post(genericController.upload_generic);

 //Stack
app.route('/familie/:mmd_id/:display')
        .get(familyController.getStack);
app.route('/familie/')
        .post(familyController.set_to_stack);  

app.route('/natur/:mmd_id/:display')
        .get(natureController.getStack);
app.route('/natur/')
        .post(natureController.set_to_stack); 
app.route('/freizeit/:mmd_id/:display')
        .get(freizeitController.getStack);
app.route('/freizeit/')
        .post(freizeitController.set_to_stack); 
app.route('/regional/:mmd_id/:display')
        .get(heimatController.getStack); 
app.route('/regional/')
        .post(heimatController.set_to_stack);     
};

//page Views


