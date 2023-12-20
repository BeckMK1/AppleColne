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
		img{
			height: auto;
			width: 500px;
			padding: 0 3rem;
		}
	}
</style>