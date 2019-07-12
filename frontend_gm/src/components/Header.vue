<template>
  <header>
    <nav>
      <div class="nav-wrapper container">
        <li>
          <router-link class="text-white" to="/">HOME</router-link>
        </li>
        <li>
          <router-link class="text-white" to="/login">LOGIN</router-link>
        </li>
      </div>
    </nav>
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
    font-family: 'Segoe UI', sans-serif;
  }

  .text-white {
    color: #F5F5F5 !important;
  }
</style>
