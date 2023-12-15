<template>
    <div class="defaultNavbar w-screen bg-white">
        <div class="flex 2xl:max-w-5xl justify-between py-3 items-center mx-4 2xl:mx-auto">
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-brands fa-apple" />
            <div :class="isMobile == true ? 'mobileMenu' : '', isMobileNav == true ? 'menuOpen' : 'menuClose'" class="flex flex-row gap-2 flex-wrap mainNavMobile">
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
            </div>
            <div class="flex gap-4">
            <font-awesome-icon v-if="isMobile == true" @click="isMobileNav = !isMobileNav" :class="isMobileNav == true ? 'arrowOpen' : 'arrowClose'" class="mobileMenuArrow" icon="fa-solid fa-chevron-down" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-magnifying-glass" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-bag-shopping" />
            </div>
        </div>
    </div>
</template>
<script setup>
const isMobileNav = ref(false)
const isMobile = ref(false)
function sizeIsMobile(){
        const mobile = window.matchMedia("(max-width: 1024px)")
        if(mobile.matches){
            isMobile.value = true
        }else {
            isMobile.value = false
        }
        window.addEventListener("resize", ()=>{
            if(mobile.matches){
                isMobile.value = true
            }else {
                isMobile.value = false
            }
        })
}
onMounted(()=>{
    sizeIsMobile()
})
</script> 
<style lang="scss" scoped>
.defaultNavbar{
    position: relative;
    z-index: 99;
}
@media (max-width:768px) {
    .mainNavMobile{
        position: absolute;
        top: 38px;
        width: 100vw; background-color: white;
        padding: 1rem;
        overflow-x: hidden;
            div{
                margin-bottom: 1rem;
                width: calc(33% - 1rem);
                border-bottom: 1px solid black;
            }
    }
    .menuOpen{
    height:250px;
    overflow: hidden;
    transition: height 550ms ease;
    }
    .menuClose{
       height: 0px;
        overflow: hidden;
        transition: height 550ms ease;
        padding: 0 1rem;
    }
    .mobileMenuArrow{
        transition: 550ms ease;
    }
    .arrowOpen{
        transform: scaleY(-1);
    }
}
</style>