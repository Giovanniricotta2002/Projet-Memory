import { defineStore } from 'pinia'

export const IndexedStore = defineStore('IndexedStore', {
    id: 'ProjectMemory-database',
    state: () => ({
        items: [],
        itemsCarde: []
    }),
    actions: {
        async addItem(item) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store')
            const request = objectStore.add(JSON.parse(JSON.stringify(item)))
            await new Promise(resolve => request.onsuccess = resolve)
            this.items.push(item)
        },
        async loadItems() {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store', 'readonly')
            const objectStore = transaction.objectStore('ProjectMemory-store')
            const request = objectStore.getAll()
            await new Promise(resolve => request.onsuccess = resolve)
            this.items = request.result
            // return this.items
        },
        async deleteItem(id) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store')
            const request = objectStore.delete(id)
            await new Promise(resolve => request.onsuccess = resolve)
            this.items = this.items.filter(item => item.id !== id)
        },
        async Update(arg) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store')
            const request = objectStore.put(arg)
            await new Promise(resolve => request.onsuccess = resolve)
            this.items = request.result
        },
        d() {
            return this.items
        },


        async addItemCard(item) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store-Carde', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store-Carde')
            const request = objectStore.add(JSON.parse(JSON.stringify(item)))
            await new Promise(resolve => request.onsuccess = resolve)
            this.itemsCarde.push(item)
        },

         async loadItemsCard() {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store-Carde', 'readonly')
            const objectStore = transaction.objectStore('ProjectMemory-store-Carde')
            const request = objectStore.getAll()
            await new Promise(resolve => request.onsuccess = resolve)
            this.itemsCarde = request.result
            // return this.items
        },

        async deleteItemCard(id) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store-Carde', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store-Carde')
            const request = objectStore.delete(id)
            await new Promise(resolve => request.onsuccess = resolve)
            this.itemsCarde = this.itemsCarde.filter(item => item.id !== id)
        },
        async UpdateCard(arg) {
            const db = await this.$db
            const transaction = db.transaction('ProjectMemory-store-Carde', 'readwrite')
            const objectStore = transaction.objectStore('ProjectMemory-store-Carde')
            const request = objectStore.put(arg)
            await new Promise(resolve => request.onsuccess = resolve)
            this.itemsCarde = request.result
        },

        d2(){
            return this.itemsCarde
        }


    },
    getters: {
        $db: () => {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open('ProjectMemory-database', 1)
                request.onerror = () => reject(request.error)
                request.onupgradeneeded = () => {
                    const db = request.result
                    if (!db.objectStoreNames.contains('ProjectMemory-store')) {db.createObjectStore('ProjectMemory-store', { keyPath: 'id', autoIncrement: true })}
                    if (!db.objectStoreNames.contains('ProjectMemory-store-Carde')) {db.createObjectStore('ProjectMemory-store-Carde', { keyPath: 'id', autoIncrement: true })}
                }
                request.onsuccess = () => resolve(request.result)
            })
        }
    }
})

