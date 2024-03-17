<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex items-center justify-between ">
                <span class="font-bold">
                    <NuxtLink to="/">FRONTEND</NuxtLink>
                </span>
                <ul class="flex space-x-6">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/users">Users</NuxtLink>
                    </li>
                </ul>
                <div class="border rounded p-2">
                    <input v-model="query" type="text">
                    <i class="material-icons mr-2 text-md">search</i>
                </div>
                <div class="flex space-between items-center">
                    <div v-if="!usersStore.user">
                        <NuxtLink to="/auth/register" class="mr-2">
                        Register
                        </NuxtLink>
                        <NuxtLink to="/auth/login" class="mr-2">
                            Login
                        </NuxtLink>
                    </div>
                    <div v-else>
                        <button @click="usersStore.handleLogout" class="mr-2">Logout</button>
                    </div>
                    <button>                    
                    <NuxtLink to="/business" class="btn-green flex">
                        <i class="material-icons mr-2 text-md">storefront</i>
                        For Business
                    </NuxtLink>
                </button>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { useUsersStore } from '~/stores/users';

const usersStore = useUsersStore()

watchEffect( () => {
    usersStore.getUsers(usersStore.query)
})


const { query } = storeToRefs(usersStore)

</script>

<style scoped>

</style>