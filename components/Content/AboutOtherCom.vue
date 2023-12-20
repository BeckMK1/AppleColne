<template>
	<div>
        <div class="contentMid">
            <div class="contentMid-inner">
                    <div class="pb-12">
                        <h2>Constructio.<br />Aristoteles.<br />Subtilius.</h2>
                    </div>
                    <div class="flex md:flex-row items-center md:items-start gap-3 md:gap-0 flex-col pb-52">
                        <div class="w-1/2 md:absolute">
                            <img class="audioImage" src="/Images/ExploadeImages/ExploadImageMain.png" />
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
                    <img src="/Images/LaptopSideView.png" />
                </div>
                <div class=" laptopSideRight">
                    <img src="/Images/LaptopSideView.png" />
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
                <img class="mb-6" src="/Images/slider1/image2.jpg" />
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
	</div>
</template>
<script setup>
const isObserved = ref(false)

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