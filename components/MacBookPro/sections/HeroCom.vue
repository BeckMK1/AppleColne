<template>
    <div id="hero" class="pt-24 pb-40">
        <div class="flex items-center flex-col pb-12">
            <h1 class=" text-3xl font-medium">Lorem Ipsum</h1>
            <h2 class=" text-7xl text-center font-medium heroTitle"> consectetur.<br /> Adipiscing. </h2>
        </div>
        <div class="flex items-center flex-col">
            <img class="heroPlacehoder mb-6" alt="placeholder" src="/Images/LaptopPlaceholderCropped.png" />
            <a class="btn-buy mb-6" href="#">Køb</a>
            <p class=" text-xl font-medium">Fra 14.999 kr.</p>
        </div>
    </div>
</template>
<script setup></script>
<style lang="scss">
.heroPlacehoder{
    height: 500px;
    width: auto;
    object-fit: contain;
}
.heroTitle{
    font-size: clamp(2.5rem, 10vw, 4.5rem);
}
</style>