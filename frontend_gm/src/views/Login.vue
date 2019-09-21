<template>
  <div class="login">
  <Header /> 
  <br />
    <br />
    <img class="logo" alt="Vue logo Responsive image" src="../assets/Widerklang_Logo.png" />
    <br />
    <br />

    <!-- Benutzername -->
    <form>
      <div class="form-group">
        <!-- <label for="exampleInputEmail1"></label> -->
        <div class="row justify-content-center">
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
      <button v-on:click="login" type="submit" class="btn btn-primary">Anmelden</button>
    </form>

    <br />
    <br />
    <br />

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
mounted(){
       if(localStorage.getItem("auth") == true){
            if(localStorage.getItem("role") === "Carer"){
              console.log("gehe hier rein")
              this.$router.push('schnellzugriff')
            } if(localStorage.getItem("role") === "Mmd_member"){
               this.$router.push('mediaManagement')
            }
            }
  },
  methods: {
    login() {
      axios
        .post("http://139.6.102.67:8080/login", {
          
          username: this.loginData.username,
          password: this.loginData.password
        })
        .then(res => {
          {
            console.log("Erfolgreich eingeloggt...")
            console.log("Token for "+this.loginData.username+" is: "+res.data.token);
            localStorage.setItem("token", res.data.token);
            
            if(res.data.auth == true){
            if(res.data.role === "Carer"){
              localStorage.setItem("role", "true");
              console.log("gehe hier rein")
              this.$router.push('schnellzugriff')
            } if(res.data.role === "Mmd_member"){
              localStorage.setItem("role", "false");
              console.log("role is: "+localStorage.getItem("role"))
               this.$router.push('mediaManagement')
            }
            }
          }
        })
       .catch(error => {
       alert(error.response)
        });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 500px;
}
</style>