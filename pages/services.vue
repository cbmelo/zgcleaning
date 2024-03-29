<template>
    <div class="
            container 
            md:w-[40%] 
            mx-auto
            p-4
            "
        >
        <div class="mt-[50px]">
            <h1 class="text-[36px] text-center font-bold mb-4">Zg Cleaning Services</h1>
            <h2 class="leading-normal text-justify">Welcome to <nuxt-link to="/" class="font-bold text-[#00B8E0] hover:text-orange-500">ZG Cleaning</nuxt-link>, your trusted home cleaning partner in the vibrant heart of Tampa Bay! From regular residential cleaning to one-time, spring or fall, same-day, and holiday cleaning services, we've got you covered. Experience cleanliness and comfort with us!</h2>
            <div 
                v-for="(service, index) in services" :key="index"
                class="md:flex gap-4 mt-[24px]">
                <div class="md:w-1/3 drop-shadow-xl">
                    <img class="" :src="`_nuxt/assets/images/${service.img}.jpg`" alt="">
                </div>
                <div class="md:w-2/3 space-y-2">
                    <h3 class="
                            font-bold 
                            text-[24px] text-[#00B8E0] text-center
                            md:text-left
                            mt-[20px]
                            "
                            >
                            {{service.title}}
                    </h3>
                    <p class="mb-4">
                        {{ service.description }}    
                    </p>
                    <nuxt-link to="/booking" class="mt-4">
                        <button class="
                            w-full        
                            md:w-52
                            md:text-left
                                    "
                        >
                            <IncludesFrontButton>
                                BooK Now
                            </IncludesFrontButton>
                        </button>
                    </nuxt-link>
                </div>
            </div><!--End Card Services-->
        
        </div>      
    </div>
</template>

<script setup>

const services = ref([
    {
        title: 'Residential', 
        img: 'residential-home-cleaning', 
        description: "ZG Cleaning offers personalized residential cleaning services to keep your home spotless, using eco-friendly products and advanced techniques. From one-time deep cleans to regular maintenance, we ensure your utmost comfort and well-being in your space.'"
    },
    {
        title: 'One-Time Cleaning', 
        img: 'residential-home-cleaning', 
        description: "Ideal for special occasions or immediate needs, ZG Cleaning's one-time cleaning service covers every corner of your home, ensuring a clean and refreshing environment with meticulous attention to detail, allowing you to enjoy your space worry-free."
    },
    {
        title: 'Spring or Fall Cleaning', 
        img: 'residential-home-cleaning', 
        description: "Refresh your home during seasonal changes with our spring or fall cleaning service. Our experienced team performs a deep clean in every room, including often-neglected areas, ensuring a healthy and comfortable environment."
    },
    {
        title: 'Same Day Cleaning', 
        img: 'residential-home-cleaning', 
        description: "Ease your holiday preparations with our festive cleaning service. Let our specialized team take care of all the details, ensuring your home is ready to welcome the holiday spirit with comfort and joy."
    },
    {
        title: 'Holiday Cleaning', 
        img: 'residential-home-cleaning', 
        description: "ZG Cleaning offers personalized residential cleaning services to keep your home spotless, using eco-friendly products and advanced techniques. From one-time deep cleans to regular maintenance, we ensure your utmost comfort and well-being in your space.'"
    },
    {
        title: 'Apartment Cleaning', 
        img: 'residential-home-cleaning', 
        description: "Our apartment cleaning service tackles the unique challenges of smaller spaces, ensuring a clean and welcoming environment with services ranging from one-off cleans to regular maintenance, perfectly tailored to your needs."
    },
    {
        title: 'Types of Cleaning', 
        img: 'residential-home-cleaning', 
        description: "We provide various cleaning types, including regular, for daily cleanliness maintenance; deep cleaning, for more intensive cleanups; move-in/move-out, for housing transitions; post-construction, to remove construction residues; and extreme residential, focusing on organization as well."
    },
    {
        title: 'Pressure Washing', 
        img: 'residential-home-cleaning', 
        description: "We specialize in revitalizing exterior surfaces with pressure washing, effectively removing dirt, mold, and other residues without damaging your property, enhancing the visual appeal of your home or business."
    },
    {
        title: 'Window Cleaning', 
        img: 'residential-home-cleaning', 
        description: "Our professional window cleaning services ensure sparkling results, enhancing the clarity and aesthetics of your property with specialized techniques and eco-friendly solutions for comprehensive cleaning of windows, frames, and sills."
    },
    
    {
        title: 'Junk Removal', 
        img: 'residential-home-cleaning', 
        description: "ZG Cleaning helps you reclaim your space with efficient junk removal services, handling all types of waste safely and responsibly, easing the organization and cleaning of your property."
    },
    
    
])
</script>

<style scoped>

</style>