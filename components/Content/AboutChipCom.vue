<template>
	<div class="">
		<div class="contentMid">
			<div class="contentMid-inner">
				<h2 class="">Confusioque virtutum tamen</h2>
				<p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
				<div class="chipsContainer flex gap-8 justify-between w-full pt-12">
					<div id="firstChip" class="chip flex flex-col items-start gap-8">
						<div>
							<img src="/Images/chips/chip1.png"/>
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
					<div class="chip flex flex-col items-start gap-8">
						<div>
							<img src="/Images/chips/Chip2.png" />
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
					<div id="lastChip" class="chip flex flex-col items-start gap-8">
						<div>
							<img src="/Images/chips/Chip3.png" />
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
				</div>
				<div class="mobileScrollBtns sm:hidden flex gap-4 w-fit ml-auto mt-4">
					<div @click="scrollLeftChips()" :class="mobileBtnIsLeft == 'left' ? 'btnActive': '', mobileBtnIsLeft == 'center' ? 'btnActive': ''" class="scrollLeft scrollBtn opacity-60 bg-zinc-500 rounded-full cursor-pointer">
						<font-awesome-icon icon="fa-solid fa-chevron-left" />
					</div>
					<div @click="scrollRightChips()" :class="mobileBtnIsLeft == 'right' ? 'btnActive': '', mobileBtnIsLeft == 'center' ? 'btnActive': ''" class="scrollRight scrollBtn opacity-60  bg-zinc-500 rounded-full cursor-pointer">
						<font-awesome-icon icon="fa-solid fa-chevron-right" />
					</div>
				</div>
				<h2 class="sectionTitle text-white pt-48">Uo modo autem philo&shy;sophus loquitur.</h2>
			</div>
		</div>
		<ElementsImageExplodeCom></ElementsImageExplodeCom>
		<div class="contentMid">
			<hr class=" border-zinc-700">
			<div class="contentMid-inner">
				<div class="flex flex-col gap-12 overflow-hidden pb-32">
					<div class="flex justify-between flex-col md:flex-row ovserveContent">
						<p class="mainText md:w-1/3 w-full pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
						<p class="mainText md:w-1/3 w-full pt-12">Cave putes quicquam esse verius. Suam denique cuique naturam esse ad vivendum ducem.  <span class="heightlight">cuique verso rem subicia</span> eatum esse numquam probabis; Sin aliud quid voles, postea. <span class="heightlight">neque eam causam Zenoni desciscendi fuisse.</span> Nec vero alia sunt quaerenda contra Carneadeam illam sententiam.</p>
					</div>
					<div class="flex justify-between overflow-hidden ovserveContent">
						<div class="w-full sm:w-1/3 ">
							<p class="mainText mb-2">Op til</p>
							<h3 class=" text-6xl font-medium mb-2">2,5x <br /> con&shy;sectetur <br /> adip&shy;iscing.</h3>
							<p class=" mainText ">Quae diligentissime contra Aristonem dicuntur a Chryippo</p>
						</div>
						<div class="w-1/3"></div>
					</div>	
				</div>
				<div class="">
					<h2 class="">Confusioque virtutum tamen</h2>
					<p class="mainText pt-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
				</div>
			</div>
		</div>
		<ElementsLaptopImageCom videoId="chipVideo"></ElementsLaptopImageCom>
		<div class="flex justify-end text-sm mb-12 grayText font-medium">
				<p>VS code, Teams, Photoshop</p>
		</div>
		<div class="contentMid">
			<hr class=" border-zinc-700 pb-32 ">
			<div class="contentMid-inner">
				<div class="flex flex-col gap-12 overflow-hidden pb-32">
					<div class="flex justify-between md:flex-row flex-col ovserveContent">
						<div class="md:w-1/3 w-full ">
							<p class="mainText mb-2">Op til</p>
							<h3 class=" text-6xl font-medium mb-2">80 % conse&shy;ctetur adipisc&shy;ing.</h3>
							<p class=" mainText ">Quae diligentissime contra Aristonem dicuntur a Chryippo</p>
						</div>
						<div class="md:w-1/3 w-full">
							<p class="mainText mb-2">Over</p>
							<h3 class=" text-6xl font-medium mb-2">18 conse adip&shy;iscing.</h3>
							<p class=" mainText ">Quae diligentissime contra Aristonem dicuntur a Chryippo</p>
						</div>
					</div>
				</div>
			</div>
			<hr class=" border-zinc-700 pb-32">
		</div>
	</div>
</template>
<script setup>
const mobileBtnIsLeft = ref('right') 
const maxScroll = ref(0)
const currentScrollPos = ref(0)
	function setTextObserver(){
		const textSections = document.querySelectorAll(".ovserveContent");
		let options = {
		threshold: 0.0
	};
		let callback = (entries, observer) => {
		entries.forEach((entry) =>{
			if(entry.isIntersecting == true){
				entry.target.classList.add("isObserved")
			}else{
				entry.target.classList.remove("isObserved")
			}
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		for(let textSection of textSections){
		observer.observe(textSection);
		}
	}
	function scrollRightChips(){
		const chipsContainer = document.querySelector('.chipsContainer');
		const chips = document.querySelector('.chip').scrollWidth;
		if(maxScroll.value == 0){
			maxScroll.value = chipsContainer.scrollWidth / chips;
		}
	if(mobileBtnIsLeft.value == 'right' || mobileBtnIsLeft.value == 'center'){
		chipsContainer.scrollLeft += chips;
		const elementOnScreen = chipsContainer.offsetWidth / chips;
		currentScrollPos.value += elementOnScreen
	}
		if(currentScrollPos.value >= maxScroll.value){
			mobileBtnIsLeft.value = 'left'
			currentScrollPos.value = maxScroll.value
		}
		if(currentScrollPos.value != maxScroll.value){
			mobileBtnIsLeft.value = 'center'
		}
	}
	function scrollLeftChips(){
		const chipsContainer = document.querySelector('.chipsContainer');
		const chips = document.querySelector('.chip').scrollWidth;
		if(maxScroll.value == 0){
			maxScroll.value = chipsContainer.scrollWidth / chips;
		}
	if(mobileBtnIsLeft.value == 'left' || mobileBtnIsLeft.value == 'center'){
		chipsContainer.scrollLeft -= chips;
		const elementOnScreen = chipsContainer.offsetWidth / chips;
		currentScrollPos.value -= elementOnScreen
	}
		if(currentScrollPos.value <= 1){
			mobileBtnIsLeft.value = 'right'
			currentScrollPos.value = 1
		}
		if(currentScrollPos.value != 1){
			mobileBtnIsLeft.value = 'center'
		}
	}
	onMounted(()=>{
		setTextObserver()
	})
</script>
<style lang="scss" scoped>
*{
	color: white;
}
.mainText{
	color: hsla(0, 0%, 100%, 0.7);
	font-size: 21px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 100%, 1);
	}
}
.chipsContainer{
	overflow-x: hidden;
	scroll-behavior: smooth;
}
.chip{
	min-width: 191px;
	font-size: 21px;
	font-weight: 600;
	&:nth-child(1){
		p{
			color: #58B187;
		}
	}
	&:nth-child(2){
		p{
			color: hsl(237, 80%, 70%);
		}
	}
	&:nth-child(3){
		p{
			color: #CC3CFF;
		}
	}
}
.grayText p{
	color: hsla(0, 0%, 100%, 0.7);
}
.btnActive{
	opacity: 100%;

}
</style>