<template>
    <div>
        <NuxtLink :to="link">{{ linkName }}</NuxtLink>
    </div>
</template>
<script setup>
defineProps({
    link:{
        default:"#"
    },
    linkName:{
        default:"Link"
    }
})
</script>
<style lang="scss"></style>