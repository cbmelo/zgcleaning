<template>
    <div class="container mx-auto w-2/5 border">
        <div v-for="todo in todos" :key="todo.id">
        <h3 :class="['text', 'text-center']">{{todo.title}}</h3>
        <p>{{ name }}</p>
        <label>Name:</label>
        <input v-model="name" type="text" name="" id="">
        </div>
        <div class="mt-[30px]">
            <label>Sports</label>
            <select v-model="sports">
                <option value="">Choose one sport</option>
                <option value="Futebol">Futebol</option>
                <option value="Beach volleyball">Beach Volleyball</option>
                <option value="Tenis">Tenis</option>
            </select>
            <p>Sport Selected: {{  sports }}</p>
        </div>
        <div class="mt-[30px]">
            <input v-model="newsletter" type="radio" value="sim"> Sim
            <input v-model="newsletter" type="radio" value="nao"> Nao
            {{ newsletter }}
        </div>
        <div class="mt-30px">
            <label for="">Accept</label>
            <input v-model="contract" type="checkbox">
            <p>{{ contract }}</p>
        </div>

        <div class="mt-30px">
            <label for="">Cores</label>
            <input v-model="cores" type="checkbox" value="green">Green
            <input v-model="cores" type="checkbox" value="blue">Blue
            <p>{{ cores }}</p>
        </div>

    </div>
</template>

<script setup>
const todos = ref([
    { id: 1, title: 'Middle of nowhere', name: 'Christian Melo'}
])
const name = ref('Christian Melo')
const sports = ref('')
const newsletter = ref('')
const contract = ref(false)
const cores = ref([])
</script>

<style scoped>
h3 {
    font-size: 64px;
}
.text {
    color: green;
}

</style>