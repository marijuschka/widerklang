<template>
  <div class="media-management">
    <my-header></my-header>
    <div class="container">
      <div class="image-sidebar">
        <img src='../../public/rot.png' alt="" class="image-gallery__image">
        <img src='../../public/gruen.png' alt="" class="image-gallery__image">
        <img src='../../public/gelb.png' alt="" class="image-gallery__image">
        <img src='../../public/blau.png' alt="" class="image-gallery__image">
      </div>
      <div class="image-grid">
        <div class="image-navbar">
          <button>Generisch</button>
          <button>Persönlich</button>
        </div>
        <div class="image-gallery">
          <img src='../../public/gelb.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
          <img src='../../public/WiderklangLogo.png' alt="" class="image-gallery__image">
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
  height: 100vh;
  padding: 100px;
  display: flex;
}

.image-sidebar {
 display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.image-sidebar__image {
    margin-bottom: 10px;
}

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
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
    grid-gap: 20px;
}

.image-gallery__image {
    max-width: 100px;
    max-height: 100px;
}


</style> 