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
</div>
</template>
<script setup>
import { useStore } from '@/stores/store'
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
.contentMid{
    max-width: 80%;
    margin: 0 auto;
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
    width:1280px;
}
.sectionTitle{
opacity: 0.8;
}
.InnerContent{
    width: 980px;
}
</style>