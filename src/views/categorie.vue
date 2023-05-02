<template>
    <v-container>
        <v-card>
            <v-card-item style="background-color: lightblue; height: 50px">

            </v-card-item>
            <v-card-text>
                <v-btn variant="tonal" color="lightblue" @click="test()">Créer une Catégorie</v-btn>
                <v-btn variant="tonal" color="lightblue" to="/">Home</v-btn>
                <v-btn variant="tonal" color="lightblue" @click="category.init()">Update</v-btn>


                <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
                    <v-slide-group-item v-for="n, index in category.getCategory" :key="n.id"
                        v-slot="{ isSelected, toggle, selectedClass }">
                        <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="200"
                            @click="toggle">
                            <div class="d-flex fill-height align-center justify-center">
                                Nom catégorie: {{ category.getCategory[index].name }}
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
                                            <v-text-field v-model="toto"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="2" md="3"> 
                                            <v-btn
                                                @click="category.setNomCategory(toto, model), di = true, toto = ''">Validé</v-btn>
                                        </v-col>
                                        <v-col cols="5" md="7" style="width: 500px;">
                                            Selected {{ category.getCategory[model].name }}
                                        </v-col>
                                        <v-col v-show="di || category.getCategory[model].name.length > 0">
                                            <v-dialog v-model="dialog" width="auto">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn color="primary" v-bind="props" @click="gtest(model)"> Open
                                                        Dialog</v-btn>
                                                </template>

                                                <v-card>
                                                    <v-card-text>
                                                        Categorie {{ category.getCategory[model].name }}
                                                        <v-spacer></v-spacer>
                                                        <v-spacer></v-spacer>
                                                        Synopsis de votre category:
                                                        <v-textarea v-model="synosis"></v-textarea>
                                                        <v-btn @click="Sauvegator(model)">Sauvegardé le Sysnopisi</v-btn>
                                                        <v-divider :thickness="8"></v-divider>
                                                        <v-expansion-panels>
                                                            <v-expansion-panel>
                                                                <v-expansion-panel-title>
                                                                    Ticket
                                                                </v-expansion-panel-title>
                                                                <v-expansion-panel-text v-for="i in dd" :key="i">
                                                                    <v-row>
                                                                        <v-col>
                                                                            <h6>Recto</h6>
                                                                            {{ i.carteRecto }}
                                                                        </v-col>
                                                                        <v-col>
                                                                            <h6>Verso</h6>
                                                                            {{ i.carteVerso }}
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-expansion-panel-text>
                                                            </v-expansion-panel>
                                                        </v-expansion-panels>
                                                        <v-row>
                                                            <v-col>
                                                                <h6>Recto</h6>
                                                                <v-textarea v-model="rector"></v-textarea>
                                                            </v-col>
                                                            <v-col>
                                                                <h6>Verso</h6>
                                                                <v-textarea v-model="verso"></v-textarea>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-col>
                                                                <v-btn @click="setcarde(model), rector = '', verso = ''">
                                                                    Sauvegardé</v-btn>
                                                            </v-col>
                                                        </v-row>

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
import { CarteStore } from '../store/carte'
import { IndexedStore } from '@/store/indexeddb'

//import { mapActions, mapState } from 'pinia'

export default ({
    data() {
        return {
            length: 0,
            window: 0,
            model: null,
            category: [],
            category: null,
            toto: null,
            dialog: false,
            di: false,
            synosis: "",
            carte: null,
            dd: null,
            verso: "",
            rector: ""
        }
    },
    methods: {
        //...mapActions(CategoryStore, ["addCategory"])
        Sauvegator(index) { 
            this.category.setSynopisi(this.synosis, index);
        },
        setcarde(index) {
            console.log(this.rector, this.verso, index);
            this.category.setCarte(this.rector, this.verso, index)
            this.gtest(index)
        },
        gtest(arg) {
            console.log();
            this.dd = this.category.getAllCarteById(arg)
        },
        test() {
            this.category.init()
            this.category.init()
            this.category.init()
            this.category.init()
            this.category.addCategory()
        }
    },
    setup() {
        const category = CategoryStore()
        const carte = CarteStore()
        const indexedStore = IndexedStore()

        return { category, carte, indexedStore }
    },
    computed() {
        //...mapState(CategoryStore, ["getCategory", ])
        
    },
    mounted() {
        if (window.location.hostname == 'localhost') window.app = this
        this.test()

    }
})
</script>