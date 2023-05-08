import { defineStore } from 'pinia'

import { CarteStore } from './carte'
import { IndexedStore } from './indexeddb'

const carte = CarteStore()
const indexedDB = IndexedStore()


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
        getSynopisi: (state) => { return (categorieId)=> state.category.find((categorie) => categorie.idc === categorieId)},
        getAllCarteById: () => {return (d) => {return carte.getAllCarteByCarteId(d)} }
    },
    actions: {
        init() {
            indexedDB.loadItems()
            this.category = JSON.parse(JSON.stringify(indexedDB.d()))
            carte.init()
        },
        addCategory(){
            indexedDB.addItem({name: '', idC: this.length++, synopsis: ""})
            indexedDB.loadItems()
            this.category = JSON.parse(JSON.stringify(indexedDB.d()))
        },
        setNomCategory(name, index) {
            this.category[index].name = name
            indexedDB.Update(JSON.parse(JSON.stringify(this.category[index])))

        },

        setSynopisi(value, index) {
            this.category[index].synopsis = value
            indexedDB.Update(JSON.parse(JSON.stringify(this.category[index])))
        },

        setCarte(recto, verso, index){
            console.log(index);
            carte.setCarte(recto, verso, this.category.find((categorie) => categorie.id === index))
        }
    }
  })