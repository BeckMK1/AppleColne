<template>
    <div :class="isActive == true ? 'border-zinc-400':'border-zinc-700'" class=" border-b border-solid  catagory select-none">
        <p>{{ name }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        default:'',
        type:String
    },
    isActive:{
        default:false,
        type:Boolean
    }
})
</script>
<style lang="scss" scoped>
.catagory{
    min-width: 233px;
    transition: 250ms ease;
    p{
        font-size: 24px;
        font-weight: 500;
        text-align: center;

    }
}
@media(max-width:750px){
}
</style>