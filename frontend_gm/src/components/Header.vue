<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <router-link to="/" id="home">
            <img alt="Vue logo" src="../assets/WiderklangLogo.png" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/login" id="login">Login</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/user" id="user">Nutzer</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/tablet" id="tablet">TABLET</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
</style>
