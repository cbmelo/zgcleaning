<template>
    <div class="
    booking 
            w-full 
            md:w-[70%]
            mx-auto  
            p-4 
            m-4
        
           ">
    
           <h1 class="font bold md:text-xl uppercase mt-4 mb-4 text-center mb-8">Tell me about your home - Book Now</h1>

           <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">{{ successMessage }}</span>
          </div>
        
        <!--form-->
        
            <div class="
                    md:flex 
                    justify-between  ">
                <div class="bg-white p-8 md:w-[70%]">
                    <form @submit.prevent="handleBooking">
                    <div class="md:flex -mx-3 mb-6">
                        <div class="
                                w-full 
                                md:w-1/2 
                                px-3 
                                mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input 
                            v-model="form.first_name"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input 
                            v-model="form.last_name"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                        </div>
                    </div> 
                    <div class="w-full md:w-full px-3 -mx-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Email?
                            </label>
                            <input 
                                v-model="form.email"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="">
                        </div>
                        <div class="w-full md:w-full px-3 -mx-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Your Best Mobile Number?
                            </label>
                            <input 
                                v-model="form.mobile"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="">                   
                    </div>
                    <!--Booking Options-->

                    <div>
                        <h3 class="font-bold text-start mb-2">Choose Service Category?</h3>
                        <p class="mb-4">Select Your Service</p>
                    <div class="flex justiy-between -mx-3 mb-2">
                        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                            <select 
                                v-model="form.service_category"
                                class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            >
                                <option value="house">House</option>
                                <option value="Apartment">Apartment</option>
                            </select>
                        </div>
                    </div>
                    </div><!--end category-->
                    <div>
                        <h3 class="font-bold text-start mb-2">How Big is Your House?</h3>
                        <!-- <p class="mb-4">Tell us about the size of your place (a half bath count as a full bathroom).</p> -->
                    <div class="flex justiy-between -mx-3 mb-2">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <select    
                                id="houseSize" 
                                v-model="form.house_size"
                                class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            >
                            <option value=""># of Bedrooms?</option>
                            <option v-for="(size, index) in houseSize" :key="index" :value="size">
                                {{ size.name }}
                            </option>
                            </select>
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <select 
                                    id="bathroomSize" 
                                    v-model="form.number_bathroom"
                                    class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"    
                                >
                                <option value=""># of Bathrooms</option>
                                <option v-for="(size, index) in bathroomSize" :key="index" :value="size">
                                    {{ size.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    </div><!--end Size-->   
                    <div>
                        <h3 class="font-bold text-start mb-2">Choose Date and Time Preference?</h3>
                        <!-- <p class="mb-4">Tell us about the size of your place (a half bath count as a full bathroom).</p> -->
                        <div class="flex justiy-between -mx-3 mb-2">
                           
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Date</label>
                                <input 
                                    v-model="form.date"
                                    type="date"
                                    class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Time</label>
                               
                                    <select v-model="form.time" id="time" name="time" autocomplete="time" class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                <option value="06:00 AM">6:00 AM</option>
                <option value="07:00 AM">7:00 AM</option>
                <option value="08:00 AM">8:00 AM</option>
                <option value="09:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
            </select>
                                
                               
                            </div>
                        </div>
                    </div><!--end time-->       
                    <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <label class="block w-full px-3 mb-3">
                                <span class="text-gray-700">How Often:</span>
                            </label>
                            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-indigo-600" v-model="form.how_often" value="One Time">
                                    <span class="ml-2">One Time</span>
                                </label>
                            </div>
                            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-indigo-600" v-model="form.how_often" value="Weekly">
                                    <span class="ml-2">Weekly</span>
                                </label>
                            </div>
                            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-indigo-600" v-model="form.how_often" value="Biweekly">
                                    <span class="ml-2">Biweekly</span>
                                </label>
                            </div>
                            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-indigo-600" v-model="form.how_often" value="Monthly">
                                    <span class="ml-2">Monthly</span>
                                </label>
                            </div>
                        </div>
                    </div><!--end often-->     
                    <div>
                        <h3 class="font-bold text-start mb-2">Select Packs and Extras</h3>
                        
                        <div class=" 
                            md:flex 
                            justify-between 
                            items-center
                            grid grid-cols-2
                            md:grid md:grid-cols-4 
                            gap-4 
                            w-full 
                            md:w-full 
                            px-2 
                            mb-6 
                            md:mb-0 ">  
                            <div v-for="(service, index) in addExtraServices" :key="index" class="w-full h-full">
                                <div 
                                    @click="handleAddExtraService(service, service.price)"
                                    :class="{ 'selected': form.extra_services.includes(service) }"
                                    class="service h-24 cursor-pointer content-center text-center items-center block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                                    <i class="material-icons text-red-500">{{service.icon}}</i>
                                    <p class="text-sm">{{ service.name}}</p>
                                    <div v-if="service.selected" class="flex justify-center items-center mt-2">
                                        <button @click.stop="increaseQuantity(service)" class="px-2 py-1 bg-blue-500 text-white rounded-l">+</button>
                                        <span class="px-2">{{ service.quantity }}</span>
                                        <button @click.stop="decreaseQuantity(service)" class="px-2 py-1 bg-blue-500 text-white rounded-r">-</button>
                                    </div>
                                    <span class="tooltip p-2 border-b bg-black text-white z-50">
                                        <p class="z-40">{{ service.tooltip }}</p>
                                    </span>
                                </div>                            
                            </div>
                        </div>


                    </div><!--end extras-->                    

                    <div class="z-[-50]">
                        <h3 class="font-bold text-start mb-2">Where do You Live?</h3>
                        <div class="w-full md:w-full px-3 mb-6 md:mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Address
                            </label>
                            <input 
                                v-model="form.address"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
                        </div>
                        <div class="w-full md:w-full px-3 mb-6 md:mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Address 2
                            </label>
                            <input 
                                v-model="form.address2"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">                   
                    </div>
                    <div class="md:flex justifi-between items-center">
                            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0"> 
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    State
                                </label>                       
                                <select 
                                    v-model="form.state"
                                    class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
                                    <option value="Florida">Florida</option>
                                </select>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0"> 
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    City
                                </label>                         
                                <select 
                                    v-model="form.city"
                                    class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >                               
                                    <option value="Tampa">Tampa</option>
                                    
                                </select>                            
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Zipcode
                                </label>
                            <input 
                                v-model="form.zipcode"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
                        
                            </div>
                    </div>
                    
                    </div>  
                    <button class="bg-green-900 py-2 px-4 w-full rounded mt-4 uppercase text-white font-bold">Book Now</button>
                    </form>
                </div>
           
            
    
             <div class="w-full md:w-[30%] text-black bg-[#00B8E0] text-white p-4 rounded-lg border-gray-150 border">
                <div class="border-b-2 pb-4 mb-4">
                    <h3  class="font-bold text-center text-[24px]">Booking Summary</h3> 
                </div>
                <div class="space-y-4 text-sm">
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">person</i> {{ form.first_name }} {{ form.last_name }}</p>   
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">mail</i> {{ form.email }}</p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">smartphone</i> {{ form.mobile }}</p> 
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">house</i>  {{ form.service_category }}</p>
                    <p 
                        class="flex gap-2 items-center"><i class="material-icons font-bold">format_list_numbered</i> 
                        
                        {{ form.house_size ? `${form.house_size.name} - $${form.house_size.price}` : '' }}
                    
                    </p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">bathroom</i> 
                      
                        {{ form.number_bathroom ? `${form.number_bathroom.name} - $${form.number_bathroom.price}` : '' }}
                    </p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">schedule</i> 
                        {{ form.time }}
                    </p>
<p class="flex gap-2 items-center"><i class="material-icons font-bold">hourglass_empty</i>
    {{ new Date(form.date).toLocaleDateString('en-US') }}
</p>

                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">repeat</i> {{ form.how_often }}</p>
                   
                    <div v-if="form.extra_services.length > 0" class="mb-4">
                       <div class="flex">
                            <i                               
                                class="material-icons font-bold mr-2"
                            >
                                add_circle
                            </i> 
                            <h3 class="font-bold">Extra Services Added:</h3>
                            
                       </div>
                        <ul class="">                            
                            <li 
                                v-for="(service, index) in form.extra_services" :key="index" class="mr-2">
                                {{ service.name }} ${{ service.price }}
                                <template v-if="index < form.extra_services.length - 1">, </template>
                                
                            </li>
                        </ul>
                    </div>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">home</i> {{ form.address }}</p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">apartment</i> {{ form.address2 }}</p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">pin_drop</i> {{ form.state }}</p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">landscape</i> {{ form.city }}</p>
                    <p class="flex gap-2 items-center"><i class="material-icons font-bold">vpn_key</i>{{ form.zipcode }}</p>
                    </div><!--End extra service-->
                    <div class="flex justify-between items-center total border-t-2 border-gray-300 mt-4 mb-4">
                        <p class="pt-4 text-[24px]">Total:</p>
                        <p class="pt-4 text-[48px]">${{ calculateTotal() }}</p>
                    </div>   
                </div>       
            </div>
        
        </div>
   
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router'

  
const router = useRouter()
const errors = ref({})
const successMessage = ref('')

const calculateTotal = () => {
    let total = 0;

    // Adiciona o preço do tamanho da casa selecionado
    if (form.value.house_size) {
        total += parseFloat(form.value.house_size.price);
    }

    // Adiciona o preço do número de banheiros selecionado
    if (form.value.number_bathroom) {
        total += parseFloat(form.value.number_bathroom.price);
    }

    // Adiciona o preço de cada serviço extra selecionado
    form.value.extra_services.forEach(service => {
        total += parseFloat(service.price) * service.quantity; // Multiplica pelo quantidade
    });

    return total;
};


// Seu código existente...

const addExtraServices = ref([
    { name: 'Window Cleaning Inside', price: 8, cor:'text-red-700',tooltip: 'Price Range from $3 to $8', icon: 'speed', disabled: false},
    { name: 'Window Cleaning Outside', cor: 'text-yellow-400', price: 4, tooltip: 'Price Range from $4 to $9', icon: 'calendar_today', disabled: false},
    { name: 'Laundry(Washer/Dyer)', price: 10, tooltip: 'Price Range from $10 to $20 per load', icon: 'pets', disabled: false},
    { name: 'Fridge', price: 15, tooltip: 'Price Range from $15 to $30', icon: 'kitchen', disabled: false},
    { name: 'Changing Bed', price: 18, tooltip: 'Price Range from $12 to $18', icon: 'kitchen', disabled: false},
    { name: 'Wood Polish', price: 50, tooltip: 'Price Range from $30 to $50', icon: 'cabin', disabled: false},
    { name: 'Dustin Blinds', price: 20, tooltip: 'Price $20', icon: 'blinds', disabled: false},
    { name: 'Cleaning Interior of Cabinets', price: 25, tooltip: 'Price Range from $25 to $45', icon: 'countertops', disabled: false},
    { name: 'Organization of Cabinets', price: 50, tooltip: 'Price Range from $50 to $60', icon: 'corporate_fare', disabled: false},
    { name: 'Baseboard Dusting', price: 35, tooltip: 'Price $35', icon: 'cleaning_services', disabled: false},
    { name: 'Oven', price: 40, tooltip: 'Price Range from $20 to $40', icon: 'corporate_fare', disabled: false},
    { name: 'Patio/Garage Sweep', price: 35, tooltip: 'Price $30', icon: 'cleaning_services', disabled: false},
]);

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    service_category: 'House',
    house_size: '',
    number_bathroom: '',
    date: '',
    time: 'Select Time',
    how_often: '',
    extra_services: [],
    address: '',
    address2: '',
    state: 'Florida',
    city: 'Tampa',
    zipcode: '',
    total: 0,
});

