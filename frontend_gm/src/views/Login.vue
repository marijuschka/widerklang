<template>
  <div class="login">
  <Header /> 
    <br />
    <img class="logo" alt="Vue logo Responsive image" src="../assets/WiderklangLogo.png" />
    <br />
    <br />
    <!-- <h1>Das wird die LOGIN Seite!</h1> -->

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

    <!-- CARDS with BootstrapVUE 
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
    -->
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
            console.log("gehe hier rein")
            console.log("Token for "+this.loginData.username+" is: "+res.data.token);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("auth", res.data.auth);
            localStorage.setItem("userid", res.data.userid);
            console.log("Token: "+localStorage.getItem("token")+" ___ Role: "+localStorage.getItem("role")+" ___ Role: "+localStorage.getItem("auth"))
            if(res.data.auth == true){
            if(res.data.role === "Carer"){
              console.log("gehe hier rein")
              this.$router.push('schnellzugriff')
            } if(res.data.role === "Mmd_member"){
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
  width: 300px;
}
</style>