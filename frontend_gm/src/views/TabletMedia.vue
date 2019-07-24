<template>
  <div id="app">
    <div class="tabletMedia">
      <Header />
      <br />

      <!-- Würde hier dann eine Abfrage machen, welches Thema geklickt wurde und danach den passenden Inhalt auswählen -->
      <div class="container red-theme">
          <div class="row">
            <a href="/#/tablet">Back</a>
            <h1>Thema X</h1>
          </div>          
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
  }
};
</script>

<style>
img {
  width: 400px;
}
.red-theme {
  background-color: #DB1644;
}
.blue-theme {
  background-color: #50A5EB;
}
.green-theme {
  background-color: #32A62E;
}
.orange-theme {
  background-color: #F2BC18;
}
</style>
