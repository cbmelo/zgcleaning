<template>
    <div>
        <li @click="toggleTodo(id)">{{ task }} - {{ date }} - {{ completed }}</li>
        <button @click="deleteTodo(id)">Delete</button>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { defineProps } from 'vue'
import { useTodo } from '../stores/todo'

const store = useTodo()

// Actions
const { toggleTodo, deleteTodo } = store

const props = defineProps({
    id: Number,
    task: String,
    completed: Boolean,
    date: String
})

const { id, task, completed, date } = toRefs(props)

</script>

<style lang="scss" scoped>

</style>