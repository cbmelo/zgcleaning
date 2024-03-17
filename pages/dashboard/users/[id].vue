<template>
    <div class="card w-1/3 mx-auto">
      <h3>User Detail for user ID {{ user.id }}</h3>
      <div v-if="user.isLoading">Loading...</div>
      <div v-else>
        <p><span class="font-bold">Name: </span>{{ user.first_name }} {{ user.last_name  }}</p>
        <p><span class="font-bold">Email: </span>{{ user.email}}</p>
        <!-- Display other user details as needed -->
        <!--Pega as roles do usuario-->
      <template v-if="user.roles && user.roles.length > 0">
        <div class="flex justify-start">
          <p class="font-bold mr-2">Role(s):</p>
          <div v-for="(role, index) in user.roles" :key="role.id">
            <span class="p-px">{{ role.name}}</span>
            <template v-if="index < user.roles.length - 1">,  </template>
          </div>
        </div>
      </template>
      </div>
      <nav class="flex justify-end">
        <button class="bg-red-500 p-2 rounded text-white mt-2">Delete Account</button>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useUsersStore } from '@/stores/users';
  
  const { id } = useRoute().params;
  const userStore = useUsersStore();
  
  onMounted(async () => {
    try {
      await userStore.getUserDetails(id);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      isLoading = false;
    }
  });

  const { user } = storeToRefs(userStore)
  </script>
  
  <style scoped>
    /* Your styles here */
  </style>
  