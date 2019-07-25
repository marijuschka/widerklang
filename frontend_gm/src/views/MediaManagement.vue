<template>
    <div class="mediaManagement">
      <Header />
	  
      <!-- Zeilenumbruch funktioniert nicht. Das Wort "Medienverwaltung steht
      immer rechts vom Header anstatt darunter"
      <br /> -->

      <!-- Medienverwaltung -->
      <b-row align-v="center">
        <b-col offset="2" cols="5">
          <h1>Medienverwaltung</h1>
        </b-col>
      </b-row>

      <!-- Bildergalerie -->
      <ul id="galerie">
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Kölner Dom" />
          </button>
        </li>
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Freunde" />
          </button>
        </li>
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Tochter" />
          </button>
        </li>
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Bruder" />
          </button>
        </li>
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Ehefrau" />
          </button>
        </li>
        <li>
          <button tabindex="1">
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Sauerkraut" />
          </button>
        </li>
      </ul> 
    </div>

</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "mediaManagement",
  components: {
    Header
  }
};
</script>

<style >
li {
  display: inline-block;
  list-style-type: none;
  width: 45%;
}

img {
  padding: 0;
  margin: 0;
  width: 100%; /* Bild passt sich an verfügbaren Raum im li an */
}

button {
  padding: 0.1em;
}

/* Large screens */
@media all and (min-width: 35em) {
  li {
    width: 10em;
  }

  img {
    padding: 0;
    margin: 0;
    width: 100%; /* Bild passt sich an verfügbaren Raum im li an */
  }

  button {
    padding: 0.1em;
  }

  button:focus,
  button:hover {
    background: #09c;
  }
}
</style>
