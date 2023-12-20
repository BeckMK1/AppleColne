<template>
	<div id="section2" class="h-screen relative mb-32">
		<div v-if="isModel == true" class="modelViewer flex justify-center">
			<div class="modelContainer overflow-hidden">
				<div :class="isBig == true ? 'selectedBig' : 'selectedSmall'" class="flex flex-row-reverse justify-between pl-4 slideContainer">
					<div :class="isBig == true ? 'boxSelected' : ''" class="boxContainer overflow-hidden">
					<TresCanvas clear-color="#fff">
						<TresPerspectiveCamera :position="[0, 5, 10]" />
						<OrbitControls :enable-zoom="false" />
						<Suspense>
							<FBXModel path="/laptop/laptopNew.fbx" />
						</Suspense>
						<TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
					</TresCanvas>
				</div>
					<div :class="isBig == false ? 'boxSelected' : ''"  class="boxContainer overflow-hidden">
					<TresCanvas clear-color="#fff">
						<TresPerspectiveCamera :position="[0, 5, 12]" />
						<OrbitControls :enable-zoom="false" />
						<Suspense>
							<FBXModel path="/laptop/laptopNew.fbx" />
						</Suspense>
						<TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
					</TresCanvas>
				</div>
				</div>
			</div>
				<p class=" text-black text-sm absolute laptopTextBg mx">16" laptop Pro i black med X3 Pro eller X3 Max</p>
				<div class="sizeSwich">
					<div class="SizeContainer">
						<div  :class="isBig == true ? 'selectSize16' : 'selectSize14' " class="sizeSelector"></div>
						<div @click="isBig = false " :class="isBig == false ? 'sizeSelected' : ''" class="size16 cursor-pointer font-medium size">14"</div>
						<div @click="isBig = true " :class="isBig == true ? 'sizeSelected' : ''" class="size14 cursor-pointer font-medium size ">16"</div>
					</div>
				</div>
		</div>
		<div v-if="isModel == false" class="modelPlaceholder">
			 <ElementsLaptopModelPlaceholderCom></ElementsLaptopModelPlaceholderCom>
		</div>
	</div>
</template>
<script setup>
const isBig = ref(true)
const isModel = ref(true)
import { OrbitControls, FBXModel} from '@tresjs/cientos'
function checkIsModel(){
	const mobile = window.matchMedia('(max-width: 1300px)');
	if(mobile.matches){
			isModel.value = false
		}else {
			isModel.value = true
		}
	window.addEventListener("resize", ()=>{
		if(mobile.matches){
			isModel.value = false
		}else {
			isModel.value = true
		}
	})
}
onMounted(()=>{
	checkIsModel()
})
</script>
<style lang="scss" scoped>
.modelContainer{
	width: 1280px;
	height: 1000px;
}
.selectedBig{
	transform: translateX(-49%);
}
.selectedSmall{
	transform: translateX(0%);
}
.slideContainer{
	transition: 1s;
	width: 2500px;
}
.boxContainer{
    height: 1500px;
    width: 1920px;
	opacity: 0;
	transition:2s;
	overflow-y: visible;
}
.sizeSwich{
	position: absolute;
	bottom: -100px;
	left: 50%;
	transform: translateX(-50%);
}
.SizeContainer{
	height: fit-content;
	background-color: rgba(231, 231, 231, 0.7);
    backdrop-filter: saturate(180%) blur(20px);
	position: relative;
	display: flex;
	padding: 1.25rem 0.25rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 3rem;
	overflow-y: visible;
}
.sizeSelector{
	position: absolute;
	background-color: black;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	z-index: -1;
	transition: 550ms ease;
}
.selectSize16{
	transform: translateX(113%);
}
.selectSize14{
	transform: translateX(8%);
}
.size{
	color: black;
	padding: 1rem;
	padding-top: 0;
	padding-bottom: 0;
	position: relative;
	z-index: 2;
	height: fit-content;
}
.sizeSelected{
	color: white;
}
.boxSelected{
	opacity: 1;
}
.laptopTextBg{
	background-color: rgba(255, 255, 255, 0.5);
	padding:0.2rem  0.33rem;
	border-radius: 0.5rem;
	backdrop-filter: saturate(180%) blur(20px);
	bottom: -25px;
}
@media (max-width:1300px) {
	.slideContainer{
		transform: translateX(-55%);
	}
	.selectedBig{
	transform: translateX(-55%);
	}
	.selectedSmall{
		transform: translateX(-5%);
	}
}
</style>