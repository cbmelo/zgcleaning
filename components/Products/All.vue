
<template>
    <div>
        <p class="flex justify-between items-center bg-green-300 m-2 p-2"> {{product.name}} - ${{ product.price }}
            
        </p>
        <div>
            <button @click="addToCart(product)" class="bg-green-700 p-2 text-white">Add to Cart</button>
            <button @click="deleteProduct(product.id)">Delete</button>
        </div>
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

const { product } = defineProps(['product'])

const { deleteProduct } = usersStore

const addToCart = (product) => {
    usersStore.addProduct(product)
   
}

</script>

<style scoped>

</style>