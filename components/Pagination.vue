<template>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <span>{{ currentPage }} de {{ lastPage }}</span>
      <button @click="nextPage" :disabled="currentPage === lastPage">Próxima</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUsersStore } from '@/stores/users';
  
  const userStore = useUsersStore();
  const currentPage = ref(userStore.currentPage);
  const lastPage = ref(userStore.lastPage);
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      userStore.previousPage();
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < lastPage.value) {
      userStore.nextPage();
    }
  };
  
  // Assista a mudanças na página atual e última página usando watchEffect
  watchEffect(() => {
    currentPage.value = userStore.currentPage;
    lastPage.value = userStore.lastPage;
  });
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  