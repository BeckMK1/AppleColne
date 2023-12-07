<template>
	<div id="section5">
        <div class="pt-2 contentContainer mx-auto">
            <div>
                <div class="InnerContent mx-auto py-32">
                    <ContentAboutScreenCom></ContentAboutScreenCom>
                </div>
            </div>
        </div>
        <div @click="openPopup" v-if="isPopupBtn == true" :class="isPopupReletive == true ? 'relative mt-24' : 'fixed'" class="PopupBtn cursor-pointer w-fit px-2 py-2 fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center"><p class="pl-2">Læs mere om screen</p><div  class=" bg-blue-500 plusContainer rounded-full flex items-center justify-center"><font-awesome-icon icon="fa-solid fa-plus" /></div></div>
        <div class="popupBtnBox"></div>
	</div>
</template>
<script setup>
const isPopupBtn = ref(false)
const isPopupReletive = ref(false)
import { useStore } from '@/stores/store'
const store = useStore()
const isPopup = computed(()=>store.popupOpen)
function openPopup(){
    store.popupOpen = true
    store.popupContent = 'aboutScreen'
}
function setPopupBtnObserver(){
	const section = document.querySelector("#section5");
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isPopupBtn.value = true
	}else{
		isPopupBtn.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
function setPopupBtnPosObserver(){
	const section = document.querySelector("#section5 .popupBtnBox");
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isPopupReletive.value = true
	}else{
		isPopupReletive.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
watch(isPopup, async (newValue, oldValue) =>{
    if(newValue == true){
        isPopupBtn.value = false
    }else{
        isPopupBtn.value = true
    }
})
onMounted(()=>{
    setPopupBtnObserver()
    setPopupBtnPosObserver()
})
</script>
<style lang="scss" scoped>
.PopupBtn{
    background-color: hsla(0, 0%, 95%, 0.5);
    backdrop-filter: saturate(150%) blur(20px);
    color: black;
    border-radius: 3rem;
    z-index: 99;
    .fa-plus{
        height: 20px;
        color: white;
    }
    .plusContainer{
        padding: 0.5rem 0.5rem;
    }
}
.popupBtnBox{
    height: 100px;
}
.popupDefault{
    transition: opacity 1s;
}
.popUpFade-enter-from{
    opacity: 0;
}
.popUpFade-enter-to{
    opacity: 1;
}
.v-enter-active{
    transition: opacity 250ms ease-in;
}
.popUpFade-leave-from{
    opacity: 1;
}
.popUpFade-leave-to{
    opacity: 0;
}
.v-leave-active{
    transition: opacity 250ms ease-out;
}
</style>