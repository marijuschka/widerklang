<template>
  <div id="app">
    <!--
    <Header />
    <br />
    -->

    <!-- Familie & Freundschaft -->
    <div v-if="theme === 'red'">
      <b-row class="red-theme">
        <router-link to="/tablet" id="tablet">back</router-link>
      </b-row>
      <b-row class="red-theme">
        <b-col cols="4">
          <img class="stack" v-bind:src="stack[0].path" v-bind:alt="stack[0].path">
        </b-col>
        <b-col cols="4">
          <img class="stack" v-bind:src="stack[1].path" v-bind:alt="stack[1].path">
        </b-col>
        <b-col cols="4">
          <img class="stack" v-bind:src="stack[2].path" v-bind:alt="stack[2].path">
        </b-col>
      </b-row>
    </div>
    <!-- Heimat & Regionales -->
    <div v-else-if="theme === 'blue'">
      <h1>blue</h1>
    </div>
    <!-- Natur & Tiere -->
    <div v-else-if="theme === 'green'">
      <h1>green</h1>
    </div>
    <!-- Freizeit & Vergnügen -->
    <div v-else-if="theme === 'orange'">
      <h1>orange</h1>
    </div>
    <!-- Fehler -->
    <div v-else>
      <h1>kein Thema</h1>
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

<style>
.stack {
  height: 80%;
  width: auto;
  margin-top: 0px;
  padding-top: 50%;
}
.stack-pos-side {
  opacity: 0.5;
}
.red-theme {
  background-color: #db1644;
}
.blue-theme {
  background-color: #50a5eb;
}
.green-theme {
  background-color: #32a62e;
}
.orange-theme {
  background-color: #f2bc18;
}
</style>
