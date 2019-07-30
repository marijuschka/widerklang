<!-- Hier soll der User nachher Bilder hochladen können --> 
<template>
<div class="imageUpload">
    <Header />
    <h1>HIER DAS BILD HOCHLADEN!!!</h1>
    <button>
        Datei auswählen
        <!-- GET Befehl an DB -->
        </button>
</div>
    
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "mediaManagement",
  components: {
    Header
  }
};
</script>


<style >
</style>

