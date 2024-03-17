<template>
    <div>
        <h3>To Dos Component</h3>
        <p>Completed To Dos {{ totalCompleted }}/{{ totalTodo }}</p>
        <TodoForm />
        <TodoList />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodo } from '../stores/todo'

const store  = useTodo()

const {totalTodo, totalCompleted } = storeToRefs(store)

</script>

<style lang="scss" scoped>

</style>