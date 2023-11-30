<template>
	<div class="popupContainer flex flex-col items-center w-screen h-full fixed top-0 overflow-y-scroll ">
        <div class="popup min-h-screen bg-black mt-24 rounded-3xl overflow-hidden relative">
            <div class="overflow-hidden imageContainer relative">
                <div @click="closePopup" class="closePopup cursor-pointer bg-zinc-600 w-fit rounded-full flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-x" /></div>
            <img src="/_nuxt/Assets/Images/slider1/image1.jpg" class=" absolute top-0" alt="">
        </div>
        </div>
	</div>
</template>
<script setup>
import { useStore } from '@/stores/store'
const store = useStore()
function closePopup(){
    store.popupOpen = false
}
</script>
<style lang="scss" scoped>
    .popupContainer{
        background-color: rgba(251,251,253,0.8);
    backdrop-filter: saturate(180%) blur(20px);
    }
    .popup{
       width: 80%;
    }
    .imageContainer{
        height: 70vh;
    }
    .closePopup{
        top: 3rem;
        right: 1rem;
        padding: 1rem 1.2rem;
        color: white;
        position: sticky;
        z-index: 2;
        float: right;
        svg{
            height: 1.2rem;
        }
    }
</style>