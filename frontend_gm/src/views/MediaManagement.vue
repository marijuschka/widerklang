<template>
  <div class="media-management">
    <my-header></my-header>
    <div class="container">
      <div class="image-sidebar">
        <div class="image-sidebar__button">Kategorie 1</div>
        <div class="image-sidebar__button">Kategorie 2</div>
        <div class="image-sidebar__button">Kategorie 3</div>
        <div class="image-sidebar__button">Kategorie 4</div>
      </div>
      <div class="image-grid">
        <div class="image-navbar">
          <button>Generisch</button>
          <button>Persönlich</button>
        </div>
        <div class="image-gallery">
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
.container {
  display: flex;
}

.image-sidebar {}

.image-sidebar__button {
  width: 100px;
  height: 100px;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.image-grid {
  width: 100%;
}

.image-gallery {
  width: 100%;
  overflow:auto;
   display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
    grid-gap: 20px;
}

.image-gallery__image {
    max-width: 150px;
    max-height: 150px;
}
</style> 