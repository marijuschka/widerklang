<template>
  <div class="media-management">
    <my-header></my-header>
    <h2> Medienverwaltung </h2>
    
          <!-- upload -->
           <b-button class="uploadButton" v-b-modal.modal-1><div class="upload"></div>
          </b-button>
       
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
    <!--  <div class="image-grid">
      <div class="image-navbar">
          <button @click="setGenerisch">Generisch</button>
          <button @click="setPersoenlich">Persönlich</button>
        </div> -->
    <b-container fluid class="p-4">

  <b-modal id="modal-1" title="Image Upload">  
 <form action="http://139.6.102.67:8080/generic" method="POST" enctype="multipart/form-data">
                <div class="input-field col s12">
                        <input placeholder="Benne deine Datei" id="name" name="name" type="text" class="validate">
                        <label for="first_name">Name</label>
                      </div>
                          <div class="input-field col s12">
                                <input placeholder="Beschreibung/Gruß" id="description" name="description" type="text" class="validate">
                                <label for="first_name">Beschreibung</label>
                              </div>
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



     <b-row
          class="list-group-item"
          v-for="element in images"
          :key="element.id"
        >
           <b-col>
         <img thumbnail fluid
            :key="index"
            :src="'http://139.6.102.67:8080/' + element.path"
            alt="123"
            class="image-gallery__image"
          />
          </b-col>
          </b-row>
          </b-container>
        </div>
      </div>
        
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
      file:"",
      newFile: {
        name: "",
        description: "",
        mmd_id: "xxxxx",
        category: "",
        path:"",
        mimeType:""
      },
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
     console.log("MMD_ID: " +this.mmd_id);
    this.fetchImages();
    this.getTV();
  },
  components: {
    "my-header": Header,
    draggable
  },
  created() {
    axios
      .get("http://139.6.102.67:8080/" + this.currentCategory + "/xxxxx/0")
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
      this.getTV();
    },
    onSelect(){
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    imageUpload(){
        const formData = new FormData();
        formData.append('file', this.file)
        this.newFile.name = "test2";
        this.newFile.description = "test2";
        this.newFile.category = this.currentCategory;
        this.newFile.path = formData.path;
        this.newFile.mimeType = formData.type;
        console.log(this.newFile);
        
      axios
      .post("http://139.6.102.67:8080/material", this.newFile)
      .then(res => {
        console.log();
        this.tv = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
  this.fetchImages();

    },
    getTV(){
      axios
      .get("http://139.6.102.67:8080/" + this.currentCategory + "/xxxxx/0")
      .then(res => {
        console.log();
        this.tv = res.data;
      })
      .catch(err =>
        console.log("Hey! Axios error for Created MMD_Member: " + err)
      );
    },
     setTV(){
      var image = {
        mmd_id: "xxxxx",
        display: 0,
        stacknr: 0,
        category: this.tv[0].category,
        type: this.tv[0].type,
        path: this.tv[0].path,
        description: this.tv[0].description
      }
      console.log("tv: " + image)
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
  border:1px;
  background-size: 150px 150px; /* Skalierung vom Bild */
  background-image: url("../assets/plus.jpg");
}
.p-4{
  padding:0 !important;
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
  padding-top:40px;
  background-color: rgba(0,0,0,0.05);
  border-radius:20px;
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
.uploadButton{
  background: transparent;
  border: none;
  padding: 0;
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
  align-items: left;

  
}

.image-gallery {
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
  grid-gap: 10px;
}

.image-gallery__image {
  width: 200px;
  height: 150px;
  border-radius: 8px;
  background-color:transparent;
  margin: 100%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
}

.dragArea list-group {
  width: 200px;
  height: 300px;
  border-width: 1em;
  border-color:black;
  background: brown;
  flex-direction: inherit !important;
  background-color: brown;
  max-width: 200px;
  max-height: 200px;
  border:1px;
}

.list-group-item {
border: 0;
float: left;
margin:5%;
background-color:transparent;
width: 100px;
height: 100px;
}


.col-3 {
  max-width: 20%;
}


</style> 