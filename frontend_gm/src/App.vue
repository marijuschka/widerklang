<template>
  <div id="app">
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'login',
  components: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Nicht abändern! Verwenden wenn Hintergrund in Themenfarbe sein muss.*/
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
