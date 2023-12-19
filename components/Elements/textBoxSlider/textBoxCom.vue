<template>
	<div class="bg-white p-8 rounded-3xl slideTextBoxes">
		<div>
			<font-awesome-icon :icon="icon" />
			<h3>{{ title }}</h3>
			<p>{{ text }}</p>
			<NuxtLink class="linkBtn" :to="link"><font-awesome-icon icon="fa-solid fa-chevron-right" /></NuxtLink>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	text:{
		default:'',
		type:String
	},
	icon:{
		default:'fa-solid fa-check',
		type:String
	},
	title:{
		default:'',
		type:String
	},
	link:{
		default:'',
		type:String
	}
})
</script>
<style lang="scss" scoped>
	h3{
		font-size: 24px;
		font-weight: 500;
	}
	svg{
		font-size: 32px;
		margin-bottom: 1rem;
	}
	.linkBtn{
		background-color: hsl(0, 0%, 20%);
		padding: 0.5rem 0.75rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		margin-left: auto;
		margin-top: 2rem;
		svg{
			color: white;
			font-size: 21px;
			margin: 0;
		}
	}
</style>