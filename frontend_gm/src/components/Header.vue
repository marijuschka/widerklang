<template>
  <header>
    <div class="margin-top-60">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand v-if="Carer=='true'" href="#">
          <router-link to="/schnellzugriff" id="schnellzugriff">
            <img alt="Vue logo" src="../assets/WiderKlang_Bild_Marke_2.png" />
          </router-link>
        </b-navbar-brand>
        <b-navbar-brand v-if="Carer=='null'" href="#">
          <router-link to="/" id="login">
            <img class="logo-header" alt="Logo" src="../assets/WiderKlang_Bild_Marke_2.png" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav>
            <b-nav-item v-if="Carer=='true'" href="#">
              <router-link to="/mmd" id="mmd" class="font-type">Benutzer</router-link>
              <img alt="Vue logo" src="../assets/WiderKlang_Bild_Marke_2.png" />
            </b-nav-item>
            <b-nav-item v-if="Carer=='true'" href="#">
              <router-link to="/carer" id="carer" class="font-type">Pfleger</router-link>
            </b-nav-item>
            <!--<b-nav-item v-if="Carer=='true'" href="#">
              <router-link to="/schnellzugriff" id="SZugriff">SZugriff</router-link>
            </b-nav-item>-->
           <!-- <b-nav-item v-if="Carer=='true'" href="#">
              <router-link to="/tablet" id="tablet">TABLET</router-link>
            </b-nav-item> -->
            <b-nav-item v-if="Carer!='null'"  href="#">
              <router-link to="/mediaManagementPfleger" id="mediaManagement" class="font-type">Medien</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button v-if="Carer!='null'" v-on:click="logout" v-b-toggle.collapse-1 variant="transparent"> <img alt="Vue logo" src="../assets/Logout2.png" /></b-button>
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
      newUser: { name: "", password: "" },
      Carer: localStorage.getItem("role")
    };
  },
  methods: {
    // Log out User
    logout() {
      localStorage.setItem("token", 'null');
      localStorage.setItem("role", 'null');
      this.$router.push('/')
    }
  },
  //created(){
  //  if (localStorage.getItem("token")==null){
  //    this.$router.push('login')
  //  }
  //}
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
  font-family: "Hind", sans-serif;
}

.text-white {
  color: #f5f5f5 !important;
}
.logo-header {
  width: 10%;
  height: auto;
}
img {
  width: 70px;
}
/* Für Abstand auf jeder Seite mit Header */
.margin-top-60 {
  margin-top: 10px;
}
.font-type {
  font: "Hind" sans-serif;
  color: black;
}
</style>
