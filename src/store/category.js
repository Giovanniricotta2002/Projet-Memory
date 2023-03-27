import { defineStore } from 'pinia'


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
    },
    actions: {
        addCategory(){
            this.length += 1
            this.category.push({name: '', id: this.length})
        },
        setNomCategory(name, index) {
            console.log(name, index);
            this.category[index].name = name
        }
    }
  })