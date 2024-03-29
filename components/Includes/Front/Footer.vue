<template>
    <div class=" w-full bg-[#007486] mt-[100px]">
        
        <div class="container w-[80%] mx-auto pt-[50px] pb-[50px] text-white">
            <div class="md:flex justify-between gap-2">
                <div class="w-full md:w-1/3">
                    <h3 class="text-lg font-bold mb-4">About ZG Cleaning</h3>
                    <div class="
                            border border-blue-100
                            md:border-0
                            mb-4
                            "
                        >
                    </div>
                    <p>
                        Established on January 13, 2015. Ever since, the company has been able to produce and deliver glamorous and outstanding cleaning services to all of its clients.
                    </p>
                </div>
                
                <div class="
                        w-full 
                        md:w-1/3 
                        md:text-center
                        "
                    >
                    <h3 class="
                            text-lg 
                            font-bold 
                            mb-4 mt-4
                            md:mt-0
                            "
                        >
                        Main Menu
                    </h3>
                    <div class="
                            border border-blue-100
                            md:border-0
                            mb-4
                            "
                        >
                    </div>
                    <nav>
                        <ul>
                            <li v-for="(link, index) in links" :key="index" class="hover:text-yellow-500">
                                <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>

                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="w-full md:w-1/3">
                    <h3 class="
                            text-lg 
                            font-bold 
                            mb-4 mt-4
                            md:mt-0
                            "
                        >Business Info</h3>
                    <div class="
                            border border-blue-100
                            md:border-0
                            mb-4
                            "
                        >
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <i class="material-icons text-white">storefront</i>
                        <p>
                            ZG Cleaning Services Tampa Bay
                        </p>                       
                    </div>

                    <div class="flex items-center gap-2 mb-2">
                        <i class="material-icons text-white">smartphone</i>
                        <p>
                            (813) 444-7367
                        </p>
                    </div>

                    <div class="flex items-center gap-2 mb-2">
                        <i class="material-icons text-white">mail</i>
                        <p>
                            info@zgcleaning.com
                        </p>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <i class="material-icons text-white">description</i>
                        <p>
                            General Liability Insurance Policy UDC-2097632-CGL-17
                        </p>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <i class="material-icons text-white">pin_drop</i>
                        <p>
                            Tampa Bay
                        </p>
                    </div>
                </div>
                
            </div>
        </div><!--End top footer-->
        <div class="flex text-[18px] justify-center gap-2 text-white border-t pt-8 px-4 pb-8 border-black">
            <i class="material-icons text-white">copyright</i>
            <p class="text-center">
                All Rights Reserved to ZG Cleaning Services 2015 - 2024
            </p>
        </div>

    </div>
</template>

<script setup>

let links = ref([
    {name: 'Home', url: '/'},
    {name: 'Services', url: '/services'},
    {name: 'Gallery', url: '/portfolio'},
    {name: 'About Us', url: '/about-us'},
    {name: 'Contact', url: '/contact'},
])

let date = ref()

</script>

<style lang="scss" scoped>

</style>