const houseSize = ref([
    {name: '1 bedroom', price: 100},
    {name: '2 Bedroom', price: 130 },
    {name: '3 Bedroom', price: 160},
    {name: '4 Bedroom', price: 320},
]);

const bathroomSize = ref([
    {name: '1 Bathroom', price: 40},
    {name: '2 Bathrooms', price: 80},
    {name: '3 Bathrooms', price: 20},
    {name: '4 Bathrooms', price: 160},
    {name: '5 Bathrooms', price: 200},
    {name: '6 Bathrooms', price: 40},
    {name: '7 Bathrooms', price: 280},
    {name: '8 Bathrooms', price: 20},
    {name: '9 Bathrooms', price: 360},
]);

watchEffect(() => {
    form.value.total = calculateTotal();
});

const increaseQuantity = (service) => {
    service.quantity++;
};

const decreaseQuantity = (service) => {
    if (service.quantity > 0) {
        service.quantity--;
        form.value.total -= service.price;
    }

    // Se a quantidade for zero, desmarca o serviço
    if (service.quantity === 0) {
        service.selected = false;
        const index = form.value.extra_services.findIndex(s => s === service);
        form.value.extra_services.splice(index, 1);
        form.value.total -= service.price;
    }
};


const handleAddExtraService = (service, price) => {
    if (!isServiceSelected(service)) {
        // Se o serviço não estiver selecionado, adiciona-o à lista de serviços extras
        service.selected = true;
        service.quantity = 1;
        form.value.extra_services.push(service);
        form.value.total += service.price * service.quantity; // Multiplica o preço do serviço pela quantidade ao adicionar
    } else {
        // Se o serviço já estiver selecionado, desmarca-o e remove-o da lista de serviços extras
        service.selected = false;
        const index = form.value.extra_services.findIndex(s => s === service);
        form.value.extra_services.splice(index, 1);
        form.value.total -= service.price * service.quantity; // Subtrai o preço do serviço pela quantidade ao remover
    }
};


