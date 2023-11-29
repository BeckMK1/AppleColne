<template>
	<div>
        <img alt="sliderImage" :src="image">
	</div>
</template>
<script setup>
defineProps({
    image:{
        default:"",
        type:String
    }
})
</script>
<style lang="scss"></style>