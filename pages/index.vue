<template>

    <div>
        <div class="z-0">
            <IncludesSliderCarousel class="carousel " v-slot="{currentSlide}">
                <IncludesSliderSlide v-for="(slide, index) in carouselSlides" :key="index">
                    <div v-show="currentSlide === index + 1" class="slide-info">
                        <div class="w-[70%] h-[90%] mx-auto absolute inset-0 flex flex-col items-center justify-center z-10">
                            <div class="mb-2">
                                <p class="
                                    text-white 
                                    text-[24px] text-center 
                                    md:text-[36px]
                                    font-bold">{{ slide.cta }}</p>
                            </div>
                            <div>
                                <button class="bg-[#00B8E0] px-8 py-2 rounded text-white uppercase font-bold mt-4">
                                    <nuxt-link :to="slide.url">read more</nuxt-link>
                                </button>
                            </div>
                        </div>
                        <div class="absolute inset-0 bg-black opacity-80"></div>
                        <img class="" :src="`_nuxt/assets/images/${slide.name}.jpg`" alt="">
                    </div>                     
                </IncludesSliderSlide>
            </IncludesSliderCarousel>      
        </div><!--End bannerSlider-->
        <div class="container w-[90%] md:w-[40%] mx-auto mt-[50px] mb-[50px] text-center">
            <h3 class="
                    text-[28px]
                    md:text-[36px]
                    font-bold 
                    mb-4 text-[#00B8E0]"
            >Welcome to ZG Cleaning</h3>
            <p class="text-[18px]">The Tampa Bay's premier home cleaning service! At ZG Cleaning, we're dedicated to transforming your living space into a spotless sanctuary.</p>

        </div><!--End Welcome Intro-->

        <div class="
                container 
                mx-auto
                w-full 
                md:w-[60%] 
                block 
                mt-[50px]
                px-4
                ">
            <div class="
                    gap-4
                    md:flex 
                    space-between 
                    items-center">
                <div class="">
                    
                    <img class="
                            
                        " 
                        src="/assets/images/home-cleaning-services.jpg" alt=""
                    >
                </div>
                <div class="
                        
                        w-full 
                        md:w-[80%]"
                    >
                    <h3 class="mt-[20px] text-[20px] mb-[20px]">
                        <span class="font-bold">We offer three main services:</span> 
                        Home Cleaning, Handyman, and Pressure Wash. 
                    </h3>
                    <p>
                        Our Home Cleaning service ensures your living space is clean and organized, while our Handyman service takes care of household maintenance tasks. Additionally, our Pressure Wash service removes dirt and stains effectively. Trust us for all your cleaning and maintenance needs.
                    </p>
                    <button class="w-full
                                md:w-52 bg-[#00B8E0] px-8 py-2 rounded text-white uppercase font-bold mt-4">
                        <nuxt-link to="/services">read more</nuxt-link>
                    </button>    
                </div>
            </div>
            <!--end first section-->
            <div class="
            gap-4
                    mt-[100px]
                    md:flex flex-row-reverse 
                    space-between 
                    items-center">
                <div class="">
                    
                    <img class="" src="/assets/images/booking-home-cleaning.jpg" alt="">
                </div>
                <div class="
                        
                        w-full 
                        md:w-[80%]"
                    >
                    <h3 class="
                            w-full 
                            text-center
                            md:text-left
                            text-[20px] 
                            mt-[20px]
                            mb-[20px]
                            "
                        >
                        <span class="font-bold">Book Your Premium Tampa Home Cleaning Service</span> 
                    </h3>
                    <p>
                        Discover the essence of cleanliness and serenity for your Tampa home. Click now to explore our comprehensive cleaning services and book your appointment today!
                    </p>
                    <button class="
                                w-full
                                md:w-52
                                bg-[#00B8E0] 
                                px-8 
                                py-2 
                                rounded 
                                text-white 
                                uppercase 
                                font-bold 
                                mt-4
                                "
                            >
                        <nuxt-link to="/services">read more</nuxt-link>
                    </button>    
                </div>
            </div><!--End second section-->
            <div class="
                    gap-4
                    mt-[100px]
                    md:flex 
                    space-between 
                    items-center">
                <div class="">
                    
                    <img src="/assets/images/zg-cleaning-team.jpg" alt="">
                </div>
                <div class="
                        
                        w-full 
                        md:w-[80%]"
                    >
                    <h3 class="
                            mt-[20px]
                            text-center
                            md:text-left
                            text-[18px] 
                            md:text-[20px] mb-[20px]">
                        <span class="font-bold">Discover ZG Cleaning's Exceptional Story!</span> 
                    </h3>
                    <p>
                        Discover why ZG Cleaning stands out as a leading independent cleaning organization, renowned for excellence in residential and commercial window cleaning, pressure washing, and expert assembly services.
                    </p>
                    <button class="w-full
                                md:w-52 bg-[#00B8E0] px-8 py-2 rounded text-white uppercase font-bold mt-4">
                        <nuxt-link to="/services">read more</nuxt-link>
                    </button>   
                </div>
            </div><!--End third section-->                  
        </div><!--end main section-->
    </div>
  
</template>

<script setup>

const carouselSlides = ref([
    { name: 'living-room-kitchen', cta:"Revitalize Your Home with Tampa Bay's Premier Cleaning Service!", url: '/services' },
    { name: 'bathroom', cta: 'Transform Your Home Today! Book Now!', url: '/booking' },
    { name: 'moving', cta: 'Discover Our Trusted Tampa Cleaning Team!', url: '/about-us' }
])



</script>

<style scoped>
.carousel {
    position: relative;
    max-height: 60vh;
    height: 60vh;
    border: solid 1px #ccc;
}
.slide-info {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

}
img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
.opacity-80 {
    opacity: 0.4;
  }
</style>