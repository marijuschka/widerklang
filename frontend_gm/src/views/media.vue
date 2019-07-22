<template>
  <div id="app">
    <div class="media">
      <Header />
      <br>
      MEDIENVERWALTUNG
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "media",
  components: { 
    Header
  }
};
</script>

<style>
img{
  width:400px
}

</style>
