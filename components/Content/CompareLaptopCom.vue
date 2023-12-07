<template>
	<div>
        <div class="flex contentMid gap-24">
            <div class="flex flex-col items-center gap-6">
                <img src="/_nuxt/Assets/Images/Laptops1.png" alt="">
                <div class="colorContainer flex gap-2">
                    <div class=" bg-black h-3 w-3 rounded-full"></div>
                    <div class=" bg-zinc-400 h-3 w-3 rounded-full"></div>
                    <div class="bg-zinc-700 h-3 w-3 rounded-full"></div>
                </div>
                <div class="h-6 text-red-400">Nyhed</div>
                <div>
                    <h3>14" og 16" laptop Pro</h3>
                    <p class="chip mb-2">X3-, X3 Pro- eller X3 Max-chip</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class=" font-medium mt-2">15.000 kr.</p>
                </div>
            </div>
            <div class="flex flex-col items-center gap-6">
                <img src="/_nuxt/Assets/Images/Laptops2.png" alt="">
                <div class="colorContainer flex gap-2">
                    <div class=" bg-black h-3 w-3 rounded-full"></div>
                    <div class=" bg-zinc-400 h-3 w-3 rounded-full"></div>
                    <div class=" bg-orange-300 h-3 w-3 rounded-full"></div>
                    <div class="bg-zinc-700 h-3 w-3 rounded-full"></div>
                </div>
                <div class="h-6"></div>
                <div>
                    <h3>13" og 15" laptop Air</h3>
                    <p class="chip mb-2">X2-chip</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class=" font-medium mt-2">10.499 kr.</p>
                </div>
                <div>
                    <button class=" bg-blue-500 py-3 px-6 text-white rounded-3xl mr-4">Læs mere</button>
                    <NuxtLink to="#" class=" text-blue-500">Køb ></NuxtLink>
                </div>
            </div>
        </div>
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
    h3{
        font-size: 28px;
        font-weight: 500;
        text-align: center;
    }
    p{
        text-align: center;
    }
    .chip{
        font-size: 16px;
        font-weight: 500;
    }
</style>