<template>
    <div>
        <form @submit.prevent="AddNewTask" class="">
            <label class="w-100">Add New To Do</label>
            <input v-model="form.task" type="text" class="border rounded mx-2">
            <button class="bg-green-500">Add Task</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodo } from '../stores/todo'

const form = ref([
    'task'
])

const store = useTodo()

const AddNewTask = () => {

 return store.addTodo(form.value.task)
 
}

</script>

<style lang="scss" scoped>

</style>