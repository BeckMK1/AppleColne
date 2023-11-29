<template>
	<div>
		<div v-for="sliderImage in sliderImages">
        <ElementsSliderImageCom :image="sliderImage"></ElementsSliderImageCom>
		</div>
	</div>
</template>
<script setup>
const sliderImages = ref([
	"@/Assets/css/Images/slider1/image1.jpg",
	"@/Assets/css/Images/slider1/image2.jpg",
	"@/Assets/css/Images/slider1/image3.jpg",
	"@/Assets/css/Images/slider1/image4.jpg",
	"@/Assets/css/Images/slider1/image5.jpg",
	"@/Assets/css/Images/slider1/image6.jpg",
])
</script>
<style lang="scss"></style>