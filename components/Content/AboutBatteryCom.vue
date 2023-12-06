<template>
	<div class="contentMid overflow-hidden pb-12">
        <h2>Confusioque virtutum tamen</h2>
        <p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
	</div>
    <ElementsLaptopImageCom videoId="batteryVideo"></ElementsLaptopImageCom>
    <div class="flex justify-end text-sm pb-12 grayText font-medium">
		<p>VS code, Teams, Photoshop</p>
	</div>
    <div class="flex contentMid justify-between pb-32">
        <div class="batteryTime flex items-center flex-col">
            <div class=" w-fit">
                <p class="mainText">Op til</p>
                <h3 class="text-6xl font-medium my-1">22 consec</h3>
                <p class="mainText">Adipiscing elit</p>
            </div>
        </div>
        <div class="batteryTime flex items-center flex-col">
            <div class=" w-fit">
                <p class="mainText">Op til</p>
                <h3 class="text-6xl font-medium my-1">15 consec</h3>
                <p class="mainText">Adipiscing elit</p>
            </div>
        </div>
    </div>
    <div class="contentMid overflow-hidden pb-12">
        <h2>Confusioque</h2>
        <p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
	</div>
    <ElementsSliderCom :sliderLeft="false" :sliderId="sliderName" :sliderImages="sliderImages" navTypes="section4Slider"></ElementsSliderCom>
</template>
<script setup>
const sliderImages = ref([
{
	image:"/_nuxt/Assets/Images/slider1/image1.jpg",
	isActive:true,
	id:"batteryImage1",
	name:"Softwareudvikling"
},
{
	image:"/_nuxt/Assets/Images/slider1/image2.jpg",
	isActive:false,
	id:"batteryImage2",
	name:"Fotoredigering"
},
{
	image:"/_nuxt/Assets/Images/slider1/image3.jpg",
	isActive:false,
	id:"batteryImage3",
	name:"STEM"
},
{
	image:"/_nuxt/Assets/Images/slider1/image4.jpg",
	isActive:false,
	id:"batteryImage4",
	name:"Grafisk design"
},
{
	image:"/_nuxt/Assets/Images/slider1/image5.jpg",
	isActive:false,
	id:"batteryImage5",
	name:"Produktivitet"
},
{
	image:"/_nuxt/Assets/Images/slider1/image6.jpg",
	isActive:false,
	id:"batteryImage6",
	name:"3D-rendering"
},
])
const sliderName = ref("batterySlider")
</script>
<style lang="scss" scoped>
.mainText{
	color: hsla(0, 0%, 100%, 0.7);
	font-size: 21px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 100%, 1);
	}
}
.grayText p{
	color: hsla(0, 0%, 100%, 0.7);
}
.batteryTime{
    width: 40%;
}
</style>