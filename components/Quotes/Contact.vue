<template>
    <div class="contact">
      <div class="mt-[50px] text-left font-bold">
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            
            <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">{{ successMessage }}</span>
          </div>
            <!-- Formulário de contato -->
            <form @submit.prevent="submitForm" class="space-y-8">
              <div class="flex -mx-3 mb-6">
                <!-- First Name -->
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label for="grid-first-name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                  <input v-model="form.first_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                  <p v-if="errors.first_name" class="text-red-500 text-xs italic">{{ errors.first_name }}</p>
                </div>
                <!-- Last Name -->
                <div class="w-full md:w-1/2 px-3">
                  <label for="grid-last-name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
                  <input v-model="form.last_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe">
                  <p v-if="errors.last_name" class="text-red-500 text-xs italic">{{ errors.last_name }}</p>
                </div>
              </div>
               <!-- Mobile> -->
               <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your best Mobile #</label>
                <input v-model="form.mobile" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" type="tel" id="mobile" placeholder="email@email.com">
                <p v-if="errors.mobile" class="text-red-500 text-xs italic">{{ errors.mobile }}</p>
              </div>
              <!-- Email -->
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input v-model="form.email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" type="email" id="email" placeholder="email@email.com">
                <p v-if="errors.email" class="text-red-500 text-xs italic">{{ errors.email }}</p>
              </div>
              <!-- Subject -->
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input v-model="form.subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" type="text" id="subject" placeholder="Let us know how we can help you">
                <p v-if="errors.subject" class="text-red-500 text-xs italic">{{ errors.subject }}</p>
              </div>
              <!-- Services -->
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Services</label>
              <div class="flex flex-wrap">
                <label class="flex items-center mr-4">
                  <input v-model="form.service" type="checkbox" value="Pressure Washing">
                  <span class="ml-2">Pressure Washing</span>
                </label>
                <label class="flex items-center mr-4">
                  <input v-model="form.service" type="checkbox" value="Window Cleaning">
                  <span class="ml-2">Window Cleaning</span>
                </label>
                <label class="flex items-center mr-4">
                  <input v-model="form.service" type="checkbox" value="Junk Removal">
                  <span class="ml-2">Junk Removal</span>
                </label>
                <label class="flex items-center">
                  <input v-model="form.service" type="checkbox" value="Christmas Lights">
                  <span class="ml-2">Christmas Lights</span>
                </label>
              </div>
            
            </div>
              <!-- Message -->
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea v-model="form.message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" rows="6" id="message" placeholder="Leave a comment..."></textarea>
                <p v-if="errors.message" class="text-red-500 text-xs italic">{{ errors.message }}</p>
              </div>
              <!-- Botão de enviar -->
                          <!-- Botão de enviar -->
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

  
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios';
  
  const router = useRouter()
  
  const form = ref({
    first_name: '',
    last_name: '',
    subject: '',
    mobile:'',
    email: '',
    service: [],
    message: ''
  })
  
  const errors = ref({})
  const successMessage = ref('')
  
  async function submitForm() {
    // Clear previous errors and success message
    errors.value = {}
    successMessage.value = ''
  
    // Validate form fields
    if (!form.value.first_name) {
      errors.value.first_name = 'Please fill out this field.'
    }
    if (!form.value.last_name) {
      errors.value.last_name = 'Please fill out this field.'
    }
    if (!form.value.mobile) {
      errors.value.mobile = 'Please fill out this field.'
    }
    if (!form.value.email) {
      errors.value.email = 'Please fill out this field.'
    }
    if (!form.value.subject) {
      errors.value.subject = 'Please fill out this field.'
    }
    if (!form.value.service) {
      errors.value.service = 'Please fill out this field.'
    }
    if (!form.value.message) {
      errors.value.message = 'Please fill out this field.'
    }
  
    // Check if there are any errors
    if (Object.keys(errors.value).length === 0) {
      // If no errors, proceed with form submission
      // Simulate sending message (replace this with actual form submission logic)
      setTimeout(() => {
        successMessage.value = 'As soon as possible one of our representatives will contact you!!'
        // Redirect to home page after 3 seconds
        setTimeout(() => {
          router.push({ path: '/' })
        }, 3000)
      }, 1000)
    }

    try {
    // Enviar dados do formulário para o backend
    const axios = useNuxtApp().$api
    const response = await axios.post('/api/v1/send', form.value)

    // Verificar se o envio foi bem-sucedido
    if (response.status === 200) {
      // Exibir mensagem de sucesso
      successMessage.value = 'As soon as possible one of our representatives will contact you!'
      
      // Limpar campos do formulário após o envio bem-sucedido
      form.value.first_name = ''
      form.value.last_name = ''
      form.value.email = ''
      form.value.mobile = ''
      form.value.subject = ''
      form.value.service = []
      form.value.message = ''
    }
  } catch (error) {
    // Tratar erros de validação ou outros erros
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors
    } else {
      // Exibir mensagem de erro genérica se ocorrer um erro inesperado
      console.error('An unexpected error occurred:', error.message)
    }
  }
  }
  </script>
  
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  