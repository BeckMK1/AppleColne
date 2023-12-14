<template>
    <div class="defaultNavbar w-screen bg-white">
        <div class="flex 2xl:max-w-5xl justify-between py-3 items-center mx-4 lg:mx-auto">
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-brands fa-apple" />
            <NavbarNavLinkCom link="#" linkName="Store" />
            <NavbarNavLinkCom link="#" linkName="Mac" />
            <NavbarNavLinkCom link="#" linkName="iPad" />
            <NavbarNavLinkCom link="#" linkName="iPhone" />
            <NavbarNavLinkCom link="#" linkName="Watch" />
            <NavbarNavLinkCom link="#" linkName="AirPods" />
            <NavbarNavLinkCom link="#" linkName="Tv og hjem" />
            <NavbarNavLinkCom link="#" linkName="Underholdning" />
            <NavbarNavLinkCom link="#" linkName="Tilbehør" />
            <NavbarNavLinkCom link="#" linkName="Support" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-magnifying-glass" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-bag-shopping" />
        </div>
    </div>
</template>
<script setup>
</script> 
<style lang="scss" scoped>
.defaultNavbar{
    position: relative;
    z-index: 99;
}
</style>