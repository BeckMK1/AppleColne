<template>
	<div class="sliderContainer rounded-3xl">
        <NuxtImg class="w-full h-full object-cover rounded-3xl" alt="sliderImage" :src="image" />
	</div>
</template>
<script setup>
defineProps({
    image:{
        default:""
    }
})
</script>
<style lang="scss" scoped>
.sliderContainer{
    width:1280px;
    height: 680px;
    transition: 250ms;
}
</style>