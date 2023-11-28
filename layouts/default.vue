<template>
    <div class="bg-white w-full min-h-screen pageContainer overflow-x-hidden">
    <NavbarCom></NavbarCom>
    <MacBookProNavbarCom v-if="isSrolled == true" class="navbarDefault" :class="navbarAnimate == true ? 'navbarDown' : 'navbarUp'"></MacBookProNavbarCom>
        <slot />
    </div>
</template>
<script setup>
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
.pageContainer{
    height: 300vh;
}
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
</style>