<template>
    <v-layout style="height: 150px">
        <v-system-bar color="indigo-darken-2">
            <v-icon icon="mdi-wifi-strength-3" class="ms-2"></v-icon>
            <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>
            <v-icon icon="mdi-battery" class="ms-2"></v-icon>
            <span class="ms-2">13:24</span>
        </v-system-bar>
    </v-layout>

    <v-btn variant="tonal" color="lightblue" to="/">Home</v-btn>
    <v-carousel>
        <v-carousel-item v-for="c in carte.getAllCarteById(1)">
            <v-card class="mx-auto" max-width="344">
                <v-card-text>
                    <div class="text-h4 text--primary">Categorie 1: {{ category.getCategoryName(c.idCarte.id) }}</div>
                    <p class="text-h6 text--primary"> synopsis : {{ c.idCarte.synopsis }} </p>
                    <p>question :</p>
                    <div class="text--primary">
                        {{ c.carteRecto }}
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="text" color="teal-accent-4" @click="reveal = !reveal">
                        Verso
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="reveal" class="v-card--reveal" style="height: 100%;">
                        <v-card-text class="pb-0">
                            <p class="text-h4 text--primary">
                                Réponse :
                            </p>
                            <p>{{ c.carteVerso }}</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
                                Recto
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>
        </v-carousel-item>
        <!-- <v-carousel-item>
            <v-card class="mx-auto" max-width="344">
                <v-card-text v-for="c in category.getCategory">
                    <div class="text-h4 text--primary">Question 2 : {{ c.name }}</div>
                    <p class="text-h6 text--primary">
                        synopsis : {{ c.synopsis }}
                    </p>
                    <p>question :</p>
                    <div class="text--primary">
                        le bla bla de la question
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                        Verso
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="reveal" class="v-card--reveal" style="height: 100%;">
                        <v-card-text class="pb-0">
                            <p class="text-h4 text--primary">
                                Réponse : 
                            </p>
                            <p>le bla bla de la réponse</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
                                Recto
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>        
        </v-carousel-item>
        <v-carousel-item>
            <v-card class="mx-auto" max-width="344">
                <v-card-text v-for="c in category.getCategory">
                    <div class="text-h4 text--primary">Question 3 : {{ c.name }}</div>
                    <p class="text-h6 text--primary">
                        synopsis : {{ c.synopsis }}
                    </p>
                    <p>question :</p>
                <v-card-text v-for="cart in dd" :key="cart">
                    <div class="text--primary">
                        {{ cart.carteRecto }}
                    </div>
                </v-card-text>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                        Verso
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="reveal" class="v-card--reveal" style="height: 100%;">
                        <v-card-text class="pb-0">
                            <p class="text-h4 text--primary">
                                Réponse : 
                            </p>
                            <p>le bla bla de la réponse</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
                                Recto
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>        
        </v-carousel-item> -->
    </v-carousel>
</template>

<script setup>

</script>

<script>
import { CarteStore } from '@/store/carte';
import { CategoryStore } from '../store/category.js'
export default {
    data: () => ({
        index: 0,
        reveal: false,
        dd: null,
    }),
    gtest(arg) {
        this.dd = this.category.getAllCarteById(arg)
    },
    setup() {
        const category = CategoryStore()
        const carte = CarteStore()

        return {category, carte}

    },
    mounted() {
        if (window.location.hostname == 'localhost') window.game = this
    }
}
</script>