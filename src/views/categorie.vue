<template>
    <v-container>
        <v-card>
            <v-card-item style="background-color: lightblue; height: 50px">
                
            </v-card-item>
            <v-card-text>
                <v-btn variant="tonal" color="lightblue" @click="test.addCategory()">Créer une Catégorie</v-btn>
                <v-btn variant="tonal" color="lightblue" to="/">test</v-btn>
                
                <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
                    <v-slide-group-item v-for="n, index in test.getCategory" :key="n.id" v-slot="{ isSelected, toggle, selectedClass }">
                        <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="200" @click="toggle">
                            <div class="d-flex fill-height align-center justify-center">
                                Nom catégorie: {{test.getCategory.find(c => c.id = index+1).name}}
                            </div>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>

                <v-expand-transition>
                    <v-sheet v-if="model != null" height="200">
                        <div class="d-flex fill-height align-center justify-center">
                            <h3 class="text-h6">
                                <v-text-field v-model="toto"></v-text-field>
                                
                                <v-btn @click="test.setNomCategory(toto, model)">Validé</v-btn>
                                Selected {{test.getCategory.find(c => c.id = model+1).name}}
                            </h3>
                        </div>
                    </v-sheet>
                </v-expand-transition>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { CategoryStore } from '../store/category.js'
//import { mapActions, mapState } from 'pinia'

export default({
    data() {
        return {
            length: 0,
            window: 0,
            model: null,
            category: [],
            test: null,
            toto: null,
        }
    },
    methods: {
        //...mapActions(CategoryStore, ["addCategory"])
    },
    setup(){
        const test = CategoryStore()
        return {test}
    },
    computed: {
        //...mapState(CategoryStore, ["getCategory", ])
    },
    mounted() {
        if (window.location.hostname == 'localhost') window.app = this
    }
})
</script>