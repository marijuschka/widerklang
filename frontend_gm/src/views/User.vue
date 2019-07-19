<template>
  <div class="user">
    <Header />
    <br />
    <b-row align-v="center">
      <b-col offset="2" cols="5">
    <h1>Das wird die Nutzer Verwaltung</h1>
      </b-col>
    <b-col cols="3">
    <b-button variant="success">Neuen Nutzer hinzufügen</b-button>
    </b-col>
    </b-row>
    <br />

    <!--  Dynamisches Erzeugen der User Liste
      <div v-for="index in user.length"> -->
    <div>
      <b-row class="justify-content-md-center">
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
                <!-- {{ user[index-1] }} --> <h3>Emma Emersson</h3></b-col>

              <!-- buttons-->
              <b-col cols="6" md="7">
                <b-row >
                  <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                    <b-card-text>
                      <b-button pill>Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="6"  md="4" lg="2">
                    <b-card-text>
                      <!--  <b-button v-on:click="deleteUser(user[index-1]) pill variant="outline-danger">-->
                      <b-button pill variant="danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
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
  name: "user",
  components: {
    Header
  },
  data() {
    return {
      user: [],
      newUser: { name: "", password: "" }
    };
  },
  methods: {
     // add new User to databank with a username
    addNewUser() {
      axios
        .post("/users", this.newUser)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.user = this.user.concat(this.newUser.name);
            M.toast({
              html: "<b>Added new user @" + this.newUser.name + "</b>",
              classes: "green white-text"
            });
            this.toggleElements('createUser');
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
    // Delete User with given ID
    deleteUser(id) {
      console.log("delete User with ID: " + id);
      axios
        .delete("users/" + id)
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
    },
  },
  created() {
    axios
      .get("http://139.6.102.67/api/users")
      .then(res => {
        this.user = res.data;
        console.log(res.data);
      })
      .catch(err => console.log("Axios error for events: " + err));
  }
};
</script>

<style scoped>

img {
  max-width: 100%;
  height: auto;
}
</style>
