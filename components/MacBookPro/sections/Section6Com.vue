<template>
<div id="section6">
    <div class="pt-2 contentContainer mx-auto">
        <div>
            <div class=" mx-auto pt-32">
                <ContentAboutOtherCom></ContentAboutOtherCom>
            </div>
        </div>
    </div>
    <div class="pt-12 contentContainer mx-auto">
        <div>
            <div class=" mx-auto pb-32">
                <h3 class="pb-16 text-5xl font-medium">Consectetur adipiscing elit</h3>
                <div class="accordionBox bg-neutral-50 p-16 rounded-3xl">
                <div class="flex md:flex-row flex-col justify-between">
                <div class="accordionWrapper md:w-1/3 w-full">
                    <ElementsAccordionCom @click="accordionOpen(accordion.name)" v-for="accordion in accordions" :image="accordion.image" :name="accordion.name" class="mb-4"></ElementsAccordionCom>
                </div>
                <div class="md:w-1/2 w-full accordionImageContainer">
                        <img class="accordionImage hidden lg:block" :class="accordion.name == currentAccordion ? 'accordionImageShow': 'accordionImageHide'"  v-show="accordion.name == currentAccordion" v-for='accordion in accordions' :src="accordion.image" />
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
    <ElementsTextBoxSliderCom></ElementsTextBoxSliderCom>
</div>
</template>
<script setup>
import { useStore } from '/stores/store'
const store = useStore()
const accordions = ref([
    {name:'phoneAndLaptop', image:'/Images/ExploadeImages/ExploadImageMain.png'},
    {name:'tabletAndLaptop', image:'/Images/slider1/image1.jpg'},
    {name:'watchAndLaptop', image:'/Images/slider1/image2.jpg'},
])
const currentAccordion = computed(()=> store.accordionOpen)
function accordionOpen(name){
    store.accordionOpen = name
}
</script>
<style lang="scss" scoped>
.accordionImage{
    height: 400px;
    width: 100%;
    object-fit: cover;
}
</style>