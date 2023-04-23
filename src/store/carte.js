import { defineStore } from "pinia";

export const CarteStore = defineStore('CardStore', {
    state: () => {
        return {
            carte: []
        }
    },
    getters: {
        getAllCarteById: (state) => {
            return (f) => { return state.carte.filter(carte => {
                return carte.idCarte.id === f
            }); }
        }
    },
    actions: {
        setCarte(recto, verso, id) {
            this.carte.push({idCarte: id, carteRecto: recto, carteVerso: verso})
        }

    }
})