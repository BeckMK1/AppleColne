<template>
	<div class="placeholerImages">
		<img :src="images" alt="">
	</div>
</template>
<script setup>
	const props = defineProps({
		images:{
			default:'',
			type:String
		}
	})
</script>
<style lang="scss" scoped>
	.placeholerImages{
		height: auto;
		width: 500px;
		margin: 0 auto;
		img{
			height: auto;
			width: 500px;
			margin: 0 auto;
			object-fit: contain;
		}
	}
</style>