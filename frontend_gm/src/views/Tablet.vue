<template>
  <div id="app">
    <div class="tablet">
      <Header />
      <br />

      <div class="container">
        <div class="row">      
          <div class="col 6 theme-frame">
            <a href="/#/tabletMedia" class="theme-text">
              <div class="col 6 theme-boxes red-theme">
                <h1>Familie & Freundschaft</h1>
              </div>
            </a>
          </div>
          <div class="col 6 theme-frame">
            <a href="/#/tabletMedia" class="theme-text align-middle">
              <div class="col 6 theme-boxes blue-theme">
                <h1>Heimat & Regionales</h1>
              </div>
            </a>
          </div>
        </div>
        <div class="row">      
          <div class="col 6 theme-frame">
            <a href="/#/tabletMedia" class="theme-text">
              <div class="col 6 theme-boxes green-theme">
                <h1>Natur & Tierwelt</h1>
              </div>
            </a>
          </div>
          <div class="col 6 theme-frame">
            <a href="/#/tabletMedia" class="theme-text">
              <div class="col 6 theme-boxes orange-theme">
                <h1>Freizeit & Vergnügen</h1>
              </div>
            </a>
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

<style>
img {
  width: 400px;
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
}
.theme-text:hover{
  color: pink;
  Text-Decoration: None !important;
}
.red-theme {
  background-color: #DB1644;
}
.blue-theme {
  background-color: #50A5EB;
}
.green-theme {
  background-color: #32A62E;
}
.orange-theme {
  background-color: #F2BC18;
}
</style>
