<template>
  <div class="schnellzugriff">
    <Header />

    <b-row class="justify-content-center">
      <!-- Linke Seite -->
      <b-col cols="5" id="links">
        <h2 id="konten">KONTEN</h2>
        <hr />
        <b-row class="justify-content-center">
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
        </b-row>
      </b-col>

      <div class="headerDivider"></div>

      <!-- Rechte Seite -->
      <b-col cols="5">
        <h2>MEDIEN</h2>
        <hr />
        <b-row class="justify-content-center">
          <b-col cols="6">
            <b-img
              rounded="0"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="0"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="0"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="0"
              thumbnail
              src="https://picsum.photos/300/150/?image=41"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "schnellzugriff",
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
        .post("http://139.6.102.67:8080/users", this.newUser)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.user = this.user.concat(this.newUser.name);
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
    // Delete User with given ID
    deleteUser(id) {
      console.log("delete User with ID: " + id);
      axios
        .delete("http://139.6.102.67:8080/users/" + id)
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
img {
  max-width: 100%;
  height: auto;
}
.UserSpalte {
  max-height: 100px;
}
h3 {
  font-weight: bold;
}
.headerDivider {
  border-left: 4px solid grey;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -2px;
  margin-top: 160px;
  top: 0;
}
.links{
  line-height: 200px;
}
</style>
