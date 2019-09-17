<template>
  <div class="Member">
    <Header />
    <br />
    <b-row class="justify-content-center">
      <b-col cols="12" md="11">
        <b-row align-h="start">
          <b-col cols="auto">
            <router-link to="/mmd" id="mmd"><b-button variant="success">Zurück</b-button>
         </router-link> </b-col>
        </b-row>
      </b-col>
    </b-row>

    <h2>Angehoerige von {{mmd_id}}</h2>
     <b-col cols="auto">
            <b-button v-b-toggle.collapse-newMember variant="success">Neuen Angehörigen hinzufügen</b-button>
          </b-col>
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
    <br />

    <!--  Dynamisches Erzeugen der User Liste -->

    <div v-for="index in member.length">
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
                <h3>Name: {{member[index-1].name}}, Alter: {{member[index-1].username}}</h3>
              </b-col>

              <!-- buttons-->
              <b-col cols="5" md="6">
                <b-row>
                  <!-- Bearbeiten von Angehoerigen-->
                  <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                    <b-card-text>
                      <b-button v-b-toggle="'collapse-edit-'+member[index-1].name" pill>Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="6" md="4" lg="2">
                    <b-card-text>
                      <!--  <b-button v-on:click="deleteUser(user[index-1]) pill variant="outline-danger"> -->
                      <b-button
                        v-b-modal="'delete-modal-'+member[index-1].name"
                        pill
                        variant="danger"
                      >Entfernen</b-button>
                      <!-- Pop-Up zur Delete Anfrage -->
                      <b-modal
                        @ok="deleteMember(member[index-1].mmd_id)"
                        v-bind:id="'delete-modal-'+member[index-1].name"
                        title="Angehoeriger entfernen"
                      >
                        <p class="my-4">Soll {{member[index-1].name}} gelöscht werden?</p>
                      </b-modal>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <!-- Collapse -->
            <div>
              <!--id="collapse-editUser" -->
              <b-collapse v-bind:id="'collapse-edit-'+member[index-1].name" class="mt-2">
                <b-card>
                  <b-row class="justify-content-center">
                    <b-col cols="4" md="3">
                      <b-form-input v-model="editedMember.password" placeholder="Neues Passwort"></b-form-input>
                    </b-col>
                    <b-col cols="4" md="3">
                      <b-form-input v-model="editedMember.email" placeholder="Neue EMail"></b-form-input>
                    </b-col>
                    <b-col cols="2" md="2">
                      <b-button
                        v-on:click="editMember(member[index-1].username)"
                        v-b-toggle="'collapse-edit-'+member[index-1].username"
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
  name: "member",
  components: {
    Header
  },
  data() {
    return {
      member: [],
      mmd:'',
      mmd_id: this.$route.query.id,

      newMember: {
        name: "",
        username: "",
        email: "test@web.de",
        password: "123",
        mmd_id: "1234"
      },
      editedMember: {
        angehoeriger_id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        mmd_name: "",
        user_id: ""
      }
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
    // Edit Existing USER
    editMember(id) {
      axios
        .put("http://139.6.102.67:8080/mmd_member/" + id, this.editedMember)
        .then(res => {
          console.log("Member mit ID " + id + " wurde bearbeitet.");
          console.log(res);
        })
        .catch(err => console.log("Hey! Axios error for editMember: " + err));
    },
    // Delete Existing USER
    deleteMember(id) {
      axios
        .delete("http://139.6.102.67:8080/mmd_member/" + id)
        .then(res => {
          console.log("Member mit ID " + id + " wurde entfernt.");
          console.log(res);
          this.member = this.member.filter(member => member.mmd_id !== id);
        })
        .catch(err => console.log("Hey! Axios error for deleteMember: " + err));
    }
  },
  created() {
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
      .get("http://139.6.102.67:8080/mmd/"+this.mmd_id)
      .then(res => {
        console.log("Get this mmd: "+this.mmd_id);
        console.log(res.data);
        this.mmd = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
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
