<template>
    <div class="fixed w-screen fixedNavBg top-0">
        <div class="flex 2xl:max-w-5xl justify-between mx-auto py-2 items-center">
            <div class="w-1/2">
                <MacBookProNavbarLinkCom :title="true" class="font-bold" link="#" linkName="MacBook Pro" />
            </div>
            <MacBookProNavbarLinkCom link="#" linkName="Oversigt" />
            <MacBookProNavbarLinkCom link="#" linkName="Tekniske Specifikationer" />
            <MacBookProNavbarLinkCom link="#" linkName="Sammenlign" />
            <MacBookProNavbarLinkCom link="#" linkName="Ny på Mac" />
            <MacBookProNavbarLinkCom class="flex items-center bg-blue-600 px-3 py-1 rounded-2xl text-white" link="#" linkName="Køb" /> 
        </div>
    </div>
</template>
<script setup>
</script> 
<style lang="scss" scoped>
.fixedNavBg{
    background-color: rgba(251,251,253,0.8);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 1px -3px 5px black;
    z-index: 2;
}
</style>