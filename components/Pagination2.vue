<template>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <template v-for="page in visiblePages" :key="page">
        <button @click="goToPage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
      </template>
      <button @click="nextPage" :disabled="currentPage === lastPage">Próxima</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUsersStore } from '@/stores/users';
  
  const userStore = useUsersStore();
  const currentPage = ref(userStore.currentPage);
  const lastPage = ref(userStore.lastPage);
  const pagesToShow = 5;
  
  const calculateVisiblePages = () => {
    const totalPages = lastPage.value;
    let startPage = currentPage.value - Math.floor(pagesToShow / 2);
    let endPage = currentPage.value + Math.floor(pagesToShow / 2);
  
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, pagesToShow);
    }
  
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - (pagesToShow - 1));
    }
  
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  
    return pages;
  };
  
  const visiblePages = ref([]);
  
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
  
  const goToPage = (page) => {
    userStore.getUsers(page);
  };
  
  // Assista a mudanças na página atual e última página usando watchEffect
  watchEffect(() => {
    currentPage.value = userStore.currentPage;
    lastPage.value = userStore.lastPage;
    visiblePages.value = calculateVisiblePages();
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
  
  button.active {
    background-color: #0056b3;
  }
  </style>
  