<template>
    <div class="flex flex-col">
        <div class="">
            <IncludesFrontCarousel class="carousel" v-slot="{currentSlide}">
                <IncludesFrontSlide v-for="(slide, index) in carouselSlides" :key="index">
                    <div 
                        v-show="currentSlide === index + 1" 
                        class="
                            absolute top-24  left-0 w-full
                            md:top-24 md:h-3/4
                        ">
                        <div class="absolute inset-0 flex flex-col items-center justify-center  z-10">
                            <div class="mb-2">
                                <p class="text-white text-[36px] font-bold">{{ slide.cta }}</p>
                            </div>
                            <div>
                                <button class="bg-red-500 px-8 py-2 rounded text-white uppercase font-bold mt-4">read more</button>
                            </div>
                        </div>
                        <div class="absolute inset-0 bg-black opacity-80"></div>
                        <img class="min-w-full h-full object-cover" :src="`_nuxt/assets/images/${slide.name}.jpg`" alt="">
                    </div>
                </IncludesFrontSlide>
            </IncludesFrontCarousel>      
        </div><!--End bannerSlider-->

         <div class="container mx-auto w-[60%] block">
            <div class="flex items-center">
                <div>
                    <img src="/assets/images/zg-cleaning-service.png" alt="">
                </div>
                <div>
                    <h3>We offer three main services: Home Cleaning, Handyman, and Pressure Wash. </h3>
                    <p>Our Home Cleaning service ensures your living space is clean and organized, while our Handyman service takes care of household maintenance tasks. Additionally, our Pressure Wash service removes dirt and stains effectively. Trust us for all your cleaning and maintenance needs.
                </p>    
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>

const carouselSlides = ref([
    { name: 'living-room-kitchen', cta:"Revitalize Your Home with Tampa Bay's Premier Cleaning Service!", url: '/cleaning-services' },
    { name: 'bathroom', cta: 'Transform Your Tampa Home Today! Book Now!', url: '/booking' },
    { name: 'moving', cta: 'Discover Our Trusted Tampa Cleaning Team!', url: '/about-us' }
])



</script>

<style scoped>

.flex-col {
    display: flex;
    flex-direction: column;
  }
  .opacity-80 {
    opacity: 0.4;
  }
</style>