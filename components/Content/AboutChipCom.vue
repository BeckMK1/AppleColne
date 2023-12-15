<template>
	<div class="">
		<div class="contentMid">
			<div class="contentMid-inner">
				<h2 class="">Confusioque virtutum tamen</h2>
				<p class="mainText pt-12  ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
				<div class="chipsContainer  flex flex-col md:flex-row gap-8 justify-between w-full pt-12">
					<div class="chip flex md:flex-col flex-row items-center gap-8">
						<div>
							<img src="/_nuxt/assets/Images/chips/chip1.png">
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
					<div class="chip flex md:flex-col flex-row  items-center gap-8">
						<div>
							<img src="/_nuxt/assets/Images/chips/Chip2.png">
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
					<div class="chip flex md:flex-col flex-row  items-center gap-8">
						<div>
							<img src="/_nuxt/assets/Images/chips/Chip3.png">
						</div>
						<p>X-core CPU</p>
						<p>X-core GPU</p>
						<p>Up til x GB sammlet RAM</p>
					</div>
				</div>
				<h2 class="sectionTitle text-white pt-48">Uo modo autem philosophus loquitur.</h2>
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
						<div class="w-1/3 ">
							<p class="mainText mb-2">Op til</p>
							<h3 class=" text-6xl font-medium mb-2">2,5x consectetur adipiscing.</h3>
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
							<h3 class=" text-6xl font-medium mb-2">80 % consectetur adipiscing.</h3>
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
.chip{
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
</style>