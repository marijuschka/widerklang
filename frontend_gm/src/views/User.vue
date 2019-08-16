<template>
  <div class="user">
    <Header />
    <br />
    <b-row class="justify-content-center">
      <b-col cols="12" md="11">
        <b-row align-h="start">
          <b-col cols="auto">
            <b-button v-b-toggle.collapse-newMember variant="success">Neuen Angehörigen hinzufügen</b-button>
          </b-col>
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

    <div v-for="index in user.length">
      For Schleife funktioniert
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
                <!-- {{ user[index-1] }} -->
                <h3>{{user[index-1].username}} --> ID= {{user[index-1].id}} --> Role= {{user[index-1].role}}</h3>
              </b-col>

              <!-- buttons-->
              <b-col cols="5" md="6">
                <b-row>
                  <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                    <b-card-text>
                      <b-button v-b-toggle.collapse pill>Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="6" md="4" lg="2">
                    <b-card-text>
                      <!--  <b-button v-on:click="deleteUser(user[index-1]) pill variant="outline-danger"> -->
                      <b-button v-on:click="deleteMMD(XY)" pill variant="danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <!-- Collapse -->
            <div>
              <b-collapse id="collapse-editUser" class="mt-2">
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
                        v-on:click="editMember(xxyy)"
                        v-b-toggle.collapse-editUser-inner
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

    <b-row class="justify-content-center" id="UserSpalte">
      <b-col cols="12" md="11">
        <b-card no-body class="overflow-hidden">
          <!-- Hier ist die CENTER anweisung -->
          <b-row align-v="center" align-h="between" no-gutters>
            <!-- Bild -->
            <b-col cols="2" md="1">
              <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
            </b-col>
            <!-- Name -->
            <b-col cols="4">
              <!-- {{ user[index-1] }} -->
              <h3>Test Testen</h3>
            </b-col>

            <!-- buttons-->
            <b-col cols="5" md="7">
              <b-row>
                <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                  <b-card-text>
                    <b-button v-b-toggle.collapse-editUser pill>Bearbeiten</b-button>
                  </b-card-text>
                </b-col>
                <b-col cols="6" md="4" lg="2">
                  <b-card-text>
                    <!--  <b-button v-on:click="deleteUser(user[index-1]) pill variant="outline-danger"> -->
                    <b-button v-on:click="deleteUser(xxyy)" pill variant="danger">Entfernen</b-button>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- Collapse -->
          <div>
            <b-collapse id="collapse-editUser" class="mt-2">
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
                      v-on:click="editUser(xxyy)"
                      v-b-toggle.collapse-editUser-inner
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
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "user",
  components: {
    Header
  },
  data() {
    return {
      user: [],
      mmd: [],
      angehoerige: [],
      pfleger: [],

      newMember: {
        name: "",
        username: "",
        email: "test@web.de",
        password: "123",
        mmd_id: ""
      },
      newMMD: {
        name: "",
        age: ""
      },
      editedMember: {
        name: "",
        username: "",
        email: "",
        password: "",
        mmd_name: "",
        user_id: ""
      },

      password: "",
      xy: ""
    };
  },
  methods: {
    // add new Member/Angehoerigen to database
    addNewMember() {
      axios
        .post("http://139.6.102.67:8080/angehoeriger/", this.newMember)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.user = this.user.concat(this.newMember.name);
            // M.toast({
            //   html: "<b>Added new user @" + this.newUser.name + "</b>",
            //   classes: "green white-text"
            // });
            this.toggleElements("createUser");
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            M.toast({
              html: "<b>Could not add new user @" + this.newUser.name + "</b>",
              classes: "red white-text"
            });
          }
        });
    },
    // Add new Member
    addNewMember() {
      axios
        .post("http://139.6.102.67:8080/angehoeriger", this.newMember)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.user = this.user.concat(this.newMember.name);
            // M.toast({
            //   html: "<b>Added new user @" + this.newUser.name + "</b>",
            //   classes: "green white-text"
            // });
            this.toggleElements("createUser");
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            M.toast({
              html: "<b>Could not add new user @" + this.newUser.name + "</b>",
              classes: "red white-text"
            });
          }
        });
    },
    // Add New MMD to DB
    addNewMMD() {
      axios
        .post("http://139.6.102.67:8080/mmd", this.newMMD)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            // this.user = this.user.concat(this.newMember.name);
            // M.toast({
            //   html: "<b>Added new user @" + this.newUser.name + "</b>",
            //   classes: "green white-text"
            // });
            this.toggleElements("createUser");
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            M.toast({
              html: "<b>Could not add new user @" + this.newUser.name + "</b>",
              classes: "red white-text"
            });
          }
        });
    },
    // Edit Existing USER
    editMember(id) {
      axios
        .patch("http://139.6.102.67:8080/angehoeriger" + id, this.editedMember)
        .then(res => {
          if (res.status == 200) {
            M.toast({
              html:
                "<b>Edited user @" +
                document.getElementById("icon_editPassword" + id).placeholder +
                "</b>",
              classes: "green white-text"
            });
            this.toggleElements("editUser" + id);
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            M.toast({
              html: "<b>Could not edit user @" + this.editedUser.name + "</b>",
              classes: "red white-text"
            });
          }
        });
    },
    // Delete User with given ID
    deleteMMD(id) {
      console.log("delete User with ID: " + id);
      axios
        .delete("http://139.6.102.67:8080/mmd/" + id)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.user = this.user.filter(user => user !== id);
            //  M.toast({
            //   html: "<b>Deleted user @" + id + "</b>",
            //   classes: "green white-text"
            //  });
            //  var elem = document.getElementById(id);
            //  var instance = M.Modal.getInstance(elem);
            //  instance.close();
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            //  M.toast({
            //    html: "<b>Could not delete user @" + id + "</b>",
            //    classes: "red white-text"
            //  });
            console.log("Delete User with Error: " + err);
          }
        });
    }
  },
  created() {
    axios
      .get("http://139.6.102.67:8080/mmd")
      .then(res => {
        console.log(res.data);
        this.mmd = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Users: " + err));

    axios
      .get("http://139.6.102.67:8080/angehoeriger")
      .then(res => {
        console.log(res.data);
        this.angehoerige = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Users: " + err));
    axios
      .get("http://139.6.102.67:8080/pfleger")
      .then(res => {
        console.log(res.data);
        this.pfleger = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Users: " + err));
    axios
      .get("http://139.6.102.67:8080/users")
      .then(res => {
        console.log(res.data);
        this.user = res.data;
      })
      .catch(err => console.log("Hey! Axios error for Users: " + err));
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
