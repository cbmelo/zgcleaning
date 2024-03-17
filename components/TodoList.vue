
import type { TodoApp } from '#build/components';

import type { TodoList } from '#build/components';
<template>
    <div class="border rounded mt-4 p-4">
        <h3 class="font-bold mt-4 text-center">To Do List</h3>
    
        <ul v-for="todo in store.todoList" :key="todo.id">
           <TodoListItem 
            :id="todo.id"
            :task="todo.task"
            :completed="todo.completed"
            :date = "todo.date"
           />
        </ul>
    </div>
</template>

<script setup>
import { useTodo } from '@/stores/todo'

const store = useTodo()

</script>

<style scoped>

</style>