const isServiceSelected = (service) => {
    return form.value.extra_services.includes(service);
};

const handleBooking = async () => {
    try {
        const formExtra = {...form.value}
      
        formExtra.extra_services = formExtra.extra_services.map( (item) => {
            return item.name
        })

        // Extrai apenas o nome do tamanho da casa selecionado
        formExtra.house_size = formExtra.house_size.name;

        // Extrai apenas o nome do número de banheiros selecionado
        formExtra.number_bathroom = formExtra.number_bathroom.name;

        const axios = useNuxtApp().$api
        const response = await axios.post('/api/v1/booking', formExtra)
        console.log(response.data);

        if (response.status === 200) {
      // Exibir mensagem de sucesso
      successMessage.value = 'As soon as possible one of our representatives will contact you!'

      setTimeout(() => {
        successMessage.value = 'As soon as possible one of our representatives will contact you!!'
        // Redirect to home page after 3 seconds
        setTimeout(() => {
          router.push({ path: '/' })
        }, 3000)
      }, 1000)
        }
    } catch (error) {
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
.service {
    position: relative; /* Define a posição relativa para o elemento pai */
}

.service .tooltip {
    position: absolute; /* Define a posição absoluta para o tooltip */
    top: 100px; /* Posiciona o tooltip acima da caixa */
    left: 40%; /* Alinha o tooltip no centro horizontalmente */
    transform: translateX(-50%); /* Centraliza horizontalmente */
    display: none; /* Oculta o tooltip por padrão */
    z-index: 9999; /* Garante que o tooltip esteja acima de outros elementos */
}

.service:hover .tooltip {
    display: block; /* Mostra o tooltip quando o mouse está sobre a caixa */
}


.selected {
    /* Add styles for the selected extra service */
    background-color: #ff0; /* Yellow background color as an example */
    padding: 10px;
}
.disabled {
    pointer-events: none; /* Impede a interação do usuário com o botão */
    opacity: 0.5; /* Reduz a opacidade para indicar que está desabilitado */
}
</style>