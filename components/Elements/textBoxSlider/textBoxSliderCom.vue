<template>
	<div class=" bg-zinc-100 py-28">
		<div class="contentContainer mx-auto flex justify-between items-end pb-6">
			<h2 class=" text-5xl w-1/2">Censent, oportunitatis esse beate vivere.</h2>
			<NuxtLink class="buyLink text-blue-500 text-xl">Køb Laptop ></NuxtLink>
		</div>
		<div class="textBoxes">
			<div class=" textBoxes-inner flex gap-4">
				<ElementsTextBoxSliderTextBoxCom  v-for="textBox in TextBoxes" :title="textBox.title" :text="textBox.text" :icon="textBox.icon" :link="textBox.link"></ElementsTextBoxSliderTextBoxCom>
			</div>
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
const maxScroll = ref(0)
const isSlideLeft = ref(false)
function slideLeft(){
	if(isSlideLeft.value == true){
		const textBoxContainer = document.querySelector(".textBoxes");
		const textBoxWidth = document.querySelector(".slideTextBoxes").scrollWidth;
		textBoxContainer.scrollLeft -= textBoxWidth;
		maxScroll.value = textBoxContainer.offsetWidth / textBoxWidth
	}
}
function slideRight(){
	if(isSlideLeft.value == false){
		const textBoxContainer = document.querySelector(".textBoxes");
		const textBoxWidth = document.querySelector(".slideTextBoxes").scrollWidth;
		textBoxContainer.scrollLeft += textBoxWidth;
		maxScroll.value = textBoxContainer.scrollWidth / textBoxWidth;
		const allElement = textBoxWidth * maxScroll.value
		console.log(textBoxContainer.scrollWidth == allElement)
		if(textBoxContainer.scrollWidth == allElement){
			isSlideLeft.value = true
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