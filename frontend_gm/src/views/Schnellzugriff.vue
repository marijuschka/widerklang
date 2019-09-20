<template>
  <div class="schnellzugriff">
    <Header />

    <b-container class="container">
      <b-row class="justify-content-center">

        <!-- Linke Seite -->
        <b-col cols="12" sm="6" class="footroom" id="links">
          <router-link to="/user" id="user"><h2>NUTZER</h2></router-link>
          <hr />
          <h3>Schnellzugriff</h3>
          <b-row class="justify-content-center first-row">
            <b-col class="user-boxes left-box" cols="4">
              <img class="user-img" alt="" src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
            </b-col>
            <b-col class="user-boxes" cols="4">
              <img class="user-img" alt="" src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col class="user-boxes left-box" cols="4">
              <img class="user-img" alt="" src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
            </b-col>
            <b-col class="user-boxes" cols="4">
              <img class="user-img" alt="" src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
            </b-col>
          </b-row>
        </b-col>

        <!-- <div class="headerDivider"></div> -->

        <!-- Rechte Seite -->
        <b-col cols="12" sm="6" class="footroom" id="rechts">
          <img class="Media" alt="2" width="50%" src="../assets/Media.png"/>
          
          
          <hr />
          <h3>Schnellzugriff</h3>
          <b-row class="justify-content-center first-row">
            <b-col class="red-theme theme-boxes left-box" cols="4">
              <router-link to="/mediaManagement" id="mediaManagement">
                <img class="theme-img" alt="" src="../assets/Familie-Icon.png"/>
              </router-link>
            </b-col>
            <b-col class="blue-theme theme-boxes" cols="4">
              <router-link to="/mediaManagement" id="mediaManagement">
                <img class="theme-img" alt="" src="../assets/Heimat-Icon.png"/>
              </router-link>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col class="green-theme theme-boxes left-box" cols="4">
              <router-link to="/mediaManagement" id="mediaManagement">
                <img class="theme-img" alt="" src="../assets/Natur-Icon.png" />
              </router-link>
            </b-col>
            <b-col class="orange-theme theme-boxes" cols="4">
              <router-link to="/mediaManagement" id="mediaManagement">
                <img class="theme-img" alt="" src="../assets/Freizeit-Icon.png"/>
              </router-link>
            </b-col>
          </b-row>
        </b-col>

      </b-row>

    </b-container>
    
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
  methods: {},
  created() {}
};
</script>

<style scoped>
h2 {
  font-size: 2.4em;
  margin-top: 30px;
  margin-bottom: 30px;
}
h3 {
  font-size: 1.8em;
  margin-top: 12px;
  margin-bottom: 18px;
}
a:hover {
  text-decoration: None !important;
}
.theme-boxes {
  height: 20vh;
  width: 20vw;
  padding: 0;
  /* border-radius: 50px; */
  box-shadow: 0px 5px 5px #303030;
}
.user-boxes {
  height: 20vh;
  width: 20vw;
  padding: 0;
}
.left-box {
  margin-right: 5vh;
}
.theme-img {
  height: 15vh;
  width: auto;
  margin-top: 2.5vh;
}
.user-img {
  height: 100%;
  width: 100%;
  border-radius: 100px;
  box-shadow: 0px 5px 5px #303030;
}
.imgCenter {
  padding-top: 20px;
  padding-left: 30px;
}
.rounded {
  height: 200px;
  width: 200px;
}
.UserSpalte {
  max-height: 100px;
}
.headerDivider {
  border-left: 4px solid grey;
  height: 700px;
  position: absolute;
  left: 50%;
  margin-left: -2px;
  margin-top: 160px;
  top: 0;
}
.links {
  line-height: 200px;
}
.first-row {
  margin-bottom: 5vh;
}
.footroom {
  margin-bottom: 40px;
}
</style>
