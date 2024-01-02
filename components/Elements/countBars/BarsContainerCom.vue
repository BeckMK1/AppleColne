<template>
	<div :id="containerName" class="relative h-72">
        <Transition name="fade">
            <div class="w-full absolute" v-if="barsIs16 == false" > 
                <ElementsCountBarsCountUpBarCom v-for="bar in bars14" :text="bar.text" :barNumber="bar.barNumber" :barMax="bar.barMax" :barColor="bar.barColor" :isObserved="isObserved" :NumberTextColor="bar.NumberTextColor" ></ElementsCountBarsCountUpBarCom>
            </div>
        </Transition>
        <Transition name="fade">
            <div class="w-full absolute" v-if="barsIs16 == true">
                <ElementsCountBarsCountUpBarCom v-for="bar in bars16" :text="bar.text" :barNumber="bar.barNumber" :barMax="bar.barMax" :barColor="bar.barColor" :isObserved="isObserved" :NumberTextColor="bar.NumberTextColor" ></ElementsCountBarsCountUpBarCom>
            </div>
        </Transition>
    </div>
</template>
<script setup>
    const props = defineProps({
        bars14:{
            default:[],
            type:Array
        },
        bars16:{
            default:[],
            type:Array
        },
        barsIs16:{
            default:true,
            type:Boolean
        },
        containerName:{
            default:"",
            type:String
        }
    })
    const checkbareState = computed(()=> props.barsIs16)
    const isObserved = ref(false)
function setbarsCountContainerObserver(){
    const section = document.getElementById(props.containerName);
        let options = {
        threshold: 0.0
        };
        let callback = (entries, observer) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting == true){
                isObserved.value = true
            }else{
                isObserved.value = false
            }
        })
    }
    let observer =  new IntersectionObserver(callback, options);
    observer.observe(section);
}
watch(checkbareState, async(newValue, oldValue)=>{
    if(newValue != oldValue){
        isObserved.value = false
        setTimeout(()=>{
            isObserved.value = true
        }, 100)
    }
})
onMounted(()=>{
    setbarsCountContainerObserver()
})
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>