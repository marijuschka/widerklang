<template>
  <div class="pfleger">
    <Header />
    <br />
    <b-row class="justify-content-center">
      <b-col cols="12" md="11">
        <b-row align-h="start">
          <b-col cols="auto">
            <b-button v-b-toggle.collapse-newMember variant="success">Neuen Pfleger hinzufügen</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
    <div>
      <b-row class="justify-content-center" id="addpfleger">
        <b-col cols="12" md="11">
          <b-collapse id="collapse-newMember" class="mt-2 collapse1">
            <b-card>
              <b-row align-v="center" class="justify-content-center">
                <b-col cols="2" md="1" lg="1">
                  <img
                    class="addpflegerIcon"
                    alt="newMember"
                    src="https://cdn.onlinewebfonts.com/svg/img_227643.png"
                  />
                </b-col>
                <b-col cols="11" md="3" lg="3">
                  <b-form-input v-model="newCarer.name" placeholder="Name"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newCarer.pflegername" placeholder="pflegername"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newCarer.email" placeholder="E-Mail"></b-form-input>
                </b-col>
                <b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newCarer.password" placeholder="Password"></b-form-input>
                </b-col>
                <!--<b-col cols="11" md="4" lg="3">
                  <b-form-input v-model="newCarer.mmd_id" placeholder="mmd_id"></b-form-input>
                </b-col> -->
                <b-col cols="6" md="4" lg="2">
                  <!-- <b-col cols="auto"> -->
                  <b-button
                    v-on:click="addNewCarer()"
                    v-b-toggle.collapse-newMember-inner
                    size="md"
                  >Nutzer hinzufügen</b-button>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </div>

    <!--  Dynamisches Erzeugen der Carer Liste -->

    <!-- <div v-for="index in carer.length"> 
      For Schleife funktioniert  -->
    
    <b-row class="justify-content-center pflegerlist" id="pflegerSpalte">
      <b-col cols="12" md="11">
        <b-card no-body class="overflow-hidden">
          <!-- Hier ist die CENTER anweisung -->
          <b-row align-v="center" align-h="between" no-gutters>
            <!-- Bild -->
            <b-col cols="2" md="1">
              <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
            </b-col>
            <!-- Name -->
            <b-col cols="5">
              <!-- {{ carer[index-1] }} -->
              <h3> --> ID=   --> Role= </h3> 
            </b-col>

            <!-- buttons-->
            <b-col cols="5" md="6">
              <b-row>
                <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                  <b-card-text>
                    <b-button v-b-toggle.collapse-editCarer pill>Bearbeiten</b-button>
                  </b-card-text>
                </b-col>
                <b-col cols="6" md="4" lg="2">
                  <b-card-text>
                    <!--  <b-button v-on:click="deleteCarer(carer[index-1]) pill variant="outline-danger"> -->
                    <b-button v-on:click="deleteCarer(XY)" pill variant="danger">Entfernen</b-button>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- Collapse -->
          <div>
            <b-collapse id="collapse-editCarer" class="mt-2">
              <b-card>
                <b-row class="justify-content-center">
                  <b-col cols="4" md="3">
                    <b-form-input v-model="editedCarer.password" placeholder="Neues Passwort"></b-form-input>
                  </b-col>
                  <b-col cols="4" md="3">
                    <b-form-input v-model="editedCarer.name" placeholder="Neue XY"></b-form-input>
                  </b-col>
                  <b-col cols="2" md="2">
                    <b-button
                      v-on:click="editCarer(xxyy)"
                      v-b-toggle.collapse-editCarer-inner
                      size="md"
                    >Ändern!</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-collapse>
          </div>
        </b-card>
      </b-col>
    </b-row>
