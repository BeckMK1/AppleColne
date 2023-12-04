<template>
	<div class="popupContainer flex flex-col items-center w-screen h-full fixed top-0 overflow-y-scroll">
        <div :class="isScrolled == true ? 'containerScroll':''" class="popup h-auto bg-black mt-24 rounded-3xl relative">
            <div @click="closePopup" :class="isScrolled == true ? 'isScrolled' : 'notScrolled'" class="closePopup cursor-pointer bg-zinc-600 w-fit rounded-full flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-x" /></div>
            <div class="overflow-hidden imageContainer rounded-3xl relative">
                <img src="/_nuxt/Assets/Images/slider1/image1.jpg" class=" absolute top-0" alt="">
            </div>
            <div class="popupContent contentMid mx-auto pt-52">
                <ContentPopupsPopupChipCom v-if="popupContent == 'aboutChip'"></ContentPopupsPopupChipCom>
            </div>
        </div>
	</div>
</template>
<script setup>
import { useStore } from '@/stores/store'
const store = useStore()
const isScrolled = ref(false)
defineProps({
    popupContent:{
        default:'',
        type:String
    }
})
function closePopup(){
    store.popupOpen = false
}
function closeBtnFixed(){
    const scrollContainer = document.querySelector(".popupContainer");
    scrollContainer.addEventListener('scroll', ()=>{
       if(scrollContainer.scrollTop >= 96){
        isScrolled.value = true
       }else{
        isScrolled.value = false
       }
    })
}
onMounted(()=>{
    closeBtnFixed()
})
</script>
<style lang="scss" scoped>
    .popupContainer{
        background-color: rgba(251,251,253,0.2);
    backdrop-filter: saturate(110%) blur(100px);
    }
    .popup{
       width: 80%;
    }
    .imageContainer{
        height: 70vh;
        width: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        img{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    .closePopup{
        padding: 1.6rem 1.2rem;
        color: white;
        z-index: 2;
        height: 0;
        svg{
            height: 1.2rem;
        }
    }
    .isScrolled{
        position: sticky;
        float: right;
        top: 4rem;
        transform: translateX(-16px);
        height: -50px;
        
    }
    .notScrolled{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .containerScroll{
        transform: translateY(-50px);
        padding-bottom: 50px;
    }
</style>