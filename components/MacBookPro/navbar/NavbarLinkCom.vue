<template>
    <div>
        <NuxtLink v-if="isIcon == false" class="text-black" :to="link">{{ linkName }}</NuxtLink>
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
</style>