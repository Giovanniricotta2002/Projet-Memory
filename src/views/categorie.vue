<template>
    <v-container>
        <v-card>
            <v-card-item style="background-color: lightblue; height: 50px">
                
            </v-card-item>
            <v-card-text>
                <v-btn variant="tonal" color="lightblue" @click="test.addCategory()">Créer une Catégorie</v-btn>
                <v-btn variant="tonal" color="lightblue" to="/">Home</v-btn>
                
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
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <v-text-field v-model="toto" :disabled="toto != null && di"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="2" md="3">
                                            <v-btn @click="test.setNomCategory(toto, model), di = true" v-show="!di">Validé</v-btn>
                                        </v-col>
                                        <v-col cols="5" md="7" style="width: 500px;">
                                            Selected {{test.getCategory.find(c => c.id = model+1).name}}
                                        </v-col>
                                        <v-col v-show="di">
                                            <v-dialog v-model="dialog" width="auto">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn color="primary" v-bind="props"> Open Dialog</v-btn>
                                                </template>

                                                <v-card>
                                                    <v-card-text>
                                                        Categorie {{test.getCategory.find(c => c.id).name}}
                                                        <v-spacer></v-spacer>
                                                        <v-spacer></v-spacer>
                                                        Synopsis de votre category:
                                                        <v-textarea v-model="test.setSynopisi" @update:modelValue="test.setSynopisi(event)"></v-textarea>
                                                        <v-divider :thickness="8"></v-divider>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                
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
            dialog: false,
            di: false
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