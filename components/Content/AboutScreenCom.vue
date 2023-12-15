<template>
        <div class="contentMid">
                <div class="contentMid-inner">
                        <h2 class="w-2/3 mb-24">Lorem ipsum dolor sit amet consec. Adipiscingelit.</h2>
                </div>
        </div>
        <img class="" src="/ImagesExploadeImages/ExploadimageMain.png" />
        <div class="contentMid pb-24">
                <div class="contentMid-inner">
                        <p class="headText pt-12 xl:pb-0 pb-12 ovserveContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus estexemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludusesset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
                </div>
        </div>
        <div class=" bg-zinc-100 w-full screenSplitContainer contentMid py-12 mb-4 overflow-hidden">
                <div class="splitScreen">
                <ElementsImageSplitCom :isObserved="isObserved"></ElementsImageSplitCom>
                </div>
        </div>
        <div class="flex justify-between contentMid px-6 displaySplitText">
                <div>
                        <p>1</p>
                        <p>Ista explanatio naturae nempe</p>
                </div>
                <div>
                        <p>2</p>
                        <p>Ista explanatio naturae nempe</p>
                </div>
                <div>
                        <p>3</p>
                        <p>Ista explanatio naturae nempe</p>
                </div>
        </div>
</template>
<script setup>
const isObserved = ref(false)
function setScreenObserver() {
        const screenSection = document.querySelector(".screenSplitContainer");
        let options = {
                threshold: 0.0
        };
        let callback = (entries, observer) => {
                entries.forEach((entry) => {
                        if (entry.isIntersecting == true) {
                                isObserved.value = true
                        } else {
                                isObserved.value = false
                        }
                })
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(screenSection);
}
function setTextObserver() {
        const textSections = document.querySelectorAll(".ovserveContent");
        let options = {
                threshold: 0.0
        };
        let callback = (entries, observer) => {
                entries.forEach((entry) => {
                        if (entry.isIntersecting == true) {
                                entry.target.classList.add("isObserved")
                        } else {
                                entry.target.classList.remove("isObserved")
                        }
                })
        }
        let observer = new IntersectionObserver(callback, options);
        for (let textSection of textSections) {
                observer.observe(textSection);
        }
}
onMounted(() => {
        setTextObserver()
        setScreenObserver()
})
</script>
<style lang="scss" scoped>
.headText{
        font-size: 24px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 70%, 1);
	}   
}
.mainText{
        font-size: 21px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 70%, 1);
	}
}
.displaySplitText{
        p{
                font-size: 21px;
                font-weight: 500;
        }
}
.screenSplitContainer{
        height: 500px;
        overflow: hidden;
        position: relative;
        .splitScreen{
                position: absolute;
                bottom: -261px;
        }
}
</style>