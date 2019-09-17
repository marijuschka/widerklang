<template>
  <header>
    <div class="margin-top-60">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <router-link to="/schnellzugriff" id="schnellzugriff">
            <img alt="Vue logo" src="../assets/WiderklangLogo.png" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/mmd" id="mmd">Angehoeriger</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/carer" id="carer">Pfleger</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/schnellzugriff" id="SZugriff">SZugriff</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/tablet" id="tablet">TABLET</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/mediaManagement" id="mediaManagement">Medien</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button v-on:click="logout" v-b-toggle.collapse-1 variant="danger">Abmelden</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: [],
      newUser: { name: "", password: "" }
    };
  },
  methods: {
    // Log out User
    logout() {
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #011526;
  opacity: 0.85;
}
.sidenav {
  background-color: #011526;
}

header {
  font-family: "Segoe UI", sans-serif;
}

.text-white {
  color: #f5f5f5 !important;
}

img {
  width: 70px;
}
/* Für Abstand auf jeder Seite mit Header */
.margin-top-60 {  
  margin-top: 10px;
}
</style>
