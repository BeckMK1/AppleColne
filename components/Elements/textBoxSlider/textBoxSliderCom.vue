<template>
	<div class=" bg-zinc-100 py-28">
		<div class="contentContainer mx-auto flex justify-between items-end pb-6">
			<h2 class=" text-5xl w-1/2">Censent, oportunitatis esse beate vivere.</h2>
			<NuxtLink class="buyLink text-blue-500 text-xl">Køb Laptop ></NuxtLink>
		</div>
		<div class="flex p-12 gap-4 textBoxes">
				<ElementsTextBoxSliderTextBoxCom v-for="textBox in TextBoxes" :title="textBox.title" :text="textBox.text" :icon="textBox.icon" :link="textBox.link"></ElementsTextBoxSliderTextBoxCom>
		</div>
		<div class=" flex gap-2 w-fit ml-auto mr-80 sliderNavBtn pt-6">
			<button :class="isSlideLeft == false ? 'btnActive' : ''" @click="slideLeft"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
			<button :class="isSlideLeft == true ? 'btnActive' : ''" @click="slideRight"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
		</div>
	</div>
</template>
<script setup>
const TextBoxes = ref([
	{
		title:"Quod cum dixissent",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potius ergo illa dicantur",
		icon:"fa-solid fa-rotate",
		link:'#'
	},
	{
		title:"te delectat umquam",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potius ergo illa dicantur",
		icon:"fa-solid fa-computer",
		link:'#'
	},
	{
		title:"plane perdidiceriti nihil sciat",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potius ergo illa dicantur",
		icon:"fa-solid fa-truck",
		link:'#'
	},
	{
		title:"non sane est disputatum",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potius ergo illa dicantur",
		icon:"fa-solid fa-bag-shopping",
		link:'#'
	},
])
const isSlideLeft = ref(false)
function slideLeft(){
	if(isSlideLeft.value == true){
		const textBoxContainer = document.querySelector(".textBoxes");
		textBoxContainer.style.transform = `translateX(0px)`
		isSlideLeft.value = false
	}
}
function slideRight(){
	if(isSlideLeft.value == false){
		const textBoxContainer = document.querySelector(".textBoxes");
		const textBoxWidth = document.querySelector('.slideTextBoxes').offsetWidth - 86;
		textBoxContainer.style.transform = `translateX(-${textBoxWidth}px)`
		isSlideLeft.value = true
	}
}
</script>
<style lang="scss" scoped>
	.textBoxes{
		width: calc(100vw - 250px);
		margin-left: 265px;
		transition: 250ms ease-in;
	}
	.sliderNavBtn{
		button{
			background-color: hsl(0, 0%, 90%);
			padding: 0.5rem 1rem;
			border-radius: 100%;
			&.btnActive{
				opacity: 50%;
			}
		}
	}
</style>