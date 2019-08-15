<template>
  <div class="media-management">
    <my-header></my-header>
    <div class="container">
      <div class="image-sidebar">
        <img src='../assets/rot.png' alt="" class="image-sidebar__image">
        <img src='../assets/gruen.png' alt="" class="image-sidebar__image">
        <img src='../assets/gelb.png' alt="" class="image-sidebar__image">
        <img src='../assets/blau.png' alt="" class="image-sidebar__image">
      </div>
      <div class="image-grid">
        <div class="image-navbar">
          <button>Generisch</button>
          <button>Persönlich</button>
        </div>
        <div class="image-gallery">
          <img src='../assets/plus.jpg' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
          <img src='../assets/gelb.png' alt="" class="image-gallery__image">
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "mediaManagement",
  components: {
    'my-header': Header
  }
};
</script>

<style lang="css" scoped>



body {
    margin: 0;
}

.container {
  height: 95vh;
  padding: 100px;
  display: flex;
}

.image-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-sidebar__image {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}
/*  EVENTUELL NÖTIG WENN DIE SIDEBAR IMAGES ZU BUTTONS WERDEN
.image-sidebar__button {
  width: 150px;
  height: 150px;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
*/

.image-navbar {
  flex-basis: 50px;
}

.image-grid {
  width: 100%;
  padding-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-gallery {
  width: 100%;
  overflow:auto;
   display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
    grid-gap: 10px;
}

.image-gallery__image {
    max-width: 100px;
    max-height: 100px;
}


</style> 