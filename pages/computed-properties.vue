<template>
    <div class="container mx-auto w-2/5">
       <p>{{ fullName }}</p>
       <div class="mt-[30px]">
        <h3>To Dos List - Completed </h3>
        <p 
          v-for="todo in completedTodos"
          :key="todo.id"
          class="mt-2"
        >
        {{ todo.title }} - {{ todo.completed }}
        </p>
       </div>

       <div class="mt-[30px]">
        <h3>To Dos List</h3>
        <p 
          v-for="todo in notCompleted"
          :key="todo.id"
          class="mt-2"
        >
        {{ todo.title }} - {{ todo.completed }}
        </p>
       </div>

       <div class="nt-[30px]">
        <h3>To Dos Checkbox</h3>
        <div v-for="todo in todos" :key="todo.id">
          <input 
            v-model="todo.completed"
            type="checkbox">
            <label class="mx-2">{{ todo.title }}</label>
            
        </div>
       
        
       </div>
    </div>
</template>

<script setup>

const first_name = ref('Christian')
const last_name = ref('Melo')
const todos = ref([

{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
])


const fullName = computed({
  // getter
  get() {
    return first_name.value + ' ' + last_name.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [first_name.value, last_name.value] = newValue.split(' ')
  }
})

const completedTodos = computed( () => {
  return todos.value.filter( todo => todo.completed)
})
const notCompleted = computed(() => {
  return todos.value.filter( todo => !todo.completed)
})
</script>

<style scoped>
h3 {
    font-size: 64px;
}
.text {
    color: green;
}

</style>