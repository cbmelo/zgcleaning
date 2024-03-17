<template>
    <div>
        <h3>Counter: {{ count }} </h3>
        <h3>Double Count: {{ doubleCount }}</h3>
        <p>my name is {{ name }}</p>
        <button class="bg-green-500 p-2" @click="increment">Increment++</button>
        <button class="bg-green-500 p-2" @click="decrement">Decrement--</button>
    </div>
</template>

<script setup>
import { useCounter } from '~/stores/counter';
import { storeToRefs } from 'pinia'

const store = useCounter()

const { name, count, doubleCount } = storeToRefs(store)

const { increment, decrement } = store
</script>

<style scoped>

</style>