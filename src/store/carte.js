import { defineStore } from "pinia";
import { IndexedStore } from "./indexeddb";

const indexedDB = IndexedStore()


export const CarteStore = defineStore('CardStore', {
    state: () => {
        return {
            carte: []
        }
    },
    getters: {
        getAllCarteByCarteId: (state) => {
            return (f) => { return state.carte.filter(carte => {
                return carte.idCarte.id === f
            })}
        },
        getAllCarteById: (state) => {
            return (f) => state.carte.filter(carte => carte.id === f)
        }

    },
    actions: {
        setCarte(recto, verso, id) {
            // this.carte.push({idCarte: id, carteRecto: recto, carteVerso: verso})
            indexedDB.addItemCard({idCarte: id, carteRecto: recto, carteVerso: verso})
            indexedDB.loadItemsCard()
            this.carte = JSON.parse(JSON.stringify(indexedDB.d2()))
            
        },
        init(){
            indexedDB.loadItemsCard()
            this.carte = JSON.parse(JSON.stringify(indexedDB.d2()))
        }

    }
})