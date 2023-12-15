<template>
	<div :id="name" class="border-b-2 border-solid pb-4 border-zinc-500 cursor-pointer">
        <div class="spoiler flex justify-between items-center">
            <h4>Lorem ipsum dolor</h4>
            <font-awesome-icon v-if="currentOpen == name" icon="fa-solid fa-chevron-down" /> 
            <font-awesome-icon v-if="currentOpen != name" icon="fa-solid fa-chevron-up" />
        </div>
        <div class="content overflow-hidden max-h-full">
            <div class="inner">
                <p>I stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P, dignissimum maioribus tuis.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    name:{
        default:"phoneAndLaptop",
        type:String
    },
})
const emits = defineEmits(['sendOpen'])
import { useStore } from '/stores/store'
const store = useStore()
const currentOpen = computed(()=>store.accordionOpen);
const open = ref(false);
watch(currentOpen, async(newValue, oldValue)=>{
    const accordion = document.getElementById(props.name);
    if(newValue == props.name){
        const accordionHeight = accordion.querySelector(".inner").offsetHeight;
        accordion.querySelector('.content').style.height = accordionHeight + 'px';
    }else{
        accordion.querySelector('.content').style.height = 0
    }
})
onMounted(()=>{
    const accordion = document.getElementById(props.name);
    if(store.accordionOpen == props.name){
        const accordionHeight = accordion.querySelector(".inner").offsetHeight;
        accordion.querySelector('.content').style.height = accordionHeight + 'px';
    } else {
    accordion.querySelector('.content').style.height = 0
    }
})
</script>
<style lang="scss" scoped>
.content{
    transition: 500ms ease;
}
.spoiler{
    h4{
        font-size: 26px;
        font-weight: 500;
    }
}
</style>