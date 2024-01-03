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
		<div class="contentBig -ml-4 lg:ml-0">
			<ElementsSliderCom class="mb-24" :sliderLeft="false" :sliderId="sliderName" :sliderImages="sliderImages" navTypes="section4Slider"></ElementsSliderCom>
		</div>
		<div class="lapTopModelsContainer -mx-7 md:mx-0 bg-[#1D1D1F] overflow-hidden rounded-2xl">
			<div class="contentMid">
				<div class="contentMid-inner">
					<h3 class=" w-fit laptopModelTitle p-11">Qui permulcet sensum</h3>
					<div class="laptopModel overflow-x-scroll">
						<div class="laptopModel-inner flex flex-row gap-8 ">
							<div id="modelFrist" class="model md:block flex mb:pb-0 pb-12 flex-col">
								<h4>14" Laptop</h4>
								<p>X3-chip</p>
								<hr class=" border-zinc-500 w-full">
								<img src="/Images/LaptopBlackAndWhite.png" alt=""/>
								<div class="flex justify-between mt-1 mb-12 modelColor">
									<p class=" text-sm">Black</p>
									<p class=" text-sm">Sølv</p>
								</div>
								<div class="logoContainer flex gap-3 mb-12">
									<img src="/Images/x3Logo.png" alt=""/>
								</div>
								<p class="mainText mb-12">Sironem dicis et Philodemum</p>
								<p class="mainText">Id esse laudabile</p>
							</div>
							<div class="model md:block flex mb:pb-0 pb-12 flex-col">
								<h4>14" Laptop</h4>
								<p>X3-chip eller X3 Max-chip</p>
								<hr class=" border-zinc-500 w-full">
								<img class="" src="/Images/laptopDarkGrayAndBlack.png" alt=""/>
								<div class="flex justify-between mt-1 mb-12 modelColor">
									<p class=" text-sm">Black</p>
									<p class=" text-sm">Grey</p>
								</div>
								<div class="logoContainer flex gap-3 mb-12">
									<img src="/Images/x3MaxLogo.png" alt=""/>
									<img src="/Images/x3ProLogo.png" alt=""/>
								</div>
								<p class="mainText mb-12">Sironem dicis et Philodemum</p>
								<p class="mainText">Id esse laudabile</p>
							</div>
							<div id="modelLast" class="model md:block flex mb:pb-0 pb-12 pr-4 flex-col">
								<h4>16" Laptop</h4>
								<p>X3-chip eller X3 Max-chip</p>
								<hr class=" border-zinc-500 w-full">
								<img src="/Images/laptopDarkGrayAndBlack.png" />
								<div class="flex justify-between mt-1 mb-12 modelColor">
									<p class=" text-sm">Black</p>
									<p class=" text-sm">Grey</p>
								</div>
								<div class="logoContainer flex gap-3 mb-12">
									<img src="/Images/x3MaxLogo.png" />
									<img src="/Images/x3ProLogo.png" />
								</div>
								<p class="mainText mb-12">Sironem dicis et Philodemum</p>
								<p class="mainText">Id esse laudabile</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mobileScrollBtns md:hidden flex gap-4 w-fit float-right mr-24 mt-4 mb-4">
			<div @click="slideLeft()" class="scrollLeft scrollBtn bg-zinc-700 rounded-full cursor-pointer">
				<font-awesome-icon icon="fa-solid fa-chevron-left" />
			</div>
			<div @click="slideRight()" class="scrollRight scrollBtn  bg-zinc-700 rounded-full cursor-pointer">
				<font-awesome-icon icon="fa-solid fa-chevron-right" />
			</div>
		</div>
		</div>
	</div>
</template>
<script setup>
const maxScroll = ref(0)
const currentScrollPos = ref(0)
const sliderImages = ref([
{
	image:"Images/slider1/image1.jpg",
	isActive:true,
	id:"batteryImage1",
	name:"Softwareudvikling"
},
{
	image:"Images/slider1/image2.jpg",
	isActive:false,
	id:"batteryImage2",
	name:"Fotoredigering"
},
{
	image:"Images/slider1/image3.jpg",
	isActive:false,
	id:"batteryImage3",
	name:"STEM"
},
{
	image:"Images/slider1/image4.jpg",
	isActive:false,
	id:"batteryImage4",
	name:"Grafisk design"
},
{
	image:"Images/slider1/image5.jpg",
	isActive:false,
	id:"batteryImage5",
	name:"Produktivitet"
},
{
	image:"Images/slider1/image6.jpg",
	isActive:false,
	id:"batteryImage6",
	name:"3D-rendering"
},
])
const sliderName = ref("batterySlider")
function slideLeft(){
	const textBoxContainer = document.querySelector(".laptopModel");
	const model = document.querySelector('.laptopModel .model').scrollWidth;
	textBoxContainer.scrollLeft -= model;
		maxScroll.value = Math.round(textBoxContainer.scrollWidth / model) - 1;
		const elementOnScreen = textBoxContainer.offsetWidth / model;
		currentScrollPos.value -= Math.round(elementOnScreen)
}

function slideRight(){
	const textBoxContainer = document.querySelector(".laptopModel");
	const model = document.querySelector('.laptopModel .model').scrollWidth;
	textBoxContainer.scrollLeft += model;
		maxScroll.value = Math.round(textBoxContainer.scrollWidth / model) - 1;
		const elementOnScreen = textBoxContainer.offsetWidth / model;
		currentScrollPos.value += Math.round(elementOnScreen)
}
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
		font-size:clamp(25px, 5vw, 52px);
		font-weight: 500;
}
.laptopModel{
	overflow-x: scroll;
	scroll-behavior: smooth;
	scrollbar-width:none;
	transition: 250ms ease-in;
	scroll-snap-type: x mandatory;
	&::-webkit-scrollbar {
	display: none;
	}
	&-inner{
	width: fit-content;
	padding-left:calc(max(45px, (100% - (1280px)) / 2));
	padding-right:calc(max(45px, (100% - (1280px)) / 2));
	}
	.model{
		width:max(252px, 33%);
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