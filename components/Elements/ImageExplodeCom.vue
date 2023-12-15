<template>
	<div class=" relative w-full h-full">
        <div class="mainImage flex justify-center items-center absolute z-0">
        <img class="" src="/_nuxt/assets/Images/ExploadeImages/ExploadimageMain.png" alt="">
        </div>
        <div :class="isExploade == true ? 'exploade' : ''" class="reletive top-0 left-0 imageContainer">
            <img class="absolute image image1" src="/_nuxt/assets/Images/ExploadeImages/ImageViewer.jpg" alt="">
            <img class="absolute image image2" src="/_nuxt/assets/Images/ExploadeImages/Notes.jpg" alt="">
            <img class="absolute image image3"  src="/_nuxt/assets/Images/ExploadeImages/Photoshop.jpg" alt="">
            <img class="absolute image image4" src="/_nuxt/assets/Images/ExploadeImages/VsCode.jpg" alt="">
            <img class="absolute image image5" src="/_nuxt/assets/Images/ExploadeImages/Teams.jpg" alt="">
        </div>
	</div>
</template>
<script setup>
const isExploade = ref(false);
function setImageObserver(){
	const section = document.querySelector(".imageContainer");
	let options = {
    threshold: 0.0
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
		isExploade.value = true
	}else{
		isExploade.value = false
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
observer.observe(section);
}
onMounted(()=>{
    setImageObserver()
})

</script>
<style lang="scss" scoped>
.mainImage{
    height: 100%;
    width: 100%;
}
.mainImage img{
    height: 500px;
    width: auto;
}
.imageContainer{
    height: 1000px;
    width: 1000px;
    position: relative;
    z-index: 1;
}
.image{
    height: 300px;
    width: auto;
    top: 15%;
    left: 21%;
    transition: 2s ease-out;
}
.exploade{
    .image1{
        transform: translateX(425px) translateY(430px);
    }
    .image2{
        transform: translateX(-300px) translateY(-50px);
        height: 200px;
    }
    .image3{
        transform: translateX(-400px) translateY(450px);
        height: 250px;
    }
    .image4{
        transform: translateX(650px) translateY(250px);
        height: 150px;
    }
    
    .image5{
        transform: translateX(520px) translateY(-100px);
    }
}
</style>