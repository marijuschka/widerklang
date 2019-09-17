<template>
  <div class="media-management">
    <my-header></my-header>
    {{this.oberkategorie}}
    <div class="container">
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
            :src="'http://139.6.102.67:8080/' + image.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TabletMedia from "../components/TabletMedia.vue";
import axios from "axios";
import draggable from 'vuedraggable'
import Board from '../components/Board';
import Card from '../components/Card';


export default {
  name: "mediaManagement",
  data() {
    return {
      images: [],
      exampleList: ["material/familie.png", "material/familie.png", "material/familie.png", "material/familie.png", "material/familie.png"],
       exampleList2: ["test1", "test2", "test3", "test4"],
      generisch: true,
      currentCategory: "",
      kategorien: [
        {
          name: "Familie",
          farbe: "rot",
          selected: false
        },
        {
          name: "Natur",
          farbe: "gruen",
          selected: false,

        },
        {
          name: "Freizeit",
          farbe: "gelb",
          selected: false
        },
        {
          name: "Regional",
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
    this.fetchImages();
  },
  components: {
    "my-header": Header,
    "TabletMedia": TabletMedia,
     draggable,
     Board,
     Card
  },
  created(){
  
  },
  methods: {
    log: function(...e) {
      console.log(...e);
      },
    setGenerisch() {
      this.generisch = true;
      this.fetchImages();
      console.log(this.images)
    },
    setPersoenlich() {
      this.generisch = false;
      this.fetchImages();
    },
    getKategorieImages(color) {
      this.kategorien.forEach(element => element.selected = false);
      let index = this.kategorien.findIndex(element => element.farbe === color);
      this.kategorien[index].selected = true;
      this.currentCategory = this.kategorien[index].name;
      this.fetchImages();
    }, 
    fetchImages(){
    if(this.generisch == true){
        axios
            .get("http://139.6.102.67:8080/generic/"+ this.currentCategory)
              .then(res => {
                console.log()
                this.images = res.data;
              })
              .catch(err =>
                console.log("Hey! Axios error for Created MMD_Member: " + err)
              );
    } else{
       axios
            .get("http://139.6.102.67:8080/material/xxxxx/" + this.currentCategory)
              .then(res => {
                this.images = res.data;
              })
              .catch(err =>
                console.log("Hey! Axios error for Created MMD_Member: " + err)
              );
    }
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
/*test */
.bigger-area > span {
  min-height: 90vh;
  display: block;
}
.bigger-area2 > span {
  min-height: 90vh;
  margin-left: 100%;
  display: block;
}
.drag-item {
  padding: 15px 10px;
  background-color: whitesmoke;
  min-width: 30vw;
  max-width: 90vw;
  margin: 0 auto 10px;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  cursor: grab;
  transition: transform 0.25s cubic-bezier(0.02, 1.01, 0.94, 1.01);
  will-change: transform;
}
.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
} 
</style> 