<template>
  <div id="app">
    <div class="tablet">
      <Header />
      <br />

      <div class="container">
        <div class="row">
          <div class="col 6 theme-frame">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'red' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes red-theme">
                  <div class="row theme-position theme-position-red">
                    <img alt="" src="../assets/Familie-Icon.png"/>
                    <h1 class="theme-text">Familie <br /> & Freundschaft</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div class="col 6 theme-frame">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'blue' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes blue-theme">
                  <div class="row theme-position">
                    <img alt="" src="../assets/Heimat-Icon.png"/>
                    <h1 class="theme-text">Heimat <br /> & Regionales</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col 6 theme-frame">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'green' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes green-theme">
                  <div class="row theme-position theme-position-green">
                    <img alt="" src="../assets/Natur-Icon.png"/>
                    <h1 class="theme-text">Natur <br /> & Tierwelt</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div class="col 6 theme-frame">
            <router-link :to="{ path: '/tabletMedia', query: { theme: 'orange' }}" id="tabletMedia">
              <a href="#" class="">
                <div class="col 6 theme-boxes orange-theme">
                  <div class="row theme-position">
                    <img alt="" src="../assets/Freizeit-Icon.png"/>
                    <h1 class="theme-text">Freizeit <br /> & Vergnügen</h1>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "tablet",
  components: {
    Header
  }
};
</script>

<style scoped>
img {
  height: 100px;
  width: auto;
}
a:hover {
  text-decoration: None !important;
}
.theme-boxes {
  height: 30vh;
  padding: 0;
  border-radius: 50px;
  box-shadow: 0px 5px 5px #303030;
}
.theme-frame {
  margin-top: 20px;
}
.theme-text {
  color: white;
  text-align: left;
  padding-left: 30px;
}
.theme-text:hover {
  color: pink;
  text-decoration: None !important;
}
.theme-position {
  padding-top: 8vh;
  padding-left: 6vw;
}
.theme-position-red {
  padding-left: 3vw !important;
}
.theme-position-green {
  padding-left: 8vw !important;
}

.red-theme {
  background-color: #db1644;
}
.blue-theme {
  background-color: #50a5eb;
}
.green-theme {
  background-color: #32a62e;
}
.orange-theme {
  background-color: #f2bc18;
}
</style>
