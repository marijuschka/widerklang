<template>
  <div class="user">
    <Header />
    <h1>Das wird die Nutzer Verwaltung</h1>
    <br />
    <div>
      <b-row class="justify-content-md-center">
        <b-col md="10">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "user",
  components: {
    Header
  }
};
</script>

<style scoped>
</style>
