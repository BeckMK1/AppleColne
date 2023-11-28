<template>
    <div>
        <NuxtLink :class="title == true ? 'title':''" :to="link">{{ linkName }}</NuxtLink>
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
    title:{
        default:false
    }
})
</script>
<style lang="scss" scoped>
a{
    font-size: 12px;
}
.title{
    font-size:21px;
}
svg{
    height: 18px;
    color: hsla(0, 0%, 1%, 0.8);
}
</style>