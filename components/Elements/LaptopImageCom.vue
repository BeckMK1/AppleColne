<template>
    <div class=" relative">
        <div class=" relative">
            <img class=" relative blankLaptop" src="/_nuxt/Assets/Images/laptopScreenBlank.png" alt="">
            <div :id="videoId" class=" absolute top-0 laptopVideo">
                <video muted>
                    <source src="/_nuxt/Assets/video/space.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    videoId:{
        default:"",
        type:String
    }
})
function setVideoObserver() {
    const section = document.getElementById(props.videoId);
    let options = {
        threshold: 0.0
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting == true) {
                document.querySelector('#' + props.videoId + " video").play();
            } else {
                document.querySelector('#' + props.videoId + " video").pause();
                document.querySelector('#' + props.videoId + " video").currentTime = 0;
            }
        })
    }
    let observer = new IntersectionObserver(callback, options);
    observer.observe(section);
}
onMounted(()=>[
setVideoObserver()
])
</script>
<style lang="scss" scoped>
.laptopVideo {
    width: 80%;
    height: 80%;
    left: 10%;
    top: 7%;

    video {
        object-fit: cover;
        height: 100%;
    }
}
.blankLaptop{
    z-index: 1;
}
</style>