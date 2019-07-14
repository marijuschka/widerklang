<template>
  <div class="user">
    <Header />
    <h1>Das wird die Nutzer Verwaltung</h1>
    <br />
    <div>
      <b-row class="justify-content-md-center">
        <b-col cols="10" md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col cols="2" md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
              </b-col>
              <b-col cols="10">
                <b-row>
                  <b-col cols="6">Emma Emersson</b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-secondary">Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="10" md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col cols="2" md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
              </b-col>
              <b-col cols="10">
                <b-row>
                  <b-col cols="6">Emma Emersson</b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-secondary">Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="10" md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col cols="2" md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
              </b-col>
              <b-col cols="10">
                <b-row>
                  <b-col cols="6">Emma Emersson</b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-secondary">Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="10" md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col cols="2" md="1">
                <b-card-img src="https://picsum.photos/400/400/?image=20"></b-card-img>
              </b-col>
              <b-col cols="10">
                <b-row>
                  <b-col cols="6">Emma Emersson</b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-secondary">Bearbeiten</b-button>
                    </b-card-text>
                  </b-col>
                  <b-col cols="3" md="2">
                    <b-card-text>
                      <b-button pill variant="outline-danger">Entfernen</b-button>
                    </b-card-text>
                  </b-col>
                </b-row>
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
img {
  max-width: 100%;
  height: auto;
}
</style>
