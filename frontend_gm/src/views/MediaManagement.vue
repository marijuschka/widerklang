<template>
  <div class="media-management">
    <my-header></my-header>
   
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
          <b-button class="imageUpload" v-b-modal.modal-1><div class="upload">
            
          </div>
    </b-button>

  <b-modal id="modal-1" title="Image Upload">  
   <form action="http://139.6.102.67:8080/material" method="POST" enctype="multipart/form-data">
                <div class="input-field col s12">
                        <input placeholder="Benne deine Datei" id="name" name="name" type="text" class="validate">
                        <label for="first_name">Name</label>
                      </div>
                          <div class="input-field col s12">
                                <input placeholder="Beschreibung/Gruß" id="description" name="description" type="text" class="validate">
                                <label for="first_name">Beschreibung</label>
                              </div>
                        <input class="form-input" type="hidden" id="mmd_id" name="mmd_id" v-bind:value="mmd_id">
                        <input class="form-input" type="hidden" id="category" name="category" v-bind:value="currentCategory">
                    </br>
                <div class="file-field input-field">
                    <div class="btn grey">
                        <span>File</span>
                        <input name="myImage" type="file">
                    </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
                </div>
                <button type="submit" class="btn"> Submit </button>
            </form>
  </b-modal>
</div>
         
      <draggable
        class="dragArea"
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
            :key="element.id"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
      </div>
    </div>
  <div>
  <b-card no-body class="bildTV" v-bind:style="{'background-color': currentColor }">
    <b-tabs card>
      <b-tab title="Fernseher" active>
        <b-card-text>
        <h3>TV</h3>
        <draggable
        class="dragArea "
        :list="tv"
        group="people"
        @change="setTV()"
      >
          <div class="list-group-item" v-for="element in tv" :key="element.id">
            <img
              :key="element.id"
              :src="'http://139.6.102.67:8080/' + element.path"
              alt="123"
              class="image-gallery__image"
            />
          </div>
        </draggable>
        </b-card-text>
      </b-tab>
      <b-tab title="Bilderwand">
        <b-card-text>
         <h3>Bild1</h3>
      <draggable
        class="dragArea"
        :list="bild1"
        group="people"
        @change="setBild(1)"
      >
        <div
          class="list-group-item-bilder "
          v-for="element in bild1"
          :key="element.id"
        >
            <img
            :key="element.id"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
            <h3>Bild2</h3>
      <draggable
        class="dragArea "
        :list="bild2"
        group="people"
        @change="setBild(2)"
      >
        <div
          class="list-group-item-bilder "
          v-for="element in bild2"
          :key="element.id"
        >
            <img
            :key="element.id"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
            <h3>Bild3</h3>
      <draggable
        class="dragArea"
        :list="bild3"
        group="people"
        @change="setBild(3)"
      >
        <div
          class="list-group-item-bilder"
          v-for="element in bild3"
          :key="element.id"
        >
            <img
            :key="element.id"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
        </div>
      </draggable>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
import draggable from "vuedraggable";

export default {
  name: "mediaManagement",
  data() {
    return {
      mmd_id: localStorage.getItem("mmd_id"),
      images: [],
      tv: [],
      bild1: [],
      bild2: [],
      bild3: [],
      file: "",
      newFile: {
        name: "",
        description: "",
        mmd_id: "",
        category: "",
        path:"",
        mimeType:""
      },
      generisch: true,
      currentCategory: "",
      currentColor: "",
      kategorien: [
        {
          name: "Familie",
          farbe: "rot",
          selected: false,
          backgroundcolor: "#db1644"
        },
        {
          name: "Natur",
          farbe: "gruen",
          selected: false,
          backgroundcolor: "#32a62e"
        },
        {
          name: "Freizeit",
          farbe: "gelb",
          selected: false,
          backgroundcolor: "#f2bc18"
        },
        {
          name: "Regional",
          farbe: "blau",
          selected: false,
          backgroundcolor: "#50a5eb"
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
     console.log("MMD_ID: " +this.mmd_id);
    this.fetchImages();
    this.getTV();
    this.getBilderwand(1);
    this.getBilderwand(2);
    this.getBilderwand(3);
  },
  components: {
    "my-header": Header,
    draggable
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
      this.currentColor = this.kategorien[index].backgroundcolor;
      this.fetchImages();
      this.getBilderwand(1);
      this.getBilderwand(2);
      this.getBilderwand(3);
      this.getTV();
    },
    getTV(){
      this.tv = null;
      axios
      .get("http://139.6.102.67:8080/" + this.currentCategory + "/" + this.mmd_id + "/0")
      .then(res => {
        console.log(res.data);
        this.tv = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
    },
    getBilderwand(current){
      this.bild1 = null;
      axios
      .get("http://139.6.102.67:8080/" + this.currentCategory + "/" + this.mmd_id + "/"+ current)
      .then(res => {
        console.log();
        if(current == 1){
        this.bild1 = res.data;
        } else if (current == 2){
        this.bild2 = res.data;
        } else {
        this.bild3 = res.data;
        }
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
    },
     setTV(){
      var image = {
        mmd_id: this.mmd_id,
        display: 0,
        path: this.tv[this.tv.length-1].path,
        type: this.tv[this.tv.length-1].type,
        category: this.currentCategory,
        description: this.tv[this.tv.length-1].description
      }
      console.log("tv: " + image)
      axios
      .post("http://139.6.102.67:8080/" + this.currentCategory, image)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log("Hey! Axios error for editMember: " + err));
    },
    setBild(tmp){
      var bild;
      if(tmp == 1){
         var image = {
        mmd_id: this.mmd_id,
        display: tmp,
        path: this.bild1[0].path,
        type: this.bild1[0].type,
        category: this.currentCategory,
        description: this.bild1[0].description
      }
      } else if(tmp == 2) {
         var image = {
        mmd_id: this.mmd_id,
        display: tmp,
        path: this.bild2[0].path,
        type: this.bild2[0].type,
        category: this.currentCategory,
        description: this.bild2[0].description
      }
      }else if(tmp == 3) {
        var image = {
        mmd_id: this.mmd_id,
        display: tmp,
        path: this.bild3[0].path,
        type: this.bild3[0].type,
        category: this.currentCategory,
        description: this.bild3[0].description
      }
      }
     
      axios
      .post("http://139.6.102.67:8080/" + this.currentCategory  , image)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log("Hey! Axios error for editMember: " + err));
        this.getBilderwand(tmp);
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
            "http://139.6.102.67:8080/material/" + this.mmd_id +"/" + this.currentCategory
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
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: 80px 80px; /* Skalierung vom Bild */
  background-image: url("../assets/Add.png");
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
  margin: 100px;
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
  background-color:white;
}

.image-navbar {
  flex-basis: 50px;
}

.image-grid {
  width: 50em;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}

.image-gallery {
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
  grid-gap: 15px;
}

.image-gallery__image {
  float:left;
  max-width: 100px;
  max-height: 100px;
}

.dragArea list-group {
  width: 100%;
  height: 100%;
  padding: 5px;
  position: center;
  border: 1px;
  border-width: 1em;
  border-color:black;
  background: brown;
  flex-direction: inherit !important;
  background-color: brown;
  max-width: 20px;
  max-height: 200px;
}

.list-group-item {
border: 0;
width: 100px;
height: 100px;
}
.list-group-item-bilder {
border: 1;
width: 100px;
height: 100px;
}
.imageUpload{
  background: transparent;
  border: none;
  padding: 0;
}
.bildTV{
  width: 20em;
  height: 100%;
  background-color: #db1644;
}

.col-3 {
  max-width: 20%;
}


</style> 