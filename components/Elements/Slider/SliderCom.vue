<template>
	<div>
			<div id="sliderContainer" class="flex flex-row-reverse slider gap-24 pb-24 ">
					<div class="slideSize" :id="sliderImage.id" v-for="sliderImage in sliderImages">
					<ElementsSliderImageCom :image="sliderImage.image"></ElementsSliderImageCom>
				</div>
			</div>
		<div class="flex justify-center gap-3 items-center">
			<div class="sliderNav flex flex-row-reverse gap-4 bg-zinc-200 w-fit px-8 py-6 rounded-3xl items-center">
				<div  @click="setSlideActive(sliderImage.image, sliderImage.id)" v-for="sliderImage in sliderImages">
					<ElementsSliderNavCom :isAutoPlay="isAutoPlay" @sendCount="scrollnext" :isActive="sliderImage.isActive"></ElementsSliderNavCom>
				</div>
			</div>
			<div @click="isAutoPlay = !isAutoPlay"  class="bg-zinc-200 w-fit px-4 py-4 rounded-full flex items-center justify-center">
				<font-awesome-icon icon="fa-solid fa-rotate-right" />
			</div>
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
const nextIndex = ref(0)
const isAutoPlay = ref(false)
// rewrite to work with auto play
function setSlideActive(currentSlide, imageId){
	for(let [index ,sliderImage] of sliderImages.value.entries()){
		if(sliderImage.isActive == true && sliderImage.image != currentSlide){
			sliderImage.isActive = false
		}
		if(sliderImage.isActive != true && sliderImage.image == currentSlide){
			sliderImage.isActive = true
		}
		if(sliderImage.isActive == true){
		const slide = document.getElementById(imageId);
		const slideWidth = slide.offsetWidth + 96;
		const slideContainer =  document.querySelector("#sliderContainer");
		let curSlide = index;
		slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
		}
	}
}

function scrollnext(){
	for(let [index ,sliderImage] of sliderImages.value.entries()){
		if(sliderImage.isActive == true){
			nextIndex.value = index + 1
			sliderImage.isActive = false
		}
		if(index == nextIndex.value){
			sliderImage.isActive = true
		}
		if(nextIndex.value == sliderImages.value.length){
			nextIndex.value = 0
		}
	}
}
function resetScroll(){
	for(let [index ,sliderImage] of sliderImages.value.entries()){
		if(index == 0){
				sliderImage.isActive = true
			}
	}
}
watch(nextIndex, async (newValue,)=>{
	if(newValue == 0){
		resetScroll()
	}
})



</script>
<style lang="scss" scoped>
.slider{
	width:1280px;
	margin:0 auto;
	transition: all 0.75s ease-in-out;
}
.slideSize{
	width:100%;
	max-width: 1280px;
}
svg{
	height: 2rem !important;
	transform: rotate(-36deg);
	transition: 250ms ease;
	&:hover{
		transform: rotate(0deg);
		transition: 250ms ease;
	}
}
</style>