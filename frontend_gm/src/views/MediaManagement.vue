<template>
  <div class="media-management">
    <my-header></my-header>
    {{this.oberkategorie}}
    <div class="container">
      <div class="image-sidebar">
        <button
          v-for="(kategorie, index) in kategorien"
          :key="index"
          class="btn-sidebar"
          @click="getKategorieImages(kategorie.farbe)"
          :style="!kategorie.selected ? 'opacity:0.5;' : ''"
        >
          <img
            id="sidebarImage1"
            :src="'/assets/' + kategorie.farbe + '.png'"
            alt
            class="image-sidebar__image"
          />
        </button>
      </div>
      <div class="image-grid">
        <div class="image-navbar">
          <button @click="setGenerisch">Generisch</button>
          <button @click="setPersoenlich">Persönlich</button>
        </div>
        <div class="image-gallery">
          <!-- upload -->
          <div class="upload">
            <input type="file" name="uploadFile" />
          </div>

          <img
            v-for="(image, index) in this.images"
            :key="index"
            :src="'/assets/' + image.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { METHODS } from "http";
import axios from "axios";

export default {
  name: "mediaManagement",
  data() {
    return {
      images: [],
      generisch: true,
      kategorien: [
        {
          name: "Kategorie 1",
          farbe: "rot",
          selected: false
        },
        {
          name: "Kategorie 2",
          farbe: "gruen",
          selected: false,

        },
        {
          name: "Kategorie 3",
          farbe: "gelb",
          selected: false
        },
        {
          name: "Kategorie 4",
          farbe: "blau",
          selected: false
        }
      ]
    };
  },
  computed: {
    oberkategorie() {
      return this.generisch ? "generic" : "persoenlich";
    }
  },
  mounted() {
    this.getKategorieImages("rot");
  },
  components: {
    "my-header": Header
  },
  methods: {
    setGenerisch() {
      this.generisch = true;
    },
    setPersoenlich() {
      this.generisch = false;
    },
    getKategorieImages(color) {
      this.kategorien.forEach(element => element.selected = false);
      let index = this.kategorien.findIndex(element => element.farbe === color);
      this.kategorien[index].selected = true;

      console.log(this.kategorien);
      console.log(`${color} Kategorie von ${this.oberkategorie}`);
      this.images = [
        {
          name: "Bild 1",
          path: `${color}.png`,
          kategorie: this.oberkategorie
        },
        {
          name: "Bild 2",
          path: `${color}.png`,
          kategorie: this.oberkategorie
        },
        {
          name: "Bild 3",
          path: `${color}.png`,
          kategorie: this.oberkategorie
        },
        {
          name: "Bild 4",
          path: `${color}.png`,
          kategorie: this.oberkategorie
        },
        {
          name: "Bild 5",
          path: `${color}.png`,
          kategorie: this.oberkategorie
        }
      ];
    }
  }
};
</script>




<style lang="css" scoped>
body {
  margin: 0;
}

.upload {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: 150px 150px; /* Skalierung vom Bild */
  background-image: url("../assets/plus.jpg");
}

.upload input {
  cursor: pointer;
  width: 100px;
  height: 100px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
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

#sidebarImage1 {
  opacity: 1;
}

.image-sidebar__image {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  opacity: 0.5;
}

.btn-sidebar {
  padding: 0;
  border: none;
  transition: 0.2s;
}

.btn-sidebar:focus {
  outline-style: none;
}

.btn-sidebar:hover {
  transform: scale(1.01);
}

.btn-sidebar img {
  margin: 0;
}

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
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
  grid-gap: 10px;
}

.image-gallery__image {
  max-width: 100px;
  max-height: 100px;
}
</style> 