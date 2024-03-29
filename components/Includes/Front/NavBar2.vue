<template>
    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

        <div class="logo flex items-center">
            <nuxt-link to="/">
                 <img src="~/assets/images/zg-logo.png" alt="ZG Cleaning Services Tampa Bay" class="w-20">
            </nuxt-link>
            <nuxt-link to="/">
                <p class="font-bold text-white text-xl">ZG Cleaning Services</p>
            </nuxt-link>           
        </div>

        <!--Toggle Mobile Menu-->
        <div @click="menuOpen" class="md:hidden text-white  absolute right-6 top-7">
            <div v-if="open">
                <i class="material-icons text-[44px] cursor-pointer">close</i>
            </div>
            <div v-else>
                <i class="material-icons text-[44px] cursor-pointer">menu</i>
            </div>

        </div>

        <div>
            <!--menu links-->
            <nav>
                <ul 
                    class="                    
                        px-10 pb-10 absolute bg-gray-900 w-full top-45 duration-700 ease-in z-50
                        md:flex md:items-center md:px-0 md:pb-0 md:static md:w-auto
                    "
                    :class="[open ? 'left-0' : 'left-[-100%]']"
                    id="menu-links"
                >
                    
                    <li 
                        @click="menuOpen"
                        v-for="(link, index) in links" :key="index" 
                        class="
                            md:mx-4 md:my-0 my-6 hover:text-yellow-500 hover:font-bold
                        ">
                        <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>
                    </li>

                    <IncludesFrontButton class="md:hidden">
                        <nuxt-link to="/booking">Book Now</nuxt-link>
                    </IncludesFrontButton>
                </ul>
                
            </nav>
        </div>
        
       <div class="hidden md:block">
            <IncludesFrontButton>
                <nuxt-link to="/booking">Book Now</nuxt-link>
            </IncludesFrontButton>
       </div>
        
    </div>
</template>

<script setup>
import { watch } from 'vue';
let open = ref(false)

let links = ref([
    {name: 'Home', url: '/'},
    {name: 'Services', url: '/services'},
    {name: 'Free Quote', url: '/quotes'},
    {name: 'About Us', url: '/about-us'},
    {name: 'Contact', url: '/contact'},
])

const menuOpen = () => {
    open.value = !open.value
}



</script>

<style scoped>

</style>