<template>
  <div id="app">
    <div class="home">
      <Header />
      <br/>
      <img alt="Vue logo" src="../assets/WiderKlang_Bild_Marke_2.png" />
      <br/>
      <br>
      HOMEPAGE VON WIDERKLANG --> TESTPHASE
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "home",
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
