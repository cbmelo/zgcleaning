<template>
    <div class="container mx-auto w-2/5 border">
       <button @click.prevent="onClick" class="bg-green-500 px-10 py-2 rounded shadow-sm text-white">Send</button>

    </div>
</template>

<script setup>

const onClick = () => {
    console.log('Send');
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