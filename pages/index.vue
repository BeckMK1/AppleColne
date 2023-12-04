<template>
<div>
    <MacBookProSectionsHeroCom></MacBookProSectionsHeroCom>
    <MacBookProSectionsSection1Com></MacBookProSectionsSection1Com>
    <MacBookProSectionsSection2Com></MacBookProSectionsSection2Com>
    <MacBookProSectionsSection3Com></MacBookProSectionsSection3Com>
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
    max-width: 66%;
}
.navWhite{
    a{
        color: white;
    }
}
</style>