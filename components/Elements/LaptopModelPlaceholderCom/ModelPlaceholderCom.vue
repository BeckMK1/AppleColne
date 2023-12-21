<template>
	<div class="">
        <div class=" overflow-hidden laptopPlaceholder mx-auto">
			<div class="flex min-w images">
				<ElementsLaptopModelPlaceholderComImagePlaceholderCom v-for="(image, index) in images" :images="image.image" :id="'holderImage-' + index"></ElementsLaptopModelPlaceholderComImagePlaceholderCom>
			</div>
		</div>
		<div class=" bg-zinc-100 p-4 w-fit rounded-3xl flex items-center mx-auto gap-6 mt-12">
				<div @click="slideArrowLeft()"><font-awesome-icon class=" cursor-pointer text-zinc-500" icon="fa-solid fa-chevron-left" /></div>
					<div class="flex gap-3 w-full">
						<div v-for="(image, index) in images" :class="image.isActive == true ? 'bg-zinc-500' : 'bg-zinc-300'" @click="slideHolderImage(index)" class="  rounded-full p-1 w-fit h-fit cursor-pointer"></div>
					</div>
				<div @click="slideArrowRight()"><font-awesome-icon class=" cursor-pointer text-zinc-500" icon="fa-solid fa-chevron-right" /></div>
		</div>
	</div>
</template>
<script setup>
	const images = ref([
		{
			image:"/Images/Laptops1.png",
			isActive:true
		},
		{
			image:"/Images/Laptops2.png",
			isActive:false
		},
		{
			image:"/Images/LaptopPlaceholderCropped.png",
			isActive:false
		},
	])
	const currentIndex = ref(0)
	function slideHolderImage(holdIndex){
			for(let [index, image] of images.value.entries()){
				if(holdIndex == index){
					image.isActive = true
					const holderImage = document.querySelector("#holderImage-" + holdIndex);
					holderImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
				}else{
					image.isActive = false
				}
			}
	}
	function slideArrowRight(){
		for(let [index, image] of images.value.entries()){
			if(image.isActive == true && currentIndex.value != images.value.length - 1){
				currentIndex.value = index + 1
			}
		}
	}
	function slideArrowLeft(){
		for(let [index, image] of images.value.entries()){
			if(image.isActive == true && currentIndex.value > 0){
				currentIndex.value = index - 1
			}
		}
	}
	watch(currentIndex, async (newValue)=>{
		for(let [index, image] of images.value.entries()){
			if(newValue == index){
				image.isActive = true
				const holderImage = document.querySelector("#holderImage-" + newValue);
				holderImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
			}else{
				image.isActive = false
			}
		}

	})
</script>
<style lang="scss" scoped>
	.laptopPlaceholder{
	width:500px;
	}
	.images{
		min-width: fit-content
	}
</style>