<template>
  <div class="login">
    <br />
    <img class="logo" alt="Vue logo Responsive image" src="../assets/Widerklang_Logo_Bild.png" />
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
      <button v-on:click="login" type="submit" class="btn btn-primary">Widerklang starten</button>
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
      loginData: { username: ""}
    };
  },
  methods: {
    login() {
      console.log("test" + this.loginData.username)
      axios
        .get("http://139.6.102.67:8080/mmd/" + this.loginData.username)
        .then(res => {
          {
            console.log(res.data)
            console.log("Token for "+this.loginData.username+" is: "+res.data.token);
            localStorage.setItem("auth", res.data.auth);
            localStorage.setItem("userid", res.data.user_id);
            localStorage.setItem("mmd_id", res.data.id);
            localStorage.setItem("mmd_name", res.data.name)
            console.log("der name ist " + localStorage.getItem("mmd_name"))
            this.$router.push('../tablet')
          }
        });
    },
  }
};
</script>

<style scoped>
.logo {
  width: 300px;
}
</style>