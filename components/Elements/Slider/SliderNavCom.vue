<template>
	<div>
        <div class="NavIndicator bg-zinc-500 w-2 h-2 overflow-hidden cursor-pointer" :class="isActive == true ? 'navActive':'navInactive' "><div class="SlideTimer bg-zinc-700 h-2" :style="{width:timerCount + 'px'}" v-if="isActive == true"></div></div>
	</div>
</template>
<script setup>
const props = defineProps({
    isActive:{
        default:false,
        type:Boolean
    },
    isAutoPlay:{
        default:false,
        type:Boolean
    }
})
const emit = defineEmits(['sendCount'])
const timerCount = ref(0)
const autoPlay = ref(false)
function timer(){
    const maxCount = 50
    if(props.isActive == true){
    const countUp = setInterval(()=>{
            timerCount.value += 0.25
            if(timerCount.value >= maxCount){
                clearInterval(countUp)
                timerCount.value = 0;
                emit('sendCount')
            }
        })
    }
}
watch(() => props.isAutoPlay, (newValue)=>{
    autoPlay.value = newValue
    if(newValue == true){
        timer()
    }
})
watch(() => props.isActive,(newValue, oldValue) =>{
    if(newValue == true || oldValue == true){
        if(autoPlay.value == true){
            timer()
        }
    }
})

</script>
<style lang="scss">
.NavIndicator{
    border-radius: 20px;
}
.navActive{
    width: 50px;

}
</style>