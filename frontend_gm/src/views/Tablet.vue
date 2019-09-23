<template>
  <div id="app">
    <div class="tablet">
      <!--
      <Header />
      <br />
      -->

      <div class="container">
        <div class="row margin-top">
          <div class="col 6 theme-frame" v-on:click="greet('Familie')">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'red-theme' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes red-theme">
                  <div class="row theme-position theme-position-red">
                    <img alt="" src="../assets/Familie-Icon.png"/>
                    <h1 class="theme-text">Familie <br /> & Freundschaft</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div class="col 6 theme-frame" v-on:click="greet('Regional')">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'blue-theme' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes blue-theme">
                  <div class="row theme-position">
                    <img alt="" src="../assets/Heimat-Icon.png"/>
                    <h1 class="theme-text">Heimat <br /> & Regionales</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col 6 theme-frame" v-on:click="greet('Natur')">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'green-theme' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes green-theme">
                  <div class="row theme-position theme-position-green">
                    <img alt="" src="../assets/Natur-Icon.png"/>
                    <h1 class="theme-text">Natur <br /> & Tierwelt</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div class="col 6 theme-frame" v-on:click="greet('Freizeit')">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'orange-theme' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes orange-theme">
                  <div class="row theme-position">
                    <img alt="" src="../assets/Freizeit-Icon.png"/>
                    <h1 class="theme-text">Freizeit <br /> & Vergnügen</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>
      </div>

      <div>
        <b-row class="trigger" @click="trigger()">
          <b-col col lg="9">
          </b-col>
          <b-col col lg="3">
            <router-link to="/mediaManagement" id="mediaManagement">
              <b-button class="switch-mode" v-if="seen === true"> Betreuer-Modus </b-button>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

var data = {
        category: "",
        tv: [],
        bild1path: "bildpath1",
        bild2path: "bildpath2",
        bild3path: "bildpath3",
        mmd_id: localStorage.getItem("mmd_id")
    }
export default {
  name: "tablet",
  components: {
  }, 
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io('http://139.6.102.67:8080'),  //on Server: 'http://139.6.102.67:8080'
            seen: false
            
        }
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
        },
    greet: function (tmp){
    data.category = tmp;
    console.log(data.category);
    this.socket.emit('message', data, {for: 'everyone'})
			 }
    },
    trigger: function () {
      console.log('trigger');
      console.log(this.seen);
      this.seen = !this.seen;
    },
};
</script>

<style scoped>
img {
  height: 100px;
  width: auto;
}
.margin-top {
  margin-top: 15vh;
}
a:hover {
  text-decoration: None !important;
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
.theme-text {
  color: white;
  text-align: left;
  padding-left: 30px;
}
.theme-text:hover {
  color: pink;
  text-decoration: None !important;
}
.theme-position {
  padding-top: 8vh;
  padding-left: 6vw;
}
.theme-position-red {
  padding-left: 3vw !important;
}
.theme-position-green {
  padding-left: 8vw !important;
}
.trigger{ 
  height: 8vh;
  margin-top: 10vh;
}
</style>
