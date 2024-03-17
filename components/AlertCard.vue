<!-- AlertCard.vue -->
<template>
    <div class="flex justify-between" :class="['bg-gray-100 p-2', { 'bg-green-500 text-white' : variant === 'success' }]">
      <p>Seu formulário foi enviado com sucesso</p>
      <div >
        <button @click="onClick" class="bg-white text-black p-2 items-center">X</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const { variant } = defineProps(['variant']);
  const emit = defineEmits(['close'])
  

  const onClick = () => {
    emit('close')    
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>