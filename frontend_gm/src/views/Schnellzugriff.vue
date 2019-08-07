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
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="6">
            <b-img
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
        <div class="container">
          <div class="row" >
            <div class="col 6 theme-frame">
              <router-link :to="{ path: '/tabletMedia', query: { theme: 'red' }}" id="tabletMedia">
                <a href="#" class>
                  <div class="col 6 theme-boxes red-theme">
                    <div class="row theme-position theme-position-red">
                      <img alt src="../assets/Familie-Icon.png" />
                      <h1 class="theme-text">
                        
                      </h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
            <div class="col 6 theme-frame">
              <router-link :to="{ path: '/tabletMedia', query: { theme: 'blue' }}" id="tabletMedia">
                <a href="#" class>
                  <div class="col 6 theme-boxes blue-theme">
                    <div class="row theme-position">
                      <img alt src="../assets/Heimat-Icon.png" />
                      <h1 class="theme-text">
                        
                      </h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col 2 theme-frame">
              <router-link
                :to="{ path: '/tabletMedia', query: { theme: 'green' }}"
                id="tabletMedia"
              >
                <a href="#" class>
                  <div class="col 6 theme-boxes green-theme">
                    <div class="row theme-position theme-position-green">
                      <img alt src="../assets/Natur-Icon.png" />
                      <h1 class="theme-text">
                        
                      </h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
            <div class="col 6 theme-frame">
              <router-link
                :to="{ path: '/tabletMedia', query: { theme: 'orange' }}"
                id="tabletMedia"
              >
                <a href="#" class>
                  <div class="col 6 theme-boxes orange-theme">
                    <div class="row theme-position">
                      <img alt src="../assets/Freizeit-Icon.png" />
                      <h1 class="theme-text">
                        
                      </h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
          </div>
        </div>
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
h2{
  margin-top: 30px;
}
.theme-boxes {
  height: 30vh;
  padding: 0;
  border-radius: 50px;
  box-shadow: 0px 5px 5px #303030;
}
.theme-frame {
  margin-top: 20px;
}
img{
  height: 150px;
  width: auto;
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
.links {
  line-height: 200px;
}
.theme-boxes {
  height: 30vh;
  padding: 0;
  border-radius: 50px;
  box-shadow: 0px 5px 5px #303030;
}
</style>
