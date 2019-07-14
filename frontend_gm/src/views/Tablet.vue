<template>
  <div id="app">
    <div class="tablet">
      <Header />
      <br>
      HIER KOMMT DIE TABLET ANWENDUNG HIN
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
img{
  width:400px
}

</style>
