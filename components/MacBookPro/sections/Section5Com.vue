<template>
	<div id="section5">
        <div class="pt-2 contentContainer mx-auto">
            <div>
                <div class="InnerContent mx-auto py-32">
                    <ContentAboutScreenCom></ContentAboutScreenCom>
                </div>
            </div>
        </div>
	</div>
</template>
<script setup>
const isPopupBtn = ref(false)
const isPopupReletive = ref(false)
const popupContent = ref("")
import { useStore } from '@/stores/store'
const store = useStore()
const isPopup = computed(()=>store.popupOpen)
function openPopup(){
    store.popupOpen = true
    popupContent.value = 'aboutScreen'
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