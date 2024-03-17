<template>
    <div class="bg-gray-900 p-4 md-flex md:items-center justify-between px-4">
        
        <div class="logo flex items-center">
            <nuxt-link to="/">
                 <img src="~/assets/images/zg-logo.png" alt="ZG Cleaning Services Tampa Bay" class="w-20">
            </nuxt-link>
            <nuxt-link to="/">
                <p class="font-bold text-white text-xl">ZG Cleaning Services</p>
            </nuxt-link>           
        </div>

        <!--Toggle Mobile Menu-->
        <div @click="menuOpen" class="text-white text-[24px] absolute right-6 top-10">
            <div v-if="open">
                <i class="material-icons ">close</i>
            </div>
            <div v-else>
                <i class="material-icons">menu</i>
            </div>

        </div>

        <!--menu links-->
        <nav>
            <ul 
                class="
                    text-white 
                    space-y-4 
                    mt-4 
                    md:flex
                    items-center
                    absolut
                    md:static
                    bg-gray-900
                    w-full
                    md:auto
                    pb-10
                    md:pb-0
                    px-6
                    md:px-0
                    top-14
                "
                :class="[open ? 'left-0' : 'left-[-100%]']"
                >
                
                <li v-for="(link, index) in links" :key="index">
                    <nuxt-link to="">{{ link.name }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

let open = ref(false)

let links = ref([
    {name: 'Home', url: '/'},
    {name: 'Services', url: '/'},
    {name: 'Gallery', url: '/'},
    {name: 'About Us', url: '/'},
    {name: 'Contact', url: '/'},
])

const menuOpen = () => {
    open.value = !open.value
}

</script>

<style scoped>

</style>