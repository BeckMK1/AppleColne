<template>
	<div class="sliderContainer rounded-3xl overflow-hidden">
        <img :class="imageCurrent == true ? 'zoomAnimation' : ''" class="w-full h-full object-cover rounded-3xl" alt="sliderImage" :src="image" />
	</div>
</template>
<script setup>
defineProps({
    image:{
        default:""
    },
    imageCurrent:{
        default:false,
        type:Boolean
    }
})
</script>
<style lang="scss" scoped>
.sliderContainer{
    width:1280px;
    height: 680px;
    transition: 250ms;
    .zoomAnimation{
        animation: imageZoom 4s forwards ease-in;
    }

}
@keyframes imageZoom {
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.3);
    }
}
</style>