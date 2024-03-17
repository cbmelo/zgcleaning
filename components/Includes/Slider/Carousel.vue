<template>
    <div class="">
     <slot :currentSlide="currentSlide"/>

      <!--Arrow Navigation-->       
      <div class="navigate flex absolute w-full md:h-3/4 justify-between items-center py-0 px-4 ">
            <i @click="prevSlide" class="material-icons rounded-full bg-[#00B8E0] text-white cursor-pointer">
                chevron_left
            </i>
            <i @click="nextSlide" class="material-icons rounded-full bg-[#00B8E0] text-white cursor-pointer">
                chevron_right
            </i>
        </div>
          <!--Bottom Pagination-->
          <div class="pagination absolute bottom-[6%] flex md:mt-8 w-full justify-center gap-4">
            <span 
                @click="goToSlide(index)"
                v-for="(slide, index) in getSlideCount" 
                :key="index"
                :class="{active: index + 1 === currentSlide}"
                class="cursor-pointer w-5 h-5 rounded-full bg-gray-300 shadow-lg"    
            >
           
            </span>
        </div>
    </div>
    
</template>

<script setup>

const currentSlide = ref(1)
const getSlideCount = ref(null)
const autoPlayEnabled = ref(true)
const timeoutDuration = ref(5000)

// Next Slide
const nextSlide = () => {
    if(currentSlide.value === getSlideCount.value){
        currentSlide.value = 1
        return
    }
    currentSlide.value += 1
}

// Previous slide
const prevSlide = () => {
    if(currentSlide.value === 1) {
        currentSlide.value = 1
        return
    }
    currentSlide.value -= 1
}

const goToSlide = (index) => {
    currentSlide.value = index + 1
}

// Autoplay
const autoPlay = () => {[
    setInterval(() => {
        nextSlide()
    }, timeoutDuration.value)
]}

if(autoPlayEnabled.value) {
    autoPlay()
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length
   
})

</script>

<style scoped>
.active {
    background-color: #00B8E0;
}

</style>