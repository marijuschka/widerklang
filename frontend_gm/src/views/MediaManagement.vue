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
         <div>
          <b-button v-b-modal.modal-1><div class="upload">
            
          </div>
    </b-button>

  <b-modal id="modal-1" title="Image Upload">  
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState" label="Titel" label-for="name-input" invalid-feedback="Name is required">
          <b-form-input id="name-input" v-model="name" :state="nameState" required>
        </b-form-input>
        </b-form-group>
         <b-form-group :state="nameState" label="Nachricht" label-for="name-input" invalid-feedback="Name is required">
          <b-form-input id="name-input" v-model="name" :state="nameState" required>
        </b-form-input>
        </b-form-group>
      </form>
    <input type="file" name="uploadFile" />
  </b-modal>
</div>
         
         <!-- <v-flex> <Popup /></v-flex>
          <Popup /> -->
          
   
      
      <draggable
        class="dragArea list-group"
        :list="images"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change=""
      >
        <div
          class="list-group-item"
          v-for="element in images"
          :key="element.id"
        >
         <img
            :key="index"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
      </div>
        
         <div class="col-3">
     
      </div>
    </div>
      <div class="col-3 dragArea">
       <h3>Fernseher</h3>
      <draggable
        class="dragArea list-group"
        :list="tv"
        group="people"
        @change="setTV()"
      >
          <div class="list-group-item" v-for="element in tv" :key="element.id">
            <img
              :key="index"
              :src="'http://139.6.102.67:8080/' + element.path"
              alt="123"
              class="image-gallery__image"
            />
          </div>
        </draggable>
      <h2>Bilderwand</h2>
      <h3>Bild1</h3>
      <draggable
        class="dragArea list-group"
        :list="bild1"
        group="people"
        @change="setBild(1)"
      >
        <div
          class="list-group-item"
          v-for="element in bild1"
          :key="element.id"
        >
            <img
            :key="index"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
            <h3>Bild2</h3>
      <draggable
        class="dragArea list-group"
        :list="bild2"
        group="people"
        @change="setBild(2)"
      >
        <div
          class="list-group-item"
          v-for="element in bild2"
          :key="element.id"
        >
            <img
            :key="index"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
            <h3>Bild3</h3>
      <draggable
        class="dragArea list-group"
        :list="bild3"
        group="people"
        @change="setBild(3)"
      >
        <div
          class="list-group-item"
          v-for="element in bild3"
          :key="element.id"
        >
            <img
            :key="index"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
import Header from "../components/Header.vue";
import axios from "axios";
import draggable from "vuedraggable";
/*
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})
*/
export default {
  components: { Popup },
  name: "mediaManagement",
  data() {
    return {
      images: [],
      tv: [],
      bild1: [],
      bild2: [],
      bild3: [],
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
          selected: false
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
    draggable
  },
  created() {
    axios
      .get("http://139.6.102.67:8080/" + this.currentCategory + "xxxxx")
      .then(res => {
        console.log();
        this.tv = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
  },
  methods: {
    setGenerisch() {
      this.generisch = true;
      this.fetchImages();
      console.log(this.images);
    },
    setPersoenlich() {
      this.generisch = false;
      this.fetchImages();
    },
    getKategorieImages(color) {
      this.kategorien.forEach(element => (element.selected = false));
      let index = this.kategorien.findIndex(element => element.farbe === color);
      this.kategorien[index].selected = true;
      this.currentCategory = this.kategorien[index].name;
      this.fetchImages();
    },
     setTV(){
      var image = {
        mmd_id: "xxxxx",
        relation: "generisch",
        materials_id: this.tv[0].id,
        display: 0,
        stacknr: 0
      }
      axios
      .post("http://139.6.102.67:8080/familie", image)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log("Hey! Axios error for editMember: " + err));
    },
    setBild(tmp){
      var bild;
      if(tmp == 1){
        bild = this.bild1[0].id;
      } else if(tmp == 2) {
        bild = this.bild2[0].id;
      }else if(tmp == 3) {
        bild = this.bild3[0].id;
      }
      var image = {
        mmd_id: "xxxxx",
        relation: "generisch",
        materials_id: bild,
        display: tmp,
        stacknr: 0
      }
      axios
      .post("http://139.6.102.67:8080/familie", image)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log("Hey! Axios error for editMember: " + err));
    },
    fetchImages() {
      if (this.generisch == true) {
        axios
          .get("http://139.6.102.67:8080/generic/" + this.currentCategory)
          .then(res => {
            console.log();
            this.images = res.data;
          })
          .catch(err =>
            console.log("Hey! Axios error for Created MMD_Member: " + err)
          );
      } else {
        axios
          .get(
            "http://139.6.102.67:8080/material/xxxxx/" + this.currentCategory
          )
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

.dragArea list-group {
  width: 200px;
  height: 300px;
  border-width: 1em;
  border-color:black;
  background: brown;
  background-color: brown;
  max-width: 20px;
  max-height: 200px;
}

.list-group-item {
border: 0;
float: left;
}

.dragArea list-group {
  width: 120px;
  height: 120px;
}

.col-3 {
  max-width: 20%;
}


</style> 