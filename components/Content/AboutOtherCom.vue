<template>
	<div>
        <div class="contentMid">
            <div class="contentMid-inner">
                    <div class="pb-12">
                        <h2>Constructio.<br />Aristoteles.<br />Subtilius.</h2>
                    </div>
                    <div class="flex md:flex-row items-center md:items-start gap-3 md:gap-0 flex-col pb-52">
                        <div class="w-1/2 md:absolute">
                            <NuxtImg class="audioImage" src="ExploadeImages/ExploadimageMain.png" />
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
                    <div class=" pb-12">
                        <h2 class="pb-12">Constructio.<br />Aristoteles.<br />Subtilius.</h2>
                        <p class="mainText ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur, id est voluptate. Quod autem principium officii quaerunt, melius quam Pyrrho; Quis est, qui non oderit libidinosam, protervam adolescentiam? Illud dico, ea, quae dicat, praeclare inter se cohaerere.</p>
                    </div>
                </div>
            </div>
            <div class=" laptopSlide my-24" :class="isObserved == true ? 'laptopSlideIN': ''">
                <div class=" laptopSideLeft">
                    <NuxtImg src="/LaptopSideView.png" />
                </div>
                <div class=" laptopSideRight">
                    <NuxtImg src="/LaptopSideView.png" />
                </div>
            </div>
            <div class="contentMid">
                <div class="contentMid-inner">
                    <div class="flex justify-between pb-24">
                    <div class="w-1/3">
                        <hr class="mb-4">
                        <p class="mainText ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur, </p>
                    </div>
                    <div class="w-1/3">
                        <hr class="mb-4">
                        <p class="mainText ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
                    </div>
                </div>
                <div class=" pb-24">
                    <h2>propter ali<br /> quampiam.</h2>
                </div>
                    <div class="flex justify-between  pb-24">
                        <div class="w-1/3">
                            <p class="mainText ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
                        </div>
                        <div class="w-1/3">
                            <hr class="mb-4">
                            <p class="mainText ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uterque enim summo bono fruitur,</p>
                        </div>
                    </div>
                </div>
            </div>
        <h3 class="pb-4 text-5xl font-medium">Consectetur adipiscing elit</h3>
        <div class="accordionBox bg-zinc-200 p-16 rounded-3xl">
            <div class="flex md:flex-row flex-col justify-between">
                <div class="accordionWrapper md:w-1/3 w-full">
                    <ElementsAccordionCom @click="accordionOpen(accordion.name)" v-for="accordion in accordions" :name="accordion.name" class="mb-4"></ElementsAccordionCom>
                </div>
                <div class="md:w-1/2 w-full accordionImageContainer">
                        <NuxtImg class="accordionImage" :class="accordion.name == currentAccordion ? 'accordionImageShow': 'accordionImageHide' "  v-show="accordion.name == currentAccordion" v-for='accordion in accordions' :src="accordion.image" />
                </div>
            </div>
        </div>
	</div>
</template>
<script setup>
import { useStore } from '/stores/store'
const store = useStore()
const isObserved = ref(false)
const accordions = ref([
    {name:'phoneAndLaptop', image:'ExploadeImages/ExploadimageMain.png'},
    {name:'tabletAndLaptop', image:'slider1/image1.jpg'},
    {name:'watchAndLaptop', image:'slider1/image2.jpg'},
])
const currentAccordion = computed(()=> store.accordionOpen)
function accordionOpen(name){
    store.accordionOpen = name
}
function setLaptopSlideObserver(){
	const section = document.querySelector( ".laptopSlide");
	let options = {
    threshold: 0.1
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
        isObserved.value = true
	}else{
		isObserved.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
function setContentObserver(){
	const textsections = document.querySelectorAll( ".observedContent");
	let options = {
    threshold: 0.1
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
        entry.target.classList.add("isobserved")
	}else{
		entry.target.classList.removed("isobserved")
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
for (let textSection of textsections) {
    observer.observe(textSection);
}
}
onMounted(()=>{
    setLaptopSlideObserver()
    setContentObserver()
})
</script>
<style lang="scss" scoped>
.audioImage{
transform: translateX(-700px);
width: 1000px;
    @media (max-width:1300px) {
        transform: translateX(-33%);
    }
    @media(max-width:768px){
        transform: translateX(0%);
    }
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
.laptopSideLeft{
    transition: 2s ease-in;
    transform: translateX(-80%) scaleX(-1);
    margin-bottom: 6rem;
    img{
        transform: scale(1.5);
    }
}
.laptopSideRight{
    transition: 2s ease-in;
    transform: translateX(80%);
    img{
        transform: scale(1.5);
    }
}
.laptopSlideIN{
    .laptopSideLeft{
    transform: translateX(-50%) scaleX(-1);
    }
.laptopSideRight{
    transform: translateX(50%);
    }
}
.accordionBox{
    height: 500px;
    @media (max-width:768px) {
        height: 100%;
        padding-bottom: 2rem;
    }
}
.accordionImageContainer{
    height: 400px;
    overflow-y: hidden;
    img{
        object-fit: cover;
    }
}
.accordionImageShow{
animation: ShowImage 1s ease forwards;
opacity: 0;
}
@keyframes ShowImage {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.accordionImageHide{
    opacity: 0%;
}
</style>