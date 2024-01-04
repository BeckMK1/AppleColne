<template>
	<div class=" bg-neutral-50 py-28">
		<div class="contentContainer mx-auto flex justify-between items-end pb-16">
			<h2 class=" text-5xl w-1/2">Censent, oportunitatis esse beate vivere.</h2>
			<NuxtLink class="buyLink text-blue-500 text-xl">Køb Laptop ></NuxtLink>
		</div>
		<div class="textBoxes">
			<div class=" textBoxes-inner flex gap-4">
				<ElementsTextBoxSliderTextBoxCom  v-for="textBox in TextBoxes" :title="textBox.title" :text="textBox.text" :icon="textBox.icon" :link="textBox.link"></ElementsTextBoxSliderTextBoxCom>
			</div>
		</div>
		<div class=" flex gap-2 w-fit ml-auto mr-80 sliderNavBtn pt-6">
			<button :class="isSlideLeft == 'right' ? 'btnActive' : '', isSlideLeft == 'center' ? 'btnActive' : ''" @click="slideLeft"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
			<button :class="isSlideLeft == 'left' ? 'btnActive' : '', isSlideLeft == 'center' ? 'btnActive' : ''" @click="slideRight"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
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
const maxScroll = ref(0)
const isSlideLeft = ref('right')
const currentScrollPos = ref(0)
function slideLeft(){
	if(isSlideLeft.value == 'left' || isSlideLeft.value == 'center' ){
		const textBoxContainer = document.querySelector(".textBoxes");
		const textBoxWidth = document.querySelector(".slideTextBoxes").scrollWidth;
		textBoxContainer.scrollLeft -= textBoxWidth;
		maxScroll.value = Math.round(textBoxContainer.scrollWidth / textBoxWidth) - 1;
		const elementOnScreen = textBoxContainer.offsetWidth / textBoxWidth;
		currentScrollPos.value -= Math.round(elementOnScreen)
		if(currentScrollPos.value != maxScroll.value){
			isSlideLeft.value = 'center'
		}
		if(currentScrollPos.value == 0){
			isSlideLeft.value = 'right'
			currentScrollPos.value == 0
		}
	}
}
function slideRight(){
	if(isSlideLeft.value == 'right' || isSlideLeft.value == 'center'){
		const textBoxContainer = document.querySelector(".textBoxes");
		const textBoxWidth = document.querySelector(".slideTextBoxes").scrollWidth;
		textBoxContainer.scrollLeft += textBoxWidth;
		maxScroll.value = Math.round(textBoxContainer.scrollWidth / textBoxWidth) - 1;
		const elementOnScreen = textBoxContainer.offsetWidth / textBoxWidth;
		currentScrollPos.value += Math.round(elementOnScreen)
		if(currentScrollPos.value == maxScroll.value){
			isSlideLeft.value = 'left'
			currentScrollPos.value = maxScroll.value
		}
		if(currentScrollPos.value != maxScroll.value){
			isSlideLeft.value = 'center'
		}
	}
}
</script>
<style lang="scss" scoped>
	.textBoxes{
		overflow-x: scroll;
		scrollbar-width:none;
		transition: 250ms ease-in;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		&::-webkit-scrollbar {
			display: none;
		}
		&-inner{
			width: fit-content;
			padding-left:calc(max(45px, (100% - (1280px)) / 2));
			padding-right:calc(max(45px, (100% - (1280px)) / 2));
		}
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
	@media (max-width:1300px) {
		.textBoxes{
			&-inner{
			padding-top: 1rem;
			width: fit-content;
			padding-left:1rem;
			padding-right:1rem;
		}
	}
	}
</style>