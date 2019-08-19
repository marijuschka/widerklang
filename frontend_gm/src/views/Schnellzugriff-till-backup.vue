<template>
  <div class="schnellzugriff">
    <Header />

    <b-row class="justify-content-center">
      <!-- Linke Seite -->
      <b-col cols="5" id="links">
        <router-link to="/user" id="user"><h2 id="konten">NUTZER</h2></router-link>
        
        <hr />

        <h3>Schnellzugriff</h3>
        <b-row class="justify-content-center">
          <b-col cols="4">
            <b-img
              class="rounded"
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="4">
            <b-img
            class="rounded"
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
        </b-row>
        <br>
        <b-row class="justify-content-center">
          <b-col cols="4">
            <b-img
            class="rounded"
              rounded="circle"
              thumbnail
              src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              fluid
              alt="Fluid image"
            ></b-img>
          </b-col>
          <b-col cols="4">
            <b-img
            class="rounded"
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
        <router-link to="/mediaManagement" id="mediaManagement"><h2 id="konten">MEDIEN</h2></router-link>
        <hr />
        <h3>Schnellzugriff</h3>
        <div class="container">
          <div class="row" align="center">
            <!-- Zur Zentrieerung -->
            <div class="col-2"> </div>
            <div class="col-4 theme-frame">
              <router-link :to="{ path: '/tabletMedia', query: { theme: 'red' }}" id="tabletMedia">
                <a href="#" class>
                  <div class="col 6 theme-boxes red-theme">
                    <div class="row theme-position theme-position-red imgCenter">
                      <img  alt src="../assets/Familie-Icon.png" />
                      <h1 class="theme-text"></h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
            <div class="col-4 theme-frame">
              <router-link :to="{ path: '/tabletMedia', query: { theme: 'blue' }}" id="tabletMedia">
                <a href="#" class>
                  <div class="col 6 theme-boxes blue-theme">
                    <div class="row theme-position imgCenter">
                      <img alt src="../assets/Heimat-Icon.png" />
                      <h1 class="theme-text"></h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
          </div>
          <br>
          <div class="row" align="center">
            <!-- Zur Zentrieerung -->
            <div class="col-2"> </div>
            <div class="col-4 theme-frame">
              <router-link
                :to="{ path: '/tabletMedia', query: { theme: 'green' }}"
                id="tabletMedia"
              >
                <a href="#" class>
                  <div class="col 6 theme-boxes green-theme">
                    <div class="row theme-position theme-position-green imgCenter">
                      <img alt src="../assets/Natur-Icon.png" />
                      <h1 class="theme-text"></h1>
                    </div>
                  </div>
                </a>
              </router-link>
            </div>
            <div class="col-4 theme-frame">
              <router-link
                :to="{ path: '/tabletMedia', query: { theme: 'orange' }}"
                id="tabletMedia"
              >
                <a href="#" class>
                  <div class="col 6 theme-boxes orange-theme">
                    <div class="row theme-position imgCenter">
                      <img alt src="../assets/Freizeit-Icon.png" />
                      <h1 class="theme-text"></h1>
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
  methods: {},
  created() {}
};
</script>

<style scoped>
h2 {
  font-size: 350%;
  margin-top: 100px;
  margin-bottom: 50px;
}
h3 {
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 20px;
}
.theme-boxes {
  height: 20vh;
  width: 20vh;
  padding: 0;
  /* border-radius: 50px; */
  box-shadow: 0px 5px 5px #303030;
}
img {
  height: 160px;
  width: 160px;
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
</style>
