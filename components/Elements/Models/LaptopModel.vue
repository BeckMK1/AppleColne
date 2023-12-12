<template>
	<div>
        <primitive :object="model" />
	</div>
</template>
<script setup>
    import{useBlend} from '@tresjs/cientos'

    const {scene: model} = await useBlend(
        "@/Assets/models/ASUSLaptop.blend"
    )
</script>
<style lang="scss" scoped></style>