<template>
	<div id="section3" class=" bg-black relative">
        <div class="pt-24 contentContainer mx-auto">
            <h2 class="sectionTitle text-white">Partem quandam tuetur.</h2>
            <div>
                <div class="InnerContent mx-auto pt-32">
                    <ContentAboutChipCom></ContentAboutChipCom>
                </div>
            </div>
        </div>
        <div @click="openPopup" v-if="isPopupBtn == true" :class="isPopupReletive == true ? 'relative' : 'fixed'" class="PopupBtn cursor-pointer w-fit px-2 py-2 fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center"><p class="pl-2">Læs mere om chip</p><div  class=" bg-blue-500 plusContainer rounded-full flex items-center justify-center"><font-awesome-icon icon="fa-solid fa-plus" /></div></div>
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
    store.popupContent = 'aboutChip'
}
function setPopupBtnObserver(){
	const section = document.querySelector("#section3");
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
	const section = document.querySelector(".popupBtnBox");
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
    background-color: hsla(0, 0%, 20%, 0.7);
    backdrop-filter: saturate(180%) blur(20px);
    color: white;
    border-radius: 3rem;
    z-index: 99;
    .fa-plus{
        height: 20px;
    }
    .plusContainer{
        padding: 0.5rem 0.5rem;
    }
}
.popupBtnBox{
    height: 100px;
}
</style>