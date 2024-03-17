<template>
    <div class="w-[92%] mx-auto">
        <div v-if="message">
            {{ message }}
        </div>
        <div v-if="isLoading" class="loading">Is Loading...</div>
        <div v-else>
            <div class="flex justify-between items-center">
                <h3>All Users - {{ totalUsers }}</h3>
                <nuxt-link to="/dashboard/users/register">
                    <button class="btn-green m-2">Add User</button>
                </nuxt-link>
            </div>
            <table class="min-w-full border-collapse w-full">
            <thead>
                <tr>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">ID</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">Full Name</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">Email</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">Role(s)</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">Actions</th>
                </tr>
            </thead>
            <tbody v-for="user in allUsers" :key="user.id" class="">
                    <UsersAll :user="user"/>
            </tbody>
        </table>
        </div>
     <Pagination4 />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
//import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

usersStore.getUsers()

const { users, allUsers, totalUsers, isLoading, message } = storeToRefs(usersStore)

</script>

<style scoped>

</style>