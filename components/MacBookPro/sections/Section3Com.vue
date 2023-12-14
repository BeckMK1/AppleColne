<template>
	<div id="section3" class=" bg-black relative">
        <div class="pt-24 contentContainer mx-auto">
            <h2 class="sectionTitle text-white">Partem quandam tuetur.</h2>
            <div>
                <div class="mx-auto pt-32">
                    <ContentAboutChipCom></ContentAboutChipCom>
                </div>
            </div>
        </div>
        <ElementsPopupOpenBtnCom sectionId="section3" bgColor="darkBg" popupContent="aboutChip"></ElementsPopupOpenBtnCom>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.PopupBtn{
    background-color: hsla(0, 0%, 20%, 0.7);
    backdrop-filter: saturate(180%) blur(20px);
    color: white;
    border-radius: 3rem;
    z-index: 99;
    .fa-plus{
        height: 20px;
    }
    .plusContainer{
        padding: 0.5rem 0.5rem;
    }
}
.popupBtnBox{
    height: 100px;
}
</style>