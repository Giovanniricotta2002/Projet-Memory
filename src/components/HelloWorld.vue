<template>
  <v-container>
      <v-card width="500" height="auto">
        <v-card-item>
          <v-card-title style="background-color: lightblue; height: 50px;"><v-btn>From</v-btn></v-card-title>
        </v-card-item>
        <v-card-text style="height: 200px; background-color: aquamarine;" color="black">➕</v-card-text>
        <v-card-actions>
          <v-btn color="blue" to="/category">Voir les Catégorie</v-btn>
          <v-btn color="blue">Voir le Calendrier (WIP)</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
  export default({
    data (){
      return {
        expand2: true
      }
    }
  })






</script>
