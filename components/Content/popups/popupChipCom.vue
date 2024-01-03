<template>
	<div class="PopupText">
		<div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/Images/LaptopScreenWindows.png" />
				</div>
			</div>
			<div class="flex justify-end text-sm mb-12 font-medium">
				<p>VS code, Teams, Photoshop</p>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12">
				<div class="lg:flex gap-6 lg:flex-row hidden">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6 lg:flex-row flex-col">
					<p class="lg:hidden">X-core<br/> CPU</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p class="lg:hidden">X-core<br/>  GPU</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p class="lg:hidden">Op til x GB<br/>  RAM</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto relative">
					<h2 class="sectionTitle ovserveContent">X3 onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<ElementsCountBarsContainerCom :containerName="'firstContainer'" :bars16="firstBars" :barsIs16="true"></ElementsCountBarsContainerCom>
				</div>
			</div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3 Pro</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/Images/LaptopScreenWindows.png" />
				</div>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12"> 
				<div class="lg:flex gap-6 lg:flex-row hidden">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6 lg:flex-row flex-col">
					<p class="lg:hidden">X-core<br/> CPU</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p class="lg:hidden">X-core<br/>  GPU</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p class="lg:hidden">Op til x GB<br/>  RAM</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto">
					<h2 class="sectionTitle ovserveContent">X3 Pro onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<div class="SelectModel bg-zinc-700 p-3 relative flex w-fit gap-6 my-16">
						<div class="selector bg-white absolute" :class="isModelfirst16 == true ? 'model16':'model14'"></div>
						<div @click="isModelfirst16 = false, resetBar()" :class="isModelfirst16 == true ? 'model14Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 14"</p></div>
						<div @click="isModelfirst16 = true, resetBar()" :class="isModelfirst16 == false ? 'model16Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 16"</p></div>
					</div>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<ElementsCountBarsContainerCom :containerName="'secoundContainer'" :bars14="secound14Bars" :bars16="secound16Bars" :barsIs16="isModelfirst16"></ElementsCountBarsContainerCom>
				</div>
			</div>
			<div class="ovserveContent containerInner mx-auto">
				<h2 class="sectionTitle">X3 Pro</h2>
				<p class="mainText mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="heightlight">Aliena dixit in physicis</span> nec ea ipsa, quae tibi probarentur; Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Tum Quintus: Est plane, Piso, ut dicis, inquit</p>
			</div>
			<div class="imageContainer colorContainer mb-4">
				<div class="image">
					<img class="mx-auto" src="/Images/LaptopScreenWindows.png" />
				</div>
			</div>
			<div class="flex justify-end text-sm mb-12 font-medium">
				<p>VS code, Teams, Photoshop</p>
			</div>
			<div class="flex flex-col specs gap-6 ovserveContent containerInner mx-auto mb-12">
				<div class="lg:flex gap-6 lg:flex-row hidden">
					<p>X-core<br/> CPU</p>
					<p>X-core<br/>  GPU</p>
					<p>Op til x GB<br/>  RAM</p>
				</div>
				<div class="flex gap-6 lg:flex-row flex-col">
					<p class="lg:hidden">X-core<br/> CPU</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p class="lg:hidden">X-core<br/>  GPU</p>
					<p>Eaedem res maneant alio modo. Bork Bork Ut optime, secundum naturam affectum esse possit.</p>
					<p class="lg:hidden">Op til x GB<br/>  RAM</p>
					<p>Inquies, ista parva sunt. Negat esse eam, inquit, propter se expetendam.</p>
				</div>
			</div>
			<div class="colorContainer py-8 mb-52">
				<div class="containerInner mx-auto">
					<h2 class="sectionTitle ovserveContent">X3 Pro onsectetur adipiscing elit. An potest cupiditas finiri.</h2>
					<div class="SelectModel bg-zinc-500 p-3 relative flex w-fit gap-6 my-16">
						<div class="selector bg-white absolute" :class="isModelSecound16 == true ? 'model16':'model14'"></div>
						<div @click="isModelSecound16 = false, resetBar()" :class="isModelSecound16 == true ? 'model14Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 14"</p></div>
						<div @click="isModelSecound16 = true, resetBar()" :class="isModelSecound16 == false ? 'model16Text' : ''" class=" relative z-10 model cursor-pointer"><p class=" select-none">Model på 16"</p></div>
					</div>
					<p class="text-3xl">Lorem ipsum / dolor sit / amet consectetur / adipiscing elit / Simus igitur contenti</p>
					<p class="text-3xl mt-6 mb-3 heighlight">Nunc omni virtuti vitium contrario nomine opponitur.</p>
					<ElementsCountBarsContainerCom :containerName="'thirdContainer'" :bars14="secound14Bars" :bars16="secound16Bars" :barsIs16="isModelSecound16"></ElementsCountBarsContainerCom>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const isModelfirst16 = ref(false)
const isModelSecound16 = ref(false)

const firstBars = ref([
	{
	text:'14" Laptop Pro med X3',
	barNumber:'17,7x',
	barMax:100,
	barColor:'barPurple',
	NumberTextColor:'numberColorPurple '
	},
	{
	text:'13" Laptop Pro med X2',
	barNumber:'14,9x',
	barMax:80,
	barColor:'barBlue',
	NumberTextColor:'numberColorBlue'
	},
	{
	text:'13" Laptop Pro med X1',
	barNumber:'',
	barMax:66,
	barColor:'barGray',
	NumberTextColor:'text-indigo-800'
	},
	{
	text:'13" Laptop Pro med i7',
	barNumber:'',
	barMax:5,
	barColor:'bg-neutral-500',
	NumberTextColor:'bg-neutral-600'
	},
])
const secound16Bars = ref([
	{
	text:'16" Laptop Pro med X3',
	barNumber:'5,3x',
	barMax:100,
	barColor:'barPurple',
	NumberTextColor:'numberColorPurple'
	},
	{
	text:'16" Laptop Pro med X2',
	barNumber:'2.7x',
	barMax:60,
	barColor:'barBlue',
	NumberTextColor:'numberColorBlue'
	},
	{
	text:'16" Laptop Pro med X1',
	barNumber:'',
	barMax:50,
	barColor:'barGray',
	NumberTextColor:'text-indigo-800'
	},
	{
	text:'16" Laptop Pro med i7',
	barNumber:'',
	barMax:10,
	barColor:'bg-neutral-500',
	NumberTextColor:'bg-neutral-600'
	},
])
const secound14Bars = ref([
	{
	text:'14" Laptop Pro med X3',
	barNumber:'17,7x',
	barMax:100,
	barColor:'barPurple',
	NumberTextColor:'numberColorPurple '
	},
	{
	text:'13" Laptop Pro med X2',
	barNumber:'14,9x',
	barMax:80,
	barColor:'barBlue',
	NumberTextColor:'numberColorBlue'
	},
	{
	text:'13" Laptop Pro med X1',
	barNumber:'',
	barMax:66,
	barColor:'barGray',
	NumberTextColor:'text-indigo-800'
	},
	{
	text:'13" Laptop Pro med i7',
	barNumber:'',
	barMax:5,
	barColor:'bg-neutral-500',
	NumberTextColor:'bg-neutral-600'
	},
])
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
	transition: 550ms;
}
.model16Text p{
	color:white;
}
.model14Text p{
	color: white;
}
@media (max-width:1300px) {
	.containerInner{
		width: 100%;
		padding: 1rem;
	}
}
</style>