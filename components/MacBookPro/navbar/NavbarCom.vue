<template>
    <div :class="navWhiteText == true ? 'navWhite': ''" class="fixed w-screen fixedNavBg top-0">
        <div class="flex 2xl:max-w-5xl justify-between mx-auto py-2 md:px-0 px-4 items-center">
            <div class="w-1/3 pl-4">
                <MacBookProNavbarLinkCom :title="true" class="font-bold" link="#topNav" linkName="Laptop Pro" />
            </div>
            <div :class="isMobile == true ? 'mobileMenu' : '', isMobileNav == true ? 'menuOpen' : 'menuClose'" class="flex flex-col justify-center lg:justify-between lg:flex-row lg:gap-12 gap-1 pr-4">
                <MacBookProNavbarLinkCom link="#" linkName="Oversigt" />
                <MacBookProNavbarLinkCom link="#" linkName="Tekniske Specifikationer" />
                <MacBookProNavbarLinkCom link="#" linkName="Sammenlign" />
                <MacBookProNavbarLinkCom link="#" linkName="Ny på Laptop" />
                <MacBookProNavbarLinkCom class="md:flex items-center bg-blue-600 px-3 py-1 rounded-2xl text-white mr-4 hidden" link="#" linkName="Køb" />
            </div>
            <div class="flex gap-4 items-center lg:hidden">
                <font-awesome-icon v-if="isMobile == true" @click="isMobileNav = !isMobileNav" :class="isMobileNav == true ? 'arrowOpen' : 'arrowClose'" class="mobileMenuArrow" icon="fa-solid fa-chevron-down" />
                <MacBookProNavbarLinkCom class="flex items-center bg-blue-600 px-3 py-1 rounded-2xl text-white mr-4" link="#" linkName="Køb" />
            </div>
        </div>
    </div>
</template>
<script setup>
const navWhiteText = ref(false)
const isMobileNav = ref(false)
const isMobile = ref(false)
	function setNavObserver(){
		const blackSections = document.querySelector(".blackBg");
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList(),
        };
        function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }
        thresholds.push(0);
        return thresholds;
        }
		let callback = (entries, observer) => {
		entries.forEach((entry) =>{
			if(entry.intersectionRatio > 0.05 ){
                navWhiteText.value = true;
			}else {
                navWhiteText.value = false;
            }
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		    observer.observe(blackSections);
	}
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
		setNavObserver()
        sizeIsMobile()
	})
</script> 
<style lang="scss" scoped>
.fixedNavBg{
    background-color: rgba(251,251,253,0.7);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 1px -3px 5px black;
    z-index: 99;
}
.navWhite{
    background-color: rgba(251,251,253,0.1);
    p{
        color: white;
    }
}
@media (max-width:1024px) {
    .mobileMenu{
        position: absolute;
        left: 0;
        top:48px;
        width: 100%;
        padding: 0 3rem;
        background-color: rgba(251,251,253,0.7);
        backdrop-filter: saturate(180%) blur(20px);
        transition: height 550ms ease;
        div{
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }
    }
    .navWhite{
        .mobileMenu{
            background-color: rgba(251,251,253,0.1);
            div{
                border-color:rgba(255,  255, 255, 0.5);
                a{
                    color: white;
                }
            }
        }
        .mobileMenuArrow{
            color: white;
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
        padding: 0 3rem;
        transition: height 550ms ease;
    }
}
.mobileMenuArrow{
    transition: 550ms ease;
}
.arrowOpen{
    transform: scaleY(-1);
}

</style>