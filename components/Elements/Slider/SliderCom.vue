<template>
	<div class=" relative">
			<div id="sliderContainer" class="flex flex-row-reverse slider gap-24 pb-24 ">
					<div class="slideSize" :id="sliderImage.id" v-for="sliderImage in sliderImages">
					<ElementsSliderImageCom :image="sliderImage.image"></ElementsSliderImageCom>
				</div>
			</div>
			<div id="sliderNavigation"></div>
			<div  :class="IsNavigation == true ? 'sliderNavShow' : 'sliderNavShowHide', navFixed == true ? 'fixed bottom-4 left-1/2 -translate-x-1/2':''" class="flex justify-center gap-3 items-center" >
				<div class="sliderNav flex flex-row-reverse gap-4 w-fit px-8 py-6 rounded-3xl items-center">
					<div  @click="setSlideActive(sliderImage.image, sliderImage.id)" v-for="sliderImage in sliderImages">
						<ElementsSliderNavCom :isAutoPlay="isAutoPlay" @sendCount="scrollnext" :isActive="sliderImage.isActive"></ElementsSliderNavCom>
					</div>
				</div>
				<div @click="isAutoPlay = !isAutoPlay" :class="isAutoPlay == true ?'playPadding' :''"  class=" w-fit px-4 py-4 rounded-full flex items-center justify-center hover:bg-zinc-300 btnContainer">
					<font-awesome-icon v-if="isAutoPlay == false" icon="fa-solid fa-rotate-right" />
					<font-awesome-icon v-if="isAutoPlay == true" icon="fa-solid fa-pause" />
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
const IsNavigation = ref(false)
const navFixed = ref(true)
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
			const slide = document.getElementById(sliderImage.id);
			const slideWidth = slide.offsetWidth + 96;
			const slideContainer =  document.querySelector("#sliderContainer");
			let curSlide = index;
			slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
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
				const slide = document.getElementById(sliderImage.id);
			const slideWidth = slide.offsetWidth + 96;
			const slideContainer =  document.querySelector("#sliderContainer");
			let curSlide = index;
			slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
			}
	}
}
function setObserver(){
	const nav = document.querySelector("#sliderNavigation");
	let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };
  function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}
let prevRatio = 0.0
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.intersectionRatio > prevRatio){
		IsNavigation.value = true
	}else{
		IsNavigation.value = false
	}
		prevRatio = entry.intersectionRatio
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(nav);
}
onMounted(()=>{
	setObserver()
})
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
.btnContainer{
	.fa-rotate-right{
		transform: rotate(-36deg);
		transition: 250ms ease;
	}
	&:hover{
		.fa-rotate-right{
			transform: rotate(0deg);
			transition: 250ms ease;
			}
		}
}
.btnContainer{
	transition: 250ms background-color ease;
	background-color: hsla(0, 0%, 85%, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
}
.btnContainer{
.fa-pause{
	transform: scale(1);
	transition: 250ms ease;
}
&:hover{
	.fa-pause{
		transform: scale(1.1);
		transition: 250ms ease;
		}
	}
}
svg{
	height: 1.5rem !important;
}
.playPadding{
	padding-left: 1.4rem;
	padding-right: 1.4rem;
}
.sliderNav{
	background-color: hsla(0, 0%, 85%, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
}
.sliderNavShow{
	opacity: 1;
	transition: 1s ease;
}
.sliderNavShowHide{
	opacity: 0;
	transition: 1s ease;
}
#sliderNavigation{
	position: absolute;
	top: 15%;
	height: 200px;
	background-color: transparent;
	width: 100px;
}
</style>