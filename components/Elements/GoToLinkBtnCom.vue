<template>
	<div>
        <div>
        <div v-if="isGoToLinkBtn == true" :class="isGoToLinkReletive == true ? 'relative' : 'fixed'" class="GoToLinkBtn cursor-pointer w-fit px-2 py-2 fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center"><p class="pl-2">Sammenlign alle laptops</p><div  class=" bg-blue-500 plusContainer rounded-full flex items-center justify-center"><font-awesome-icon icon="fa-solid fa-chevron-right" /></div></div>
        <div class="isGoToLinkBtnBox"></div>
	</div>
	</div>
</template>
<script setup>
const props = defineProps({
    sectionId:{
        default:"",
        type:String
    }
})
const isGoToLinkBtn = ref(false)
const isGoToLinkReletive = ref(false)

function setGoToLinkBtnObserver(){
	const section = document.getElementById(props.sectionId)
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isGoToLinkBtn.value = true
	}else{
		isGoToLinkBtn.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
function setGoToLinkPosObserver(){
	const section = document.querySelector( "#" + props.sectionId + " .isGoToLinkBtnBox");
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isGoToLinkReletive.value = true
	}else{
		isGoToLinkReletive.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
onMounted(()=>{
    setGoToLinkBtnObserver()
    setGoToLinkPosObserver()
})
</script>
<style lang="scss" scoped>
.GoToLinkBtn{
    background-color: hsla(0, 0%, 95%, 0.5);
    backdrop-filter: saturate(150%) blur(20px);
    color: black;
    border-radius: 3rem;
    z-index: 99;
    .fa-chevron-right{
        height: 20px;
        color: white;
    }
    .plusContainer{
        padding: 0.5rem 0.7rem;
    }
}
.isGoToLinkBtnBox{
    height: 100px;
}
</style>