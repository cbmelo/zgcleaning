import { defineStore } from "pinia";

import axios from "~/plugins/axios";

// const axios = useNuxtApp().$api
// export default axios

export const useProductStore = defineStore('products', {
    state: () => ({
        users: [],
        products: [
            {id: 1, name: 'Bola', price: 100},
            {id: 2, name: 'Skate', price: 200},
            {id: 3, name: 'Bone', price: 50}

        ],
        cart: []

    }),

    // Getters
    getters: {

        usersAll: (state) => state.users,
        cartTotal(state) {
            return state.cart.reduce( (total, item) => total += item.price, 0 ) 
        }
    },

    // Actions
    actions: {

        addProduct(product) {
            this.cart.push(product)
        },
        deleteProduct(id) {
            this.products = this.products.filter( p => p.id !== id)
            console.log(id);
        }
    }
})