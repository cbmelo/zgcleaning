<template>
    <div class="container mx-auto w-2/5">
        <h3 class="font-bold text-center mt-4 mb-4">Products - Cart ${{ cartTotal }}</h3>
        <div v-for="product in products" :key="product.id">
            <ProductsAll :product="product" />
        </div>

        
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

const { products, cartTotal } = storeToRefs(usersStore)


</script>

<style scoped>

</style>