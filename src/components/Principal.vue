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
  <h1>Auto Learning </h1>
</div>
<v-card color="light-blue" width=100% ms-2>
  <div align ="center">
  <v-card-text>
    <div> ici tu peut visionner les jour ou tu a réussi <br> les différents niveaux de difficulté <br> ainsi que le nombre de jour réussi consécutive </div>
    <v-btn prepend-icon="mdi-dialpad" variant="outlined" color="white" to="/calendar">Voir le calendrier</v-btn>
  </v-card-text>
  <v-card-text>
    <div> ici tu peut créer tes propres thèmes <br> tes propres cartes <br> et réviser tes cartes</div>
    <v-btn prepend-icon="mdi-message-text" variant="outlined" color="white" to="/category">Voir les catégorie</v-btn>
  </v-card-text>
  <v-card-text>
    <div> ici tu peut jouer <br> tes propres cartes </div>
    <v-btn prepend-icon="mdi-controller" variant="outlined" color="white" to="/game">joue avec tes cards</v-btn>
  </v-card-text>
  </div>
</v-card>
<v-card color="light-blue">
  <v-timeline direction="horizontal">
    <v-timeline-item color>
      <template v-slot:opposite>
        
      </template>
      <div>
        <div class="text-h6">1</div>
        <p>
          commence par créer tes cards pour l'apprentissage
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        
      </template>
      <div>
        <div class="text-h6">2</div>
        <p>
          une fois réussi tu passe au niveau 2 tout les 2 jours puis niveau 3 tout les 4 jours ect...
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        
      </template>
      <div>
        <div class="text-h6">3</div>
        <p>
          Un apprentissage très efficace sur le long terme
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</v-card>
<v-expansion-panels>
  <v-expansion-panel title="Catégories">
    <v-expansion-panel-text v-for="c in category.getCategory">
      nom de la categorie : {{ c.name }} 
      son synopsis : {{ c.synopsis }}
      <v-checkbox label="Choisir cette catégorie"></v-checkbox>
    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>
</template>

<script setup>
import { CategoryStore } from '../store/category.js'
const index = 0
const category = CategoryStore()
</script>