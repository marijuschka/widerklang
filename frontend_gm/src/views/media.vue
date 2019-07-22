<template>
  <div id="app">
    <div class="media">
      <Header />
      <br>
      MEDIENVERWALTUNG
      <b-col cols="2" md="1">
              <b-card-img src="https://picsum.photos/id/870/200/300?grayscale&blur=2"></b-card-img>
              <b-card-img src="https://picsum.photos/id/870/200/300?grayscale&blur=2"></b-card-img>
              <b-card-img src="https://picsum.photos/id/870/200/300?grayscale&blur=2"></b-card-img>
              </b-col>
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
   width: 70px;
}

</style>
