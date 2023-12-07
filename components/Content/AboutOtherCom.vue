<template>
	<div>
        <div class="contentMid pb-12">
            <h2>Constructio.<br />Aristoteles.<br />Subtilius.</h2>
        </div>
        <div class="flex contentMid pb-52">
            <div class="w-1/2 absolute">
                <img class="audioImage" src="/_nuxt/Assets/Images/ExploadeImages/ExploadimageMain.png" alt="">
            </div>
            <div class="w-1/2"></div>
            <div class=" flex flex-col gap-20 w-1/2">
                <div class="AudioText">
                    <font-awesome-icon class="audioIcon" icon="fa-solid fa-video" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratio quidem vestra sic cogit.</p>
                </div>
                <div class="AudioText">
                    <font-awesome-icon class="audioIcon" icon="fa-solid fa-volume-high" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratio quidem vestra sic cogit.</p>
                </div>
                <div class="AudioText">
                    <font-awesome-icon class="audioIcon" icon="fa-solid fa-sliders" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratio quidem vestra sic cogit.</p>
                </div>
            </div>
        </div>
        <div class="contentMid pb-12">
            <h2 class="pb-12">Constructio.<br />Aristoteles.<br />Subtilius.</h2>
            <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur, id est voluptate. Quod autem principium officii quaerunt, melius quam Pyrrho; Quis est, qui non oderit libidinosam, protervam adolescentiam? Illud dico, ea, quae dicat, praeclare inter se cohaerere.</p>
        </div>
        <div class="flex justify-between contentMid pb-24">
            <div class="w-1/3">
                <hr class="mb-4">
                <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
            </div>
            <div class="w-1/3">
                <hr class="mb-4">
                <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
            </div>
        </div>
        <div class="contentMid pb-24">
            <h2>propter ali<br /> quampiam.</h2>
        </div>
        <div class="flex justify-between contentMid pb-24">
            <div class="w-1/3">
                <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
            </div>
            <div class="w-1/3">
                <hr class="mb-4">
                <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
            </div>
        </div>
        <h3 class="pb-4 text-5xl font-medium">Consectetur adipiscing elit</h3>
        <div class="accordionBox bg-zinc-200 p-16 rounded-3xl">
            <div class="flex justify-between">
                <div class="accordionWrapper w-1/3">
                    <ElementsAccordionCom @click="accordionOpen(accordion.name)" v-for="accordion in accordions" :name="accordion.name" class="mb-4"></ElementsAccordionCom>
                </div>
                <div class="w-1/2">
                    <img src="/_nuxt/Assets/Images/ExploadeImages/ExploadimageMain.png" alt="">
                </div>
            </div>
        </div>
	</div>
</template>
<script setup>
import { useStore } from '@/stores/store'
const store = useStore()
const accordions = ref([
    {name:'phoneAndLaptop'},
    {name:'tabletAndLaptop'},
    {name:'watchAndLaptop'},
])
function accordionOpen(name){
    store.accordionOpen = name
}
</script>
<style lang="scss" scoped>
.audioImage{
transform: translateX(-700px);
width: 1000px;
}
.mainText{
    font-size: 22px;
    font-weight: 500;
}
.AudioText{
    p{
        font-size: 21px;
        font-weight: 500;
        width: 100%;
    }
    .audioIcon{
        font-size: 40px;
        margin-bottom: 8px;
    }
}
</style>