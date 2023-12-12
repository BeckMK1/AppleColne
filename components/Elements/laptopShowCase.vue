<template>
	<div>
        <div class="lapTop3dContainer">
            <TresCanvas>
                <TresPerspectiveCamera
                    :position="[2, 2, 9]"
                    :look-at="[0, 2, 0]"
                />
                <Suspense>
                </Suspense>
            </TresCanvas>
        </div>
	</div>
</template>
<script setup>
    const gl = {
        clearColor: '#F78B3D',
        shadows: true,
        alpha: false,
        shadowMapType: BasicShadowMap,
        outputColorSpace: SRGBColorSpace,
        toneMapping: NoToneMapping,
        windowSize: true,
    }
</script>
<style lang="scss" scoped>
    .lapTop3dContainer{
        width: 700px;
        height: 500px;
    }
</style>