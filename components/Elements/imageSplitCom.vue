<template>
	<div>
        <div class="splitImageContainer flex justify-between">
            <ul class="splitWrapper" :class="isObserved == true ? 'split' : ''">
                <div class="splitNumContainer">
                    <div class="splitNum"><p>1</p></div>
                    <img class="numImage" src="/_nuxt/Assets/Images/lineImageScreen.png" alt="">
                </div>
                <div class="imageWrapper">
                    <img class="splitImage" src="/_nuxt/Assets/Images/splitImage/splitScreenBlue.png" alt="">
                </div>
            </ul>
            <ul class="splitWrapper" :class="isObserved == true ? 'split' : ''">
                <div class="splitNumContainer">
                    <div class="splitNum"><p>2</p></div>
                    <img class="numImage" src="/_nuxt/Assets/Images/screenNum.png" alt="">
                </div>
                <div class="imageWrapper">
                    <img class="splitImage" src="/_nuxt/Assets/Images/splitImage/splitScreenWhite.png" alt="">
                </div>
            </ul>
            <ul class="splitWrapper" :class="isObserved == true ? 'split' : ''">
                <div class="splitNumContainer">
                    <div class="splitNum"><p>3</p></div>
                    <img class="numImage" src="/_nuxt/Assets/Images/lineImageScreen.png" alt="">
                </div>
                <div class="imageWrapper">
                    <img class="splitImage" src="/_nuxt/Assets/Images/splitImage/splitScreenDisplay.png" alt="">
                </div>
            </ul>
        </div>
	</div>
</template>
<script setup>
const props = defineProps({
    isObserved:{
        default:false,
        type:Boolean
    }
})
</script>
<style lang="scss" scoped>
.splitImageContainer{
    position: relative;
    .splitWrapper{
        position: relative;
        transition: 1s ease-in;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        &:nth-child(1){
            transform: translateX(100%);
        }
        &:nth-child(3){
            transform: translateX(-100%);
        }
        .splitNumContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top:-100px
        }
        .splitNum{
            opacity: 0;
            transition: 550ms ease;
        }
        .numImage{
            opacity: 0;
            transition: 550ms ease;
        }
        &.split{
            .splitNum{
            opacity:1;
            }
            .numImage{
            opacity: 0.5;
        }
            &:nth-child(1){
            transform: translateX(0);
            }
            &:nth-child(3){
            transform: translateX(0);
            }
        }
    }
    .imageWrapper{
        height: 600px;
        width: 33%;
        overflow-x: hidden;
    }
    .splitImage{
        height: 500px;
        width: 326px;
    }
}
</style>