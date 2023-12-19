<template>
    <div class="flex items-center">
        <NuxtLink v-if="isIcon == false" class="text-black" :to="link">{{ linkName }}</NuxtLink>
        <NuxtLink v-if="isIcon == true" class="text-black linkIcon flex items-center" :to="link"><font-awesome-icon :icon="icon" /></NuxtLink>
    </div>
</template>
<script setup>
defineProps({
    link:{
        default:"#"
    },
    linkName:{
        default:"Link"
    },
    isIcon:{
        default:false
    },
    icon:{
        default:""
    }
})
</script>
<style lang="scss" scoped>
a{
    font-size: 12px;
}
svg{
    height: 18px;
    color: hsla(0, 0%, 1%, 0.8);
}
@media (max-width:768px){
    a{
        font-size: 26px;
        font-weight: bold;
    }
}
</style>