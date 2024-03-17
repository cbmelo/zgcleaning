import { defineStore } from "pinia";

export const useCounter = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Ck'
    }),

    // Getters
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    },

    // Actions
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})