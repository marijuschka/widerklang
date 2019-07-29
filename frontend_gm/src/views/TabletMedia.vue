<template>
  <div id="app">
    <div class="tabletMedia">
      <Header />
      <br />

      <!-- Würde hier dann eine Abfrage machen, welches Thema geklickt wurde und danach den passenden Inhalt auswählen -->
      <div class="container red-theme">
        <div class="row">
          <a href="/#/tablet">Back</a>
          <h1>{{this.$route.query.theme}}</h1>
        </div>
      </div>

      <div v-if="theme === 'red'">
        <h1>red</h1>
      </div>
      <div v-else-if="theme === 'blue'">
        <h1>blue</h1>
      </div>
      <div v-else-if="theme === 'green'">
        <h1>green</h1>
      </div>
      <div v-else-if="theme === 'orange'">
        <h1>orange</h1>
      </div>
      <div v-else>
        <h1>kein Thema</h1>
      </div>
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
      theme: this.$route.query.theme
    };
  }
};
</script>

<style>
img {
  width: 400px;
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
