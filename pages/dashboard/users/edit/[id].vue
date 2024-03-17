<template>
  <div class="w-1/3 mx-auto card">
    <h3 class="font-bold text-center p-4">Edit user</h3>
    <form @submit.prevent="submitForm">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input 
            v-model="user.first_name" 
            type="text" 
            name="floating_first_name" 
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " 
          />
          <label for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-2/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">First
            name</label>
          <p v-if="errors.first_name">
            <span class="text-sm text-red-400">{{ errors.first_name[0] }}</span>
          </p>

        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input v-model="user.last_name" type="text" name="floating_last_name" id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
          <label for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
            name</label>
          <p v-if="errors.first_name">
            <span class="text-sm text-red-400">{{ errors.last_name[0] }}</span>
          </p>
        </div>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input v-model="user.email" type="email" name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
          address</label>
        <p v-if="errors.first_name">
          <span class="text-sm text-red-400">{{ errors.email[0] }}</span>
        </p>
      </div>

      <!--Fetch all role(s)-->
      <div>
        <div v-for="role in userRoles" :key="role.id">

          <input v-model="role.user_has" type="checkbox" value="{{userRoles.id}}">
          <label class="mx-2">{{ role.name }}</label>

        </div>
      </div>
      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    {{ userRoles.id }} - {{ user.first_name }}
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUsersStore } from '@/stores/users';

const userStore = useUsersStore()

const { id } = useRoute().params;
let userRoles = ref([])

onMounted(async () => {
  try {
    await userStore.getRoles()
    await userStore.getUserDetails(id);

    userRoles.value = roles.value.map((all_roles_item) => {

      const exists = user.value.roles.some((user_item) => {
        return all_roles_item.name == user_item.name
      })

      return {
        id: all_roles_item.id,
        name: all_roles_item.name,
        user_has: exists
      }
    })

  } catch (error) {
    console.error('Error fetching user details:', error);
  } finally {
    isLoading = false;
  }
});

const submitForm = async () => {
  try {
    await userStore.editUser(id, {
      first_name: user.value.first_name,
      last_name: user.value.last_name,
      email: user.value.email,
      role_id: userRoles.value
        .filter((role) => {
          if (role.user_has == true)
            return role
        })
        .map((role) => {
          return role.id
        })
    });
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

const { addUser, errors, user, roles } = storeToRefs(userStore)

</script>

<style lang="scss" scoped></style>