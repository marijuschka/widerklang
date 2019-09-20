<template>
  <div class="Mmd">
    <Header />
    <br />
    <b-row class="justify-content-center">
      <b-col cols="12" md="11">
        <b-row align-h="start">
          <b-col cols="auto">
            <b-button
              v-b-toggle.collapse-newMMD
              variant="success"
            >Neuen Menschen mit Demenz hinzufügen</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
    <div>
      <b-row class="justify-content-center" id="addUser">
        <b-col cols="12" md="11">
          <b-collapse id="collapse-newMember" class="mt-2 collapse1">
            <b-card>
              <b-row align-v="center" class="justify-content-center">
                <b-col cols="2" md="1" lg="1">
                  <img
                    class="addUserIcon"
                    alt="newMember"
                    src="https://cdn.onlinewebfonts.com/svg/img_227643.png"
                  />
                </b-col>
                <b-col cols="11" md="3" lg="3">
                  <b-form-input v-model="newMember.name" placeholder="Name"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newMember.username" placeholder="Username"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newMember.email" placeholder="E-Mail"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newMember.password" placeholder="Password"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newMember.mmd_id" placeholder="mmd_id"></b-form-input>
                </b-col>
                <b-col cols="6" md="4" lg="2">
                  <!-- <b-col cols="auto"> -->
                  <b-button
                    v-on:click="addNewMember()"
                    v-b-toggle.collapse-newMember-inner
                    size="md"
                  >Nutzer hinzufügen</b-button>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </div>

    <div>
      <b-row class="justify-content-center" id="addUser">
        <b-col cols="12" md="11">
          <b-collapse id="collapse-newMMD" class="mt-2 collapse1">
            <b-card>
              <b-row align-v="center" class="justify-content-center">
                <b-col cols="2" md="1" lg="1">
                  <img
                    class="addUserIcon"
                    alt="newMMD"
                    src="https://cdn.onlinewebfonts.com/svg/img_227643.png"
                  />
                </b-col>
                <b-col cols="11" md="3" lg="3">
                  <b-form-input v-model="newMMD.name" placeholder="Name"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newMMD.age" placeholder="Alter"></b-form-input>
                </b-col>
                <b-col cols="6" md="4" lg="2">
                  <!-- <b-col cols="auto"> -->
                  <b-button
                    v-on:click="addNewMMD()"
                    v-b-toggle.collapse-newMember-inner
                    size="md"
                  >Nutzer hinzufügen</b-button>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </div>
    <!--  Dynamisches Erzeugen der User Liste -->

    <div v-for="index in mmd.length">
      <b-row class="justify-content-center userlist" id="UserSpalte">
        <b-col cols="12" md="11">
          <b-card no-body class="overflow-hidden">
            <!-- Hier ist die CENTER anweisung -->
            <b-row align-v="center" align-h="between" no-gutters>
              <!-- Bild -->
              <b-col cols="2" md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
              </b-col>
              <!-- Name -->
              <b-col cols="5">
                <h3>Name: {{mmd[index-1].name}}, Alter: {{mmd[index-1].age}}</h3>
              </b-col>

              <!-- buttons-->
              <b-col cols="5" md="6">
                <b-row>
                  <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                    <!--<b-button v-b-modal="'edit-modal-'+mmd[index-1].mmd_id" pill>Angehoerige</b-button> -->
                     <b-button v-on:click="editMMD(mmd[index-1].id)" pill>Angehoerige</b-button>
                    <!-- Pop-Up zur Delete Anfrage -->
                    <b-modal
                      @ok="editMMD(mmd[index-1].id)"
                      v-bind:id="'edit-modal-'+mmd[index-1].id"
                      title="MMD bearbeiten"
                    >
                      <p class="my-4">Dies sind die Angehoerigen von {{mmd[index-1].name}}:</p>
                    </b-modal>
                  </b-col>
                  <b-col cols="6" md="4" lg="2">
                    <b-card-text>
                      <!--  <b-button v-on:click="deleteUser(user[index-1]) pill variant="outline-danger"> -->
                      <b-button
                        v-b-modal="'delete-modal-'+mmd[index-1].id"
                        pill
                        variant="danger"
                      >Entfernen</b-button>
                      <!-- Pop-Up zur Delete Anfrage -->
                      <b-modal
                        @ok="deleteMMD(mmd[index-1].id)"
                        v-bind:id="'delete-modal-'+mmd[index-1].id"
                        title="MMD entfernen"
                      >
                        <p class="my-4">Soll {{mmd[index-1].name}} gelöscht werden?</p>
                      </b-modal>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <!-- Collapse -->
            <div>
              <!--id="collapse-editUser" -->
              <b-collapse v-bind:id="'collapse-edit-'+mmd[index-1].id" class="mt-2">
                <b-card>
                  <b-row class="justify-content-center">
                    <b-col cols="4" md="3">
                      <b-form-input v-model="password" placeholder="Neues Passwort"></b-form-input>
                    </b-col>
                    <b-col cols="4" md="3">
                      <b-form-input v-model="xy" placeholder="Neue XY"></b-form-input>
                    </b-col>
                    <b-col cols="2" md="2">
                      <b-button
                        v-on:click="editMMD(mmd[index-1].id)"
                        v-b-toggle="'collapse-edit-'+mmd[index-1].id"
                        size="md"
                      >Ändern!</b-button>
                    </b-col>
                  </b-row>
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "mmd",
  components: {
    Header
  },
  data() {
    return {
      member: [],
      mmd: [],
      carer: [],

      newMember: {
        name: "",
        username: "",
        email: "test@web.de",
        password: "123",
        id: "1234"
      },
      editedMember: {
        name: "",
        username: "",
        email: "",
        password: "",
        mmd_name: "",
        user_id: ""
      },
      newMMD: {
        name: "",
        age: ""
      },
      editedMMD: {
        name: "",
        age: ""
      },

      password: "",
      xy: ""
    };
  },
  methods: {
    // Add new Member
    addNewMember() {
      axios
        .post("http://139.6.102.67:8080/mmd_member/", this.newMember)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.member = this.member.concat(this.newMember);
            // this.toggleElements("createUser");
          }
        })
        .catch(err => console.log("Hey! Axios error for addNewMember: " + err));
    },
    // Add New MMD to DB
    addNewMMD() {
      axios
        .post("http://139.6.102.67:8080/mmd", this.newMMD)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.mmd = this.mmd.concat(this.newMMD);
          }
        })
        .catch(err => console.log("Hey! Axios error for addNewMMD: " + err));
    },
    // Edit Existing USER
    editMMD(id,name) {
      this.$router.push('/member?id='+id)
     // axios
        // Funktioniert noch nicht da Router was anderes vorsieht
      //  .put("http://139.6.102.67:8080/mmd/" + id, this.editedMMD)
      //  .then(res => {
       //   if (res.status == 200) {
        //    M.toast({
         //     html:
          //      "<b>Edited user @" +
           //     document.getElementById("icon_editPassword" + id).placeholder +
            //    "</b>",
             // classes: "green white-text"
            //});
            //this.toggleElements("editUser" + id);
          //}
        //})
        //.catch(err => console.log("Hey! Axios error for editMember: " + err));
    },
    // Delete User with given ID
    deleteMMD(id) {
      console.log("delete MmD with ID: " + id);
      axios
        .delete("http://139.6.102.67:8080/mmd/" + id)
        .then(res => {
          console.log(res);
          this.mmd = this.mmd.filter(mmd => mmd.id !== id);
        })
        .catch(err => console.log("Hey! Axios error for deleteMMD: " + err));
    }
  },
  created() {
    axios
      .get("http://139.6.102.67:8080/mmd/")
      .then(res => {
        console.log("MMD: ");
        console.log(res.data);
        this.mmd = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Created MMD: " + err));

    axios
      .get("http://139.6.102.67:8080/mmd_member/")
      .then(res => {
        console.log("Mmd_Member: ");
        console.log(res.data);
        this.member = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );

    axios
      .get("http://139.6.102.67:8080/carer/")
      .then(res => {
        console.log("Carer: ");
        console.log(res.data);
        this.carer = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Created Carer: " + err));
  }
};
</script>

<style scoped>
.collapse1 {
  margin-bottom: 10px;
}
.addUserIcon {
  width: 40px;
}
.userlist {
  margin-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
}
.NewUser {
  height: 200px;
}
.UserSpalte {
  max-height: 100px;
}
h3 {
  font-weight: bold;
}
</style>
