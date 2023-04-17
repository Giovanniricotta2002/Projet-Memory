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

<div Align=center>
  <h1>Auto Learning</h1>
</div>
<v-card color="light-blue" width="400">
  <v-card-text>
    <div> ici tu peut visionner les jour ou tu a réussi <br> les différent thèmes <br> ainsi que le nombre de jour réussi consécutive </div>
      <v-card-actions>
          <v-btn prepend-icon="mdi-dialpad" variant="outlined" color="white">Voir le calendrier</v-btn>
      </v-card-actions>
  </v-card-text>
  <v-card-text>
    <div> ici tu peut créer tes propre thèmes <br> tes propres cartes <br> et réviser tes cartes</div>
      <v-card-actions>
        <v-btn prepend-icon="mdi-message-text" variant="outlined" color="white" to="/category">Voir les catégorie</v-btn>
      </v-card-actions>
  </v-card-text>
</v-card>

</template>

<script setup>
import HelloWorld from '@/components/Principal.vue'
</script>