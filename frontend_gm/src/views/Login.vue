<template>
  <div class="login">
    <Header />
    <br />
    <img class="logo" alt="Vue logo Responsive image" src="../assets/WiderklangLogo.png" />
    <br />
    <br />
    <h1>Das wird die LOGIN Seite!</h1>

    <!-- Benutzername -->
    <form>
      <div class="form-group">
        <!-- <label for="exampleInputEmail1"></label> -->
        <div class="row justify-content-md-center">
          <div class="col-lg-4 col-md-6">
            <input
              v-model="loginData.username"
              type="text"
              class="form-control"
              id="username"
              placeholder="Benutzername"
            />
          </div>
        </div>
      </div>

      <!-- Passwort -->
      <div class="form-group">
        <div class="row justify-content-md-center">
          <div class="col-lg-4 col-md-6">
            <input
              v-model="loginData.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Passwort"
              align="center"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Anmelden</button>
    </form>

    <br />
    <br />
    <br />



<!-- CARDS with BootstrapVUE -->
  <b-row align-h="center">
    <b-col cols=2>
      <b-img thumbnail fluid rounded="circle" src="https://picsum.photos/250/250/?image=57" alt="Image 1"></b-img>
    </b-col>
    <b-col cols=2>
      <b-img thumbnail fluid rounded="circle" src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col cols=2>
      <b-img thumbnail fluid rounded="circle" src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
    <b-col cols=2>
      <b-img thumbnail fluid rounded="circle" src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>

    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";


export default {
  name: "login",
  components: {
    Header
  },
  data() {
    return {
      loginData: { username: "", password: "" }
    };
  },
  methods: {
    login() {
      axios.post(+"/api/login", {
        username: username,
        password: password
      });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 300px;
}
</style>