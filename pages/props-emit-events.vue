<template>
    <div v-if="close" class="container mx-auto w-2/5">
      <AlertCard :variant="success" @close="fechou"/>       
    </div>
</template>

<script setup>

const success = ref('success');


const close = ref(true)

const fechou = () => {
  close.value = false
}

</script>

<style scoped>
h3 {
    font-size: 64px;
}
.text {
    color: green;
}

</style>