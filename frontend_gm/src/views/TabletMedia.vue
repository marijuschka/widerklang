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
        <b-col cols="4">
          <img class="stack stack-pos-side" v-bind:src="stack[0].path" v-bind:alt="stack[0].path">
        </b-col>
        <!-- aktuelles Bild - startet Video bei anklicken wenn Video -->
        <b-col cols="4">
          <img class="stack" v-bind:src="stack[1].path" v-bind:alt="stack[1].path">
        </b-col>
        <!-- nächstes Bild -->
        <b-col cols="4">
          <img class="stack stack-pos-side" v-bind:src="stack[2].path" v-bind:alt="stack[2].path">
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "tablet",
  components: {
    Header
  },
  data() {
    return {
      theme: this.$route.query.theme,
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
        }
      ]
    };
  }
};
</script>

<style scoped>
#app {
  margin-top: 0px !important;
}
.top-row {
  height: 30vh;
}
#back-button {
  margin-top: 12vh;
  margin-left: 12vh;
}
.stack {
  height: 40vh;
  width: auto;
  margin-top: 0px;
  padding-top: 0%;
  padding-bottom: 0%;
}
.fill {
  height: 70vh;
}
.stack-pos-side {
  opacity: 0.7;
}
</style>
