<template>
    <div class="pagination">
      <button @click="goToFirstPage" :disabled="currentPage === 1"><<</button>
      <button @click="previousPage" :disabled="currentPage === 1"><</button>
      <template v-if="pagesToShowStart > 1">
        <span>...</span>
      </template>
      <template v-for="page in visiblePages" :key="page">
        <button @click="goToPage(page)" :class="{ 'active': page === currentPage }">{{ page }}</button>
      </template>
      <template v-if="pagesToShowEnd < lastPage">
        <span>...</span>
      </template>
      <button @click="nextPage" :disabled="currentPage === lastPage">></button>
      <button @click="goToLastPage" :disabled="currentPage === lastPage">>></button>
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
  const pagesToShowStart = ref(1);
  const pagesToShowEnd = ref(pagesToShow);
  
  const goToFirstPage = () => {
    userStore.getUsers(1);
  };
  
  const goToLastPage = () => {
    userStore.getUsers(lastPage.value);
  };
  
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
  
  const updateVisiblePages = () => {
    visiblePages.value = calculateVisiblePages();
  };
  
  updateVisiblePages();
  
  // Assista a mudanças na página atual e última página usando watchEffect
  watchEffect(() => {
    currentPage.value = userStore.currentPage;
    lastPage.value = userStore.lastPage;
    updateVisiblePages();
  });
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  
  button {
    margin: 0 5px;
    padding: 5px 10px;    
    color: #000;
    border-radius: 5px;
    cursor: pointer;
    border: solid 1px #ccc;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  button.active {
    background-color: #999;
  }
  button:hover {
    background-color: darkgreen;
    color: #fff;
  }
  </style>
  