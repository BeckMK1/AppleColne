<template>
	<div id="section1">
        <div class="mx-auto xl:max-w-screen-xl pb-4 pl-4">
            <h2 class="sectionTitle ">Imus igitur contenti his. Verum audiamus.</h2>
        </div>
		<div class=" pl-4 lg-pl-0">
        	<ElementsSliderCom :sliderId="sliderName" :sliderImages="sliderImages" navTypes="section1Slider"></ElementsSliderCom>
		</div>
	</div>
</template>
<script setup>
const sliderImages = ref([
{
	image:"/_nuxt/Assets/Images/slider1/image1.jpg",
	isActive:true,
	id:"image1"
},
{
	image:"/_nuxt/Assets/Images/slider1/image2.jpg",
	isActive:false,
	id:"image2"
},
{
	image:"/_nuxt/Assets/Images/slider1/image3.jpg",
	isActive:false,
	id:"image3"
},
{
	image:"/_nuxt/Assets/Images/slider1/image4.jpg",
	isActive:false,
	id:"image4"
},
{
	image:"/_nuxt/Assets/Images/slider1/image5.jpg",
	isActive:false,
	id:"image5"
},
{
	image:"/_nuxt/Assets/Images/slider1/image6.jpg",
	isActive:false,
	id:"image6"
},
])
const sliderName = ref("storySlider")
</script>
<style lang="scss"></style>