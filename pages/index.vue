<template>
<div>
    <MacBookProSectionsHeroCom></MacBookProSectionsHeroCom>
    <MacBookProSectionsSection1Com></MacBookProSectionsSection1Com>
    <MacBookProSectionsSection2Com></MacBookProSectionsSection2Com>
    <div class="blackBg">
    <MacBookProSectionsSection3Com></MacBookProSectionsSection3Com>
    <MacBookProSectionsSection4Com></MacBookProSectionsSection4Com>
    </div>
    <MacBookProSectionsSection5Com></MacBookProSectionsSection5Com>
    <MacBookProSectionsSection6Com></MacBookProSectionsSection6Com>
    <MacBookProSectionsSection7Com></MacBookProSectionsSection7Com>
    <Transition name="popUpFade">
            <ElementsPopupCom class="popupDefault" v-if="checkPopup == true"></ElementsPopupCom>
    </Transition>
</div>
</template>
<script setup>
import { useStore } from '/stores/store'
const store = useStore()
const checkPopup = computed(()=>store.popupOpen)
watch(checkPopup, async (newValue) =>{
    if(newValue == true){
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "auto";
    }
})
</script>
<style lang="scss">
*{
    font-family: 'Roboto', sans-serif;
}
html{
    scroll-behavior: smooth;
}
h2{
	font-size: 80px;
	font-weight: 500;
	line-height: normal;
}
.btn-buy{
        background-color: rgb(37 99 235);
        padding:0.75rem 1.4rem;
        color: white;
        border-radius: 2rem;       
}
.sectionTitle{
    font-size: 56px;
    font-weight: 500;
    line-height: normal;
}
.contentBig{
    max-width: 1030px;
    margin: 0 auto;
    @media (max-width:1300px) {
        max-width: 100%;
        margin: 0 15px;
    }
}
.contentMid{
    max-width: 980px;
    margin: 0 auto;
    @media (max-width:1300px) {
        max-width: 100%;
        margin: 0;
        padding: 0 15px;
    }
}
.contentMid-inner{
    max-width: 898px;
    margin: 0 auto;
    @media (max-width:1300px) {
        max-width: 100%;
    }
}
.navWhite{
    a{
        color: white;
    }
}
.ovserveContent{
	opacity: 0;
	transform: translateY(50px);
	transition: 550ms ease-in;
    overflow: hidden;
	&.isObserved{
		opacity: 1;
		transform: translateY(0);
		transition: 550ms ease-in;
	}
	&.observerOp{
		opacity: 1;
	}
}
.contentContainer{
    max-width:1280px;
    @media (max-width:1300px) {
        max-width: 100%;
        margin: 0;
        padding: 0 15px;
    }
}
.sectionTitle{
opacity: 0.8;
}
.popupDefault{
    transition: opacity 1s;
}
.popUpFade-enter-from{
    opacity: 0;
}
.popUpFade-enter-to{
    opacity: 1;
}
.v-enter-active{
    transition: opacity 250ms ease-in;
}
.popUpFade-leave-from{
    opacity: 1;
}
.popUpFade-leave-to{
    opacity: 0;
}
.v-leave-active{
    transition: opacity 250ms ease-out;
}
@media (max-width:768px){
    h2{
        font-size: 3rem;
    }
    #section2{
        display: none;
    }
}
</style>