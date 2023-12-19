<template>
    <div id="topNav" class="defaultNavbar w-screen bg-white">
        <div class="flex 2xl:max-w-5xl justify-between py-3 items-center mx-4 2xl:mx-auto">
            <NavbarNavLinkCom :isIcon="true" link="/" icon="fa-brands fa-apple" />
            <div :class="isMobile == true ? 'mobileMenu' : '', isMobileNav == true ? 'menuOpen' : 'menuClose'" class="flex flex-col md:flex-row md:gap-2 w-full md:px-12 max-w-full md:justify-between mainNavMobile right-0">
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
            <div class="flex gap-12">
            <font-awesome-icon v-if="isMobile == true" @click="isMobileNav = !isMobileNav, store.mainNavOn()" :class="isMobileNav == true ? 'arrowOpen' : 'arrowClose'" class="mobileMenuArrow" icon="fa-solid fa-chevron-down" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-magnifying-glass" />
            <NavbarNavLinkCom :isIcon="true" link="#" icon="fa-solid fa-bag-shopping" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '/stores/store'
const store = useStore()
const glMainNav = computed(()=> store.mainNavMobile)
const isMobileNav = ref(false)
const isMobile = ref(false)
function sizeIsMobile(){
        const mobile = window.matchMedia("(max-width: 768px)")
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
        padding:0 3rem;
        overflow-x: hidden;
            div{
                width: 100%;
                height: fit-content;
                margin-bottom: 1rem;
            }
    }
    .menuOpen{
    height:100vh;
    overflow: hidden;
    opacity: 100%;
    transition: 550ms ease;
    }
    .menuClose{
       height: 0px;
        overflow: hidden;
        transition: 550ms ease;
        opacity: 0;
        padding: 0 3rem;
    }
    .mobileMenuArrow{
        transition: 550ms ease;
    }
    .arrowOpen{
        transform: scaleY(-1);
    }
}
</style>