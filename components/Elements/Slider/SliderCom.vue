<template>
	<div class=" relative">
			<div :id="sliderId" :class="sliderLeft == true ? 'flex-row-reverse' : 'flex-row'" class="flex slider gap-24 pb-24 ">
					<div class="slideSize" :id="sliderImage.id" v-for="sliderImage in sliderImages">
					<ElementsSliderImageCom :imageCurrent="sliderImage.isActive" :image="sliderImage.image"></ElementsSliderImageCom>
				</div>
			</div>
			<div v-if="navTypes == 'section1Slider'"  :class="IsNavigation == true ? 'sliderNavShow' : 'sliderNavShowHide', isSliderNavReletive == true ? 'relative' : 'fixed', navFixed == true ? 'fixed bottom-4 left-1/2 -translate-x-1/2':''" class="flex justify-center gap-3 items-center" >
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
			<div id="sliderNavigation"></div>
			<div class="flex justify-center" v-if="navTypes == 'section4Slider'">
				<div @click="scrollCatagoryLeft" :class="scrolledZeroed == 'right' ? 'catEndBorderLeft' : '', scrolledZeroed == 'center' ? 'catEndBorderCenter' : '' " class="catEndBorder cursor-pointer">
					<font-awesome-icon icon="fa-solid fa-chevron-left" />
				</div>
				<div class="overflow-hidden w-2/3">
					<div id="catagorySlider" class="flex overflow-x-hidden">
						<div class="catagoryContainer" v-for="(sliderImage, index) in sliderImages" @click="setSlideActive(sliderImage.image, sliderImage.id)">
							<ElementsSliderCatagoriCom :id="'catNav-' + index" @click="sliderNavsCat(index)" :name="sliderImage.name" :isActive="sliderImage.isActive"></ElementsSliderCatagoriCom>
						</div>
					</div>
				</div>
				<div @click="scrollCatagoryRight" :class="scrolledZeroed == 'left' ? 'catEndBorderRight' : '', scrolledZeroed == 'center' ? 'catEndBorderCenter' : '' " class="catEndBorder cursor-pointer">
					<font-awesome-icon icon="fa-solid fa-chevron-right" />
				</div>
			</div>
	</div>
</template>
<script setup>
const props = defineProps({
	navTypes: {
		default:'',
		type:String
	},
	sliderImages:{
		default:[],
		type:Array
	},
	sliderId:{
		default:"",
		type:String
	},
	sliderLeft:{
		default:true,
		type:Boolean
	}
})
const nextIndex = ref(0)
const isAutoPlay = ref(false)
const IsNavigation = ref(false)
const navFixed = ref(true)
const isSliderNavReletive = ref(false)
const scrolledZeroed = ref('left')
function setSlideActive(currentSlide, imageId){
	for(let [index ,sliderImage] of props.sliderImages.entries()){
		if(sliderImage.isActive == true && sliderImage.image != currentSlide){
			sliderImage.isActive = false
		}
		if(sliderImage.isActive != true && sliderImage.image == currentSlide){
			sliderImage.isActive = true
			nextIndex.value = index
		}
		if(sliderImage.isActive == true){
		const slide = document.getElementById(imageId);
		const slideWidth = slide.offsetWidth + 96;
		const slideContainer =  document.querySelector('#' +  props.sliderId);
		let curSlide = index;
		if(props.sliderLeft == true){
			slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
		}else{
			slideContainer.style.transform = `translateX(${-slideWidth * curSlide}px)`
		}
		}
	}
}
// auto scroll
function scrollnext(){
	for(let [index ,sliderImage] of props.sliderImages.entries()){
		if(sliderImage.isActive == true){
			nextIndex.value = index + 1
			sliderImage.isActive = false
		}
		if(nextIndex.value >= props.sliderImages.length){
			nextIndex.value = 0
		}
		if(index == nextIndex.value){
			console.log("run")
			sliderImage.isActive = true
			const slide = document.getElementById(sliderImage.id);
			const slideWidth = slide.offsetWidth + 96;
			const slideContainer =  document.querySelector('#' + props.sliderId);
			let curSlide = index;

			if(props.sliderLeft == true){
				slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
			}
		}else {
			sliderImage.isActive = false
		}
}}
function resetScroll(){
	for(let [index ,sliderImage] of props.sliderImages.entries()){
		if(index == 0){
				sliderImage.isActive = true
				const slide = document.getElementById(sliderImage.id);
			const slideWidth = slide.offsetWidth + 96;
			const slideContainer =  document.querySelector('#' + props.sliderId);
			let curSlide = index;
			slideContainer.style.transform = `translateX(${slideWidth * curSlide}px)`
			}
	}
}
function setSliderNavObserver(){
	const section = document.getElementById("section1")
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		IsNavigation.value = true
	}else{
		IsNavigation.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
function setSliderNavPosObserver(){
	const section = document.querySelector( "#section1 #sliderNavigation");
	let options = {
    threshold: 0.1
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isSliderNavReletive.value = true
	}else{
		isSliderNavReletive.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
function scrollCatagoryLeft(){
	const catagorySlider = document.querySelector("#catagorySlider");
	const catWidth = document.querySelector(".catagoryContainer").offsetWidth;
	catagorySlider.scrollLeft -= catWidth * 3
}
function scrollCatagoryRight(){
	const catagorySlider = document.querySelector("#catagorySlider");
	const catWidth = document.querySelector(".catagoryContainer").offsetWidth;
	catagorySlider.scrollLeft += catWidth * 3
}
function sliderNavsCat(catIndex){
	const catWidth = document.querySelector("#catNav-" + catIndex);
	if(catIndex != props.sliderImages.length - 1){
		catWidth.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
	}
	checkCatScrollPos()
}
function checkCatScrollPos(){
	const catagorySlider = document.querySelector("#catagorySlider");
	if(catagorySlider.scrollLeft != 0){
		scrolledZeroed.value = 'center'
	}
	if(catagorySlider.scrollLeft == 0){
		scrolledZeroed.value = 'left'
	}
	console.log(catagorySlider.scrollLeft)
	if(catagorySlider.scrollLeft > 702){
		scrolledZeroed.value = 'right'
	}
}
onMounted(()=>{
	setSliderNavObserver()
	setSliderNavPosObserver()
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
	height: 100px;
	background-color: transparent;
	width: 100px;
}
.catEndBorder{
	transform: translateY(4px);
	svg{
		height: 1rem !important;
		margin-top: 0.5rem;
		opacity: 50%;
		display: none;
	}
}
.catEndBorderRight{
	border-left: 1px solid;
	border-color: hsl(0, 0%, 30%);
	svg{
		margin-left: 0.5rem;
		display: block;
	}
}
.catEndBorderLeft{
	border-right: 1px solid;
	border-color: hsl(0, 0%, 30%);
	svg{
		margin-right: 0.5rem;
		display: block;
	}
}
.catEndBorderCenter{
	&:nth-child(1){
		border-right: 1px solid;
	border-color: hsl(0, 0%, 30%);
		svg{
		margin-right: 0.5rem;
		display: block;
	}
	}
	&:nth-child(3){
		border-left: 1px solid;
	border-color: hsl(0, 0%, 30%);
		svg{
		margin-left: 0.5rem;
		display: block;
	}
	}
}
@media (max-width:1300px) {
}
</style>