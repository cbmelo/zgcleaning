<template>
    <tr>  
      <td class="p-3 border border-gray-300"><p>{{ user.id }}</p> </td>
      <td class="p-3 border border-gray-300">{{ user.first_name }}</td>
      <td class="p-3 border border-gray-300">{{ user.email }}</td>
      <td class="p-3 border border-gray-300">
        <!--Pega as roles do usuario-->
        <template v-if="user.roles && user.roles.length > 0">
        <div v-for="(role, index) in user.roles" :key="role.id">
          <span>
            {{ role.name}}
            <template v-if="index < user.roles.length - 1">, </template>
          </span>
        </div>
      </template>
      </td>      
      <td class="p-3 border border-gray-300 flex items-center justify-center">
        <!-- Botões de ação, como "Details", "Edit" e "Delete" -->
        <button class="flex items-center bg-green-500 hover:bg-green-500 text-black font-bold py-2 px-4 rounded mr-2">
          <i class="material-icons text-white">
                <NuxtLink :to="`/dashboard/users/${user.id}`">account_box</NuxtLink>
          </i>
         
        </button>
          
         
        <button class="flex items-center bg-yellow-400 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded mr-2">
          <i class="material-icons text-orange-500">
                <NuxtLink :to="`/dashboard/users/edit/${user.id}`">edit</NuxtLink>
            </i>
          Edit</button>
        <button 
          @click="removeUser(user.id)"
           class="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
          <i class="material-icons text-yellow-300 cursor-pointer">
               delete
            </i>
          Delete</button>
          
      </td>              
     
    </tr>
</template>
  
<script setup>  
import { storeToRefs } from 'pinia';
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()
  
const { user } = defineProps(['user']);
const { deleteUser } = storeToRefs(usersStore)

const removeUser = async () => {
  await usersStore.deleteUser(user.id);
};
</script>

<style scoped>

</style>