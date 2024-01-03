<template>
    <div>
        <div class="flex w-full gap-4 items-end text-white mb-10 DefaultH">
            <div class=" w-10/12">
                <div class="perCountContainer overflow-hidden mb-1">
                    <div class="count" :class="barColor" :style=" isObserved == true ? {width: barMax + '%', opacity:'100%'} : {width: 0 + '%' , opacity:'0%'} "></div>
                </div>
                <p class="textColor">{{text}}</p>
            </div>
            <p class=" text-4xl font-medium" :class="NumberTextColor">{{barNumber}}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    text:{
        default:"",
        type:String
    },
    barNumber:{
        default:"",
        type:String
    },
    barMax:{
        default:0,
        type:Number
    },
    barColor:{
        default:'bg-white',
        type:String
    },
    isObserved:{
        default:false,
        type:Boolean
    },
    NumberTextColor:{
        default:'',
        type:String
    }
})
</script>
<style lang="scss" scoped>
@import"/assets/Scss/barColor.scss";
.count{
	height: 6px;
	border-radius: 2rem;
    transition: 2s ease-in;
    width: 0%;
    opacity: 0%;
}
.perCountContainer{
	width: 100%;
	height: 6px;
	border-radius: 2rem;
}
.DefaultH{
    min-height: 40px;
}
.textColor{
    color: hsla(0, 0%, 100%, 1);
    font-weight: 500;
}
</style>