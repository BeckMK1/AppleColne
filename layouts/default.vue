<template>
    <div class="bg-white w-full min-h-screen pageContainer overflow-x-hidden">
    <NavbarCom></NavbarCom>
    <MacBookProNavbarCom v-if="isSrolled == true, isPopup == false" class="navbarDefault" :class="navbarAnimate == true ? 'navbarDown' : 'navbarUp'"></MacBookProNavbarCom>
    <div>
        <Transition name="fade">
            <div v-if="subNavOpen == true" class="h-screen w-screen fixed top-0 z-10 subNavBg"></div>
        </Transition>
        <slot />
    </div>
    </div>
</template>
<script setup>
    import { useStore } from '/stores/store'
    const store = useStore()
    const isPopup = computed(()=>store.popupOpen)
    const subNavOpen = computed(()=>store.isSubMobileNav)
    const isSrolled = ref(false)
    const navbarAnimate = ref (false)
    function CheckScroll(){
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 300){
                if(isSrolled.value != true){
                    navbarAnimate.value = true
                    isSrolled.value = true
                }
            } else{
                if(isSrolled.value != false){
                    navbarAnimate.value = false
                    setTimeout(()=>{
                            isSrolled.value = false
                    },260)
                }
            }
        })
    }
    onMounted(()=>{
        CheckScroll()
    })
</script>
<style lang="scss" scoped>
.navbarDefault{
    transform: translateY(-100%);
    display:none;
}
.navbarUp{
    animation: NavSlideUp 250ms forwards ease;
    display:block;
}
@keyframes NavSlideUp {
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(-100%);
    }
}
.navbarDown{
    animation: NavSlideDown 250ms forwards ease;
    display:block;
}
@keyframes NavSlideDown {
    from{
        transform: translateY(-100%);
    }
    to{
        transform: translateY(0);
    }
}
.subNavBg{
    background-color: hsla(0, 0%, 100%, 5%);
    backdrop-filter: saturate(180%) blur(20px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>