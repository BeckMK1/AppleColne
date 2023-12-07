<template>
    <div :class="navWhiteText == true ? 'navWhite': ''" class="fixed w-screen fixedNavBg top-0">
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
const navWhiteText = ref(false)
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
			if(entry.intersectionRatio >= 0.10 ){
                navWhiteText.value = true;
			}else {
                navWhiteText.value = false;
            }
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		    observer.observe(blackSections);
	}
	onMounted(()=>{
		setNavObserver()
	})
</script> 
<style lang="scss" scoped>
.fixedNavBg{
    background-color: rgba(251,251,253,0.7);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 1px -3px 5px black;
    z-index: 2;
}
.navWhite{
    background-color: rgba(251,251,253,0.1);
    p{
        color: white;
    }
}
</style>