<!-- </div> -->


    <b-row class="justify-content-center" id="pflegerSpalte">
      <b-col cols="12" md="11">
        <b-card no-body class="overflow-hidden">
          <!-- Hier ist die CENTER anweisung -->
          <b-row align-v="center" align-h="between" no-gutters>
            <!-- Bild -->
            <b-col cols="2" md="1">
              <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
            </b-col>
            <!-- Name -->
            <b-col cols="4">
              <!-- {{ carer[index-1] }} -->
              <h3>Test Testen</h3>
            </b-col>

            <!-- buttons-->
            <b-col cols="5" md="7">
              <b-row>
                <b-col cols="6" sm="4" offset-sm="2" offset-md="4" offset-lg="7" md="4" lg="2">
                  <b-card-text>
                    <b-button v-b-toggle.collapse-editCarer pill>Bearbeiten</b-button>
                  </b-card-text>
                </b-col>
                <b-col cols="6" md="4" lg="2">
                  <b-card-text>
                    <!--  <b-button v-on:click="deleteCarer(carer[index-1]) pill variant="outline-danger"> -->
                    <b-button v-on:click="deleteCarer(xxyy)" pill variant="danger">Entfernen</b-button>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- Collapse -->
          <div>
            <b-collapse id="collapse-editCarer" class="mt-2">
              <b-card>
                <b-row class="justify-content-center">
                  <b-col cols="4" md="3">
                    <b-form-input v-model="editedCarer.password" placeholder="Neues Passwort"></b-form-input>
                  </b-col>
                  <b-col cols="4" md="3">
                    <b-form-input v-model="editedCarer.name" placeholder="Neue XY"></b-form-input>
                  </b-col>
                  <b-col cols="2" md="2">
                    <b-button
                    
                      v-b-toggle.collapse-editCarer
                      v-on:click="editCarer(xxyy)"
                      size="md"
                    >Ändern!</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-collapse>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "pfleger",
  components: {
    Header
  },
  data() {
    return {
      carer: [],
      newCarer: {
        name: "",
        pflegername: "",
        email: "test@web.de",
        password: "123"
        //mmd_id: "1234"
      },
      editedCarer: {
        name: "",
        pflegername: "",
        email: "",
        password: "",
        mmd_name: "",
        pfleger_id: ""
      }
    };
  },
  methods: {
    // add new Member/Angehoerigen to database
    addNewCarer() {
      axios
        .post("http://139.6.102.67:8080/carer/", this.newCarer)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.carer = this.carer.concat(this.newCarer.name);
            // M.toast({
            //   html: "<b>Added new pfleger @" + this.newpfleger.name + "</b>",
            //   classes: "green white-text"
            // });
            this.toggleElements("createpfleger");
          }
        })
        .catch(err => console.log("Hey! Axios error for addNewPfleger: " + err));
    },
    // Edit Existing pfleger
    editCarer(id) {
      axios
        .patch("http://139.6.102.67:8080/carer" + id, this.editedCarer)
        .then(res => {
          if (res.status == 200) {
            M.toast({
              html:
                "<b>Edited pfleger @" +
                document.getElementById("icon_editPassword" + id).placeholder +
                "</b>",
              classes: "green white-text"
            });
            this.toggleElements("editpfleger" + id);
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            M.toast({
              html: "<b>Could not edit pfleger @" + this.editedCarer.name + "</b>",
              classes: "red white-text"
            });
          }
        });
    },
    // Delete pfleger with given ID
    deleteCarer(id) {
      console.log("delete pfleger with ID: " + id);
      axios
        .delete("http://139.6.102.67:8080/carer/" + id)
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            this.carer = this.carer.filter(carer => carer !== id);
            //  M.toast({
            //   html: "<b>Deleted pfleger @" + id + "</b>",
            //   classes: "green white-text"
            //  });
            //  var elem = document.getElementById(id);
            //  var instance = M.Modal.getInstance(elem);
            //  instance.close();
          }
        })
        .catch(err => {
          if (err.response.status == 404 || err.response.status == 401) {
            //  M.toast({
            //    html: "<b>Could not delete pfleger @" + id + "</b>",
            //    classes: "red white-text"
            //  });
            console.log("Delete pfleger with Error: " + err);
          }
        });
    }
  },
  created() {
    axios
      .get("http://139.6.102.67:8080/carer/")
      .then(res => {
        console.log(res.data);
        this.carer = res.data;
      })
      .catch(err => console.log("Hey! Axios error for pflegers: " + err));
  }
};
</script>

<style scoped>
.collapse1 {
  margin-bottom: 10px;
}
.addpflegerIcon {
  width: 40px;
}
.pflegerlist {
  margin-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
}
.Newpfleger {
  height: 200px;
}
.pflegerSpalte {
  max-height: 100px;
}
h3 {
  font-weight: bold;
}
</style>
