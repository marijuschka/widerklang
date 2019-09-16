<template>
  <div id="tablet">
    <!--
    <Header />
    <br />
    -->

    <!-- Farbe ist abhängig von Thema - 'theme' wird ersetzt durch 'farbe'-theme -->
    <div>
      <b-row v-bind:class="theme" class="top-row">
        <router-link to="/tablet" id="tablet"><b-button class="" id="back-button">back</b-button></router-link>
      </b-row>
      <b-row v-bind:class="theme" class="fill">
        <!-- vorheriges Bild -->
        <b-col cols="4 reset-padding">
          <img class="stack stack-pos-side" @click="previousOnStack()" v-bind:src="stack[stackLeft].path" v-bind:alt="stack[stackLeft].path">
        </b-col>
        <!-- aktuelles Bild - startet Video bei anklicken wenn Video -->
        <b-col cols="4 reset-padding">
          <img class="stack stack-pos-middle" v-bind:src="stack[stackFocus].path" v-bind:alt="stack[stackFocus].path">
        </b-col>
        <!-- nächstes Bild -->
        <b-col cols="4 reset-padding">
          <img class="stack stack-pos-side" @click="nextOnStack()" v-bind:src="stack[stackRight].path" v-bind:alt="stack[stackRight].path">
        </b-col>
      </b-row>
      
    </div>
    <b-row class="trigger" @click="trigger()" v-bind:class="theme">
      <b-col col lg="9">
      </b-col>
      <b-col col lg="3">
        <router-link to="/mediaManagement" id="mediaManagement">
          <b-button class="switch-mode" v-if="seen === true"> Betreuer-Modus </b-button>
        </router-link>
      </b-col>
    </b-row>    

  </div>
</template>

<script>
import io from 'socket.io-client';
import axios from "axios";

export default {
  name: "tablet",
  components: {
  },
  data() {
    return {
      // Das momentane Themengebiet, was des Stack und die Farbe bestimmt
      theme: this.$route.query.theme,
      socket : io('http://139.6.102.67:8080'),  // on Server: 'http://139.6.102.67:8080'
      // Stack Positionen vom mittleren, linken und rechten Bild beim öffnen der Seite. 
      // Stack wird immer resetted wenn man auf TabletMedia geht,
      // vielleicht nicht ideal und globaler festlegen bzw. speichern wenn geändert.
      stackFocus: 1,
      stackLeft: 0,
      stackRight: 2,
      seen: false,

      /* Hier sollte dann der richtige Stack in Abhängigkeit der Themen und des Users geladen werden */
      stack: [
        {
          id: 1,
          path: "https://picsum.photos/id/40/400/400"
        },
        {
          id: 2,
          path: "https://picsum.photos/id/77/400/400"
        },
        {
          id: 3,
          path: "https://picsum.photos/id/200/400/400"
        },
        {
          id: 4,
          path: "https://picsum.photos/id/230/400/400"
        },
        {
          id: 5,
          path: "https://picsum.photos/id/250/400/400"
        }
      ]      
    };
  },
  methods: {
    previousOnStack: function() {
    // Verschiebt die Anwahl des Stacks um eine Stelle nach vorne/zurück , also schiebt die Bilder um einen nach rechts
      console.log('previousOnStack -> ');
      if (this.stackLeft === 0) {
        console.log('stackLeft reached beginning of Stack.');
        this.stackLeft = this.stack.length-1;
        this.stackFocus--;
        this.stackRight--;
      } 
      else if (this.stackFocus === 0) {
        console.log('stackFocus reached beginning of Stack.');
        this.stackLeft--;
        this.stackFocus = this.stack.length-1;
        this.stackRight--;
      } 
      else if (this.stackRight === 0) {
        console.log('stackRight reached beginning of Stack.');
        this.stackLeft--;
        this.stackFocus--;
        this.stackRight = this.stack.length-1;
      } 
      else {
        this.stackFocus--;
        this.stackLeft--;
        this.stackRight--;        
      }
      this.socket.emit('tvStack', this.stackFocus, {for: 'everyone'})
      console.log('stackFocus is at Stack Position: ' + this.stackFocus);
    },
    nextOnStack: function() {
    // Verschiebt die Anwahl des Stacks um eine Stelle nach hinten/weiter , also schiebt die Bilder um einen nach links
      console.log('nextOnStack -> ')
      if (this.stackRight === this.stack.length-1) {
        console.log('stackRight reached end of Stack.');
        this.stackLeft++;
        this.stackFocus++;
        this.stackRight = 0;
      } 
      else if (this.stackFocus === this.stack.length-1) {
        console.log('stackFocus reached end of Stack.');
        this.stackLeft++;
        this.stackFocus = 0;
        this.stackRight++;
      } 
      else if (this.stackLeft === this.stack.length-1) {
        console.log('stackLeft reached end of Stack.');
        this.stackLeft = 0;
        this.stackFocus++;
        this.stackRight++;
      } 
      else {
        this.stackFocus++;
        this.stackLeft++;
        this.stackRight++;        
      }
       this.socket.emit('tvStack', this.stackFocus, {for: 'everyone'})
      console.log('stackFocus is at Stack Position: ' + this.stackFocus);
    },
    trigger: function () {
      console.log('trigger');
      console.log(this.seen);
      this.seen = !this.seen;
    }
  },
  created:{
  fetchImages(){
        axios
            .get("http://139.6.102.67:8080/" + this.$route.query.theme + "/xxxxx" )
              .then(res => {
                console.log()
                this.images = res.data;
              })
              .catch(err =>
                console.log("Hey! Axios error for Created MMD_Member: " + err)
              );
    } 
}
}
</script>

<style scoped>
#app {
  margin-top: 0px !important;
}
.top-row {
  height: 26vh;
}
.reset-padding{
  padding: 0px;
}
#back-button {
  margin-top: 12vh;
  margin-left: 12vh;
}
.stack {  
  margin-top: 0px;
  padding-top: 0%;
  padding-bottom: 0%;
  box-shadow: 10px 10px 10px black;
}
.fill {
  height: 66vh;
}
.stack-pos-side {
  opacity: 0.5;
  height: 36vh;
  width: auto;
  margin-top: 4vh;
}
.stack-pos-middle{
  height: 44vh;
  width: auto;
}
.trigger{
  margin-top: 0; 
  height: 8vh;
}
.switch-mode{
  height: 6vh;
  margin-top: 1vh;
}
</style>
