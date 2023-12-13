<template>
	<div class="PopupText">
		<div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/_nuxt/Assets/Images/LaptopScreenWindows.png" alt="">
				</div>
			</div>
			<div class="flex justify-end text-sm mb-12 font-medium">
				<p>VS code, Teams, Photoshop</p>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12">
				<div class="flex gap-6">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto ">
					<h2 class="sectionTitle ovserveContent">X3 onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<div class="mb-3 ovserveContent observerOp bars1">
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x3" NumberTextColor="numberColorPurple" barNumber="17.4x" :barMax="100" barColor="barPurple" :isObserved="countBarObserved1"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x2" NumberTextColor="numberColorBlue" barNumber="14.4x" :barMax="80" barColor="barBlue" :isObserved="countBarObserved1"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x1" :barMax="66" barColor="barGray" :isObserved="countBarObserved1"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit Intel x7" :barMax="5" barColor="barDarkGray" :isObserved="countBarObserved1"></ElementsCountUpBarCom>
					</div>
				</div>
			</div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3 Pro</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/_nuxt/Assets/Images/LaptopScreenWindows.png" alt="">
				</div>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12"> 
				<div class="flex gap-6">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto">
					<h2 class="sectionTitle ovserveContent">X3 Pro onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<div class="SelectModel bg-zinc-500 p-3 relative flex w-fit gap-6 my-16">
						<div class="selector bg-white absolute" :class="isModel16 == true ? 'model16':'model14'"></div>
						<div @click="isModel16 = false, resetBar()" :class="isModel16 == true ? 'model14Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 14"</p></div>
						<div @click="isModel16 = true, resetBar()" :class="isModel16 == false ? 'model16Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 16"</p></div>
					</div>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<div class="mb-3 ovserveContent observerOp bars2" v-if="isModel16 == true">
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x3" NumberTextColor="numberColorPurple" barNumber="2,8x" :barMax="100" barColor="barPurple" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x2" NumberTextColor="numberColorBlue" barNumber="1,5x" :barMax="50" barColor="barBlue" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x1" :barMax="40" barColor="barGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit Intel x7" :barMax="35" barColor="barDarkGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
					</div>
					<div class="mb-3 ovserveContent observerOp bars2" v-if="isModel16 == false">
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x3" NumberTextColor="numberColorPurple" barNumber="24,7x" :barMax="100" barColor="barPurple" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x2" NumberTextColor="numberColorBlue" barNumber="13,1x" :barMax="50" barColor="barBlue" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x1" :barMax="40" barColor="barGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit Intel x7" :barMax="35" barColor="barDarkGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
					</div>
				</div>
			</div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3 Pro</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/_nuxt/Assets/Images/LaptopScreenWindows.png" alt="">
				</div>
			</div>
			<div class="flex justify-end text-sm mb-12 font-medium">
				<p>VS code, Teams, Photoshop</p>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12">
				<div class="flex gap-6">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto">
					<h2 class="sectionTitle ovserveContent">X3 Pro onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<div class="SelectModel bg-zinc-500 p-3 relative flex w-fit gap-6 my-16">
						<div class="selector bg-white absolute" :class="isModel16 == true ? 'model16':'model14'"></div>
						<div @click="isModel16 = false, resetBar()" :class="isModel16 == true ? 'model14Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 14"</p></div>
						<div @click="isModel16 = true, resetBar()" :class="isModel16 == false ? 'model16Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 16"</p></div>
					</div>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<div class="mb-3 ovserveContent observerOp bars2" v-if="isModel16 == true">
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x3" NumberTextColor="numberColorPurple" barNumber="5,3x" :barMax="100" barColor="barPurple" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x2" NumberTextColor="numberColorBlue" barNumber="2,7x" :barMax="50" barColor="barBlue" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x1" :barMax="40" barColor="barGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit Intel x7" :barMax="35" barColor="barDarkGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
					</div>
					<div class="mb-3 ovserveContent observerOp bars2" v-if="isModel16 == false">
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x3" NumberTextColor="numberColorPurple" barNumber="49,1x" :barMax="100" barColor="barPurple" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x2" NumberTextColor="numberColorBlue" barNumber="23,8x" :barMax="50" barColor="barBlue" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit x1" :barMax="40" barColor="barGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
						<ElementsCountUpBarCom text="Consectetur adipiscing elit Intel x7" :barMax="35" barColor="barDarkGray" :isObserved="countBarObserved2"></ElementsCountUpBarCom>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const isModel16 = ref(true)
const countBarObserved1 = ref(false)
const countBarObserved2 = ref(false)
	function setCountObserver(){
		const textSections = document.querySelectorAll(".ovserveContent");
		let options = {
		threshold: 0.0
	};
		let callback = (entries, observer) => {
		entries.forEach((entry) =>{
			if(entry.isIntersecting == true && entry.target.classList.contains("observerOp") == false){
				entry.target.classList.add("isObserved")
			}else{
				entry.target.classList.remove("isObserved")
			}
			if(entry.target.classList.contains("observerOp") == true && entry.isIntersecting == true){
				if(entry.target.classList.contains("bars1") == true){
					countBarObserved1.value = true
				}
				if(entry.target.classList.contains("bars2") == true){
					countBarObserved2.value = true
				}

				entry.target.classList.remove("isObserved")
			}
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		for(let textSection of textSections){
		observer.observe(textSection);
		}
	}
	function resetBar(){
		countBarObserved2.value = false
		setTimeout(() => {
			countBarObserved2.value = true
		},50);
	}
	onMounted(()=>{
		setCountObserver()
	})
</script>
<style lang="scss" scoped>
.PopupText{
	h2{
		color:white;
	}
	.heighlight{
		color: white;
	}
	.mainText{
		width: 50%;
		font-size: 21px;
		font-weight: 600;
	}
	p{
		color: hsla(0, 0%, 100%, 0.7);
		.heightlight{
			color: hsla(0, 0%, 100%, 1);
		}
	}
}
.colorContainer{
	background-color: #1D1D1F;
	border-radius: 3rem;
}
.specs{
	p{
		width: 33%;
		font-size: 26px;
		color: white;
		font-weight: 500;
	}
}
.ovserveContent{
	opacity: 0;
	transform: translateY(50px);
	transition: 550ms ease;
	&.isObserved{
		opacity: 1;
		transform: translateY(0);
		transition: 550ms ease;
	}
	&.observerOp{
		opacity: 1;
	}
}
.containerInner{
	width: 850px;
}
.selector{
	height: calc(100% - 5px);
	width: 48%;
	z-index:1;
	transition: 300ms ease-in;
	border-radius: 2rem;
}
.SelectModel{
	border-radius: 2rem;
}
.model16{
	transform: translateX(-3%) translateY(-21.5%);
	right: 0%;
}
.model14{
	transform: translateX(103%) translateY(-21.5%);
	right: 100%;
}
.model p{
	color:black;
	font-weight: 500;
}
.model16Text p{
	color:white;
}
.model14Text p{
	color: white;
}
</style>