import { defineStore } from 'pinia'

import { CarteStore } from './carte'

const carte = CarteStore()

export const CategoryStore = defineStore('categoryS', {
    state: () => {
        return {
            category: [],
            length: 0,
        }
    },
    getters: {
        getCategory: (state) => {
            return state.category
        },
        getCategoryName: (state) => {
            return (categorieId) => state.category.find((categorie) => categorie.id === categorieId)
        },
        getSynopisi: (state) => { return (categorieId)=> state.category.find((categorie) => categorie.id === categorieId)},
        getAllCarteById: () => {return (d) => {return carte.getAllCarteById(d)} }
    },
    actions: {
        addCategory(){
            this.category.push({name: '', id: this.length++, synopsis: ""})
        },
        setNomCategory(name, index) {
            this.category[index].name = name
        },

        setSynopisi(value, index) {
            this.category[index].synopsis = value
        },

        setCarte(recto, verso, index){
           carte.setCarte(recto, verso, this.category.find((categorie) => categorie.id === index))
        }
    }
  })