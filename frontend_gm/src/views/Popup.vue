<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">Add new Projekt</v-btn>
        <v-card>
            <v-card-title>
            <h2>Mediendatei hinzufügen</h2>
        </v-card-title>
<v-card-text>
    <v-form class="px-3">
        <v-text-field label="Kategorie" v-model="inputKategorie"></v-text-field>
    </v-form>
</v-card-text>


        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            inputKategorie: ''
        }
    },
    
}
</script>