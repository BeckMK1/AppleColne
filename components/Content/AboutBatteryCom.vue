<template>
	<div>
		<div class="contentMid">
			<div class="contentMid-inner">
				<div class="pb-12">
					<h2>Confusioque virtutum tamen</h2>
					<p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
				</div>
			</div>
		</div>
		<ElementsLaptopImageCom videoId="batteryVideo"></ElementsLaptopImageCom>
		<div class="flex justify-end text-sm pb-12 grayText font-medium">
			<p>VS code, Teams, Photoshop</p>
		</div>
		<div class="contentMid">
			<div class="contentMid-inner">
				<div class="flex  justify-between pb-32">
					<div class="batteryTime flex items-start flex-col">
						<div class=" w-fit">
							<p class="mainText">Op til</p>
							<h3 class="text-6xl font-medium my-1">22 consec</h3>
							<p class="mainText">Adipiscing elit</p>
						</div>
					</div>
					<div class="batteryTime flex items-start flex-col">
						<div class=" w-fit">
							<p class="mainText">Op til</p>
							<h3 class="text-6xl font-medium my-1">15 consec</h3>
							<p class="mainText">Adipiscing elit</p>
						</div>
					</div>
				</div>
				<div class="overflow-hidden pb-12">
					<h2>Confusioque</h2>
					<p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
				</div>
			</div>
		</div>
		<div class="contentBig">
			<ElementsSliderCom class="mb-24" :sliderLeft="false" :sliderId="sliderName" :sliderImages="sliderImages" navTypes="section4Slider"></ElementsSliderCom>
		</div>
		<div class=" bg-[#1D1D1F] w-full rounded-2xl">
			<div class="contentMid py-16">
				<div class="contentMid-inner">
					<h3 class=" w-fit laptopModelTitle">Qui permulcet sensum</h3>
					<div class=" flex md:flex-row flex-col justify-between laptopModel">
						<div class="model md:block flex mb:pb-0 pb-12 flex-col items-center">
							<h4>14" Laptop</h4>
							<p>X3-chip</p>
							<hr class=" border-zinc-500 w-full">
							<img src="/_nuxt/Assets/Images/laptopBlackAndWhite.png" alt="">
							<div class="flex justify-between mt-1 mb-12 modelColor">
								<p class=" text-sm">Black</p>
								<p class=" text-sm">Sølv</p>
							</div>
							<div class="logoContainer flex gap-3 mb-12">
								<img src="/_nuxt/Assets/Images/x3Logo.png" alt="">
							</div>
							<p class="mainText mb-12">Sironem dicis et Philodemum</p>
							<p class="mainText">Id esse laudabile</p>
						</div>
						<div class="model md:block flex mb:pb-0 pb-12 flex-col items-center">
							<h4>14" Laptop</h4>
							<p>X3-chip eller X3 Max-chip</p>
							<hr class=" border-zinc-500 w-full">
							<img class="" src="/_nuxt/Assets/Images/laptopDarkGrayAndBlack.png" alt="">
							<div class="flex justify-between mt-1 mb-12 modelColor">
								<p class=" text-sm">Black</p>
								<p class=" text-sm">Grey</p>
							</div>
							<div class="logoContainer flex gap-3 mb-12">
								<img src="/_nuxt/Assets/Images/x3MaxLogo.png" alt="">
								<img src="/_nuxt/Assets/Images/x3ProLogo.png" alt="">
							</div>
							<p class="mainText mb-12">Sironem dicis et Philodemum</p>
							<p class="mainText">Id esse laudabile</p>
						</div>
						<div class="model md:block flex mb:pb-0 pb-12 flex-col items-center">
							<h4>16" Laptop</h4>
							<p>X3-chip eller X3 Max-chip</p>
							<hr class=" border-zinc-500 w-full">
							<img src="/_nuxt/Assets/Images/laptopDarkGrayAndBlack.png" alt="">
							<div class="flex justify-between mt-1 mb-12 modelColor">
								<p class=" text-sm">Black</p>
								<p class=" text-sm">Grey</p>
							</div>
							<div class="logoContainer flex gap-3 mb-12">
								<img src="/_nuxt/Assets/Images/x3MaxLogo.png" alt="">
								<img src="/_nuxt/Assets/Images/x3ProLogo.png" alt="">
							</div>
							<p class="mainText mb-12">Sironem dicis et Philodemum</p>
							<p class="mainText">Id esse laudabile</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
.laptopModelTitle{
		font-size: 52px;
		font-weight: 500;
}
.laptopModel{
	.model{
		width: 225px;
		@media (max-width:768px) {
			width: 100%;
		}
	}
	.modelColor{
		width: 200px;
	}
	h4{
		font-size: 28px;
		font-weight: bold;
	}
	hr{
		margin-top: 1rem;
		margin-bottom: 3.5rem;
	}
	p{
		color: hsla(0, 0%, 100%, 0.7);
		font-weight: 500;
	}
	img{
		width: 200px;
		margin-top: 1rem;
	}
}
.logoContainer{
	img{
		width: 50px;
		height: 50px;
	}
}
</style>