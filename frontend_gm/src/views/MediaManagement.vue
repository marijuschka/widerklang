<template>
  <div class="mediaManagement">
    <Header />
    <!-- Header Titel ändern ihren Abstand, wenn man auf "Medien" klickt> -->

    <!-- Medienverwaltung -->
    <b-row align-v="center">
      <b-col offset="2" cols="5">
        <h1>Medienverwaltung</h1>
      </b-col>
    </b-row>

    <!-- leftSidebar -->

    <!-- toDo: Abstand zwischen leftSidebar und Gallerie
    Gallerie soll etwa 80% der Fläche einnehmen und leftSidebar 20%
    -> Container Boxen-->

    <div class="test">
      <div id="leftSidebar" style="width: 10px; padding: 0px; margin: 0 0px">
        <ul id="leftSidebar">
          <b-col cols="2">
            <li>
              <button>
                <img src="https://picsum.photos/id/155/300/300" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://picsum.photos/id/155/300/300" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://picsum.photos/id/155/300/300" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://picsum.photos/id/155/300/300" />
              </button>
            </li>
          </b-col>
        </ul>
      </div>
    </div>

    <!-- Bildergalerie -->
    <div class="test">
      <div id="galerie">
        <b-col cols="12">
          <!-- Dieser Button führt zu ImageUpload -->

          <button>
            <!-- <img src="https://picsum.photos/id/315/300/300"/> -->
            <b-nav-item href="#">
              <router-link to="/imageUpload" id="imageUpload">BildHochladen</router-link>
            </b-nav-item>
          </button>

          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
          <button>
            <img src="https://picsum.photos/id/132/100/100" />
          </button>
        </b-col>
      </div>
    </div>
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
    width: 100%; /* Bild passt sich an verfügbaren Raum im li an         ÜBERPRÜFEN */
  }

  button {
    padding: 0.1em;
  }

  button:focus,
  button:hover {
    background: #09c;
  }
}

.test {
  float: left;
  width: 50%;
  padding: 10px;
  background: rgb(102, 94, 94);
  box-sizing: border-box;
}
</style>
