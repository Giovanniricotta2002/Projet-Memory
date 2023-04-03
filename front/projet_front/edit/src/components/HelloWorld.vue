<template>
  <div>
      <v-layout style="height: 50px">
          <v-system-bar color="indigo-darken-2">
              <v-icon icon="mdi-wifi-strength-3" class="ms-2"></v-icon>
  
              <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>
  
              <v-icon icon="mdi-battery" class="ms-2"></v-icon>
  
              <span class="ms-2">13:24</span>
          </v-system-bar>
      </v-layout>
  </div>
  
  <body>
      <h1>Edit les thèmes et les cartes</h1>
        <div> modifier le nom du thème </div>
          <v-responsive max-width="344">
            <v-text-field clearable label=""></v-text-field>
          </v-responsive>
          <v-card>
        <div> ajouter des cartes</div>
    <v-tabs
      v-model="tab"
      bg-color="red-lighten-2">
      <v-tab
        v-for="n in length"
        :key="n"
        :value="n">
        Item {{ n }}
      </v-tab>
    </v-tabs>
    <v-card-text class="text-center">
      <v-btn
        :disabled="!length"
        variant="text"
        @click="length--">
        supprimer carte
      </v-btn>
      <v-divider
        class="mx-4"
        vertical>
      </v-divider>
      <v-btn
        variant="text"
        @click="length++">
        ajouter carte
      </v-btn>
    </v-card-text>
  </v-card>
  </body>
  </template>
  
  <script>
/*
  export default({
      data() {
          return {
  
              tab: null,
          }
      },
  
  })
  </script>
*/
/*
export default {
    data: () => ({
      length: 15,
      tab: null,
    }),

    watch: {
      length (val) {
        this.tab = val - 1
      },
    },
  }
*/
</script>
