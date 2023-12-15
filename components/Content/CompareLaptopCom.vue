<template>
	<div>
        <div class="contentMid">
            <div class="contentMid-inner">
                <div class="flex md:flex-row flex-col gap-24 pb-8">
                    <div class="flex flex-col items-center gap-6">
                        <img src="/_nuxt/assets/Images/Laptops1.png" alt="">
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
                        <div class="flex gap-4 items-center">
                            <p class=" py-3 text-zinc-500">Vises nu</p>
                            <NuxtLink to="#" class=" text-blue-500">Køb ></NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-6">
                        <img src="/_nuxt/assets/Images/Laptops2.png" alt="">
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
        </div>
        <hr class="mb-8">
        <div class="contentMid">
            <div class="contentMid-inner">
                <div class="flex md:flex-row flex-col gap-24 comSpecs">
                    <div class="md:w-1/2 w-full">
                        <div class="chipLogoContainer flex gap-2 justify-center mb-3">
                            <img src="/_nuxt/assets/Images/X3Logo.png" alt="">
                            <img src="/_nuxt/assets/Images/X3ProLogo.png" alt="">
                            <img src="/_nuxt/assets/Images/X3MaxLogo.png" alt="">
                        </div>
                        <p class="mb-3">Laptop X3-, X3 Pro- eller M3 Max-chip</p>
                        <p>Op til</p>
                        <p class="text-3xl font-medium hours">20 timer</p>
                        <p class="mb-12">batteritid</p>
                        <div class="usbPort mx-auto mb-6"></div>
                        <p>2 x Thunderbolt/USB 4 eller 3 x Thunderbolt 4, HDMI, SDXC, Jackstik, XSafe</p>
                    </div>
                    <div class="md:w-1/2 w-full">
                        <div class="chipLogoContainer flex gap-2 justify-center mb-3">
                            <img src="/_nuxt/assets/Images/X2Logo.png" alt="">
                        </div>
                        <p class="mb-3">Laptop X2-chip</p>
                        <p>Op til</p>
                        <p class="text-3xl font-medium hours">16 timer</p>
                        <p class="mb-12">batteritid</p>
                        <div class="usbPort mx-auto mb-6"></div>
                        <p>2 x Thunderbolt/USB 4, Jackstik, xSafe</p>
                    </div>
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
    .chipLogoContainer{
        img{
            width: 35px;
            filter: invert(100%);
        }
    }
    .comSpecs{
        p:not(.hours){
            font-size: 12px;
        }
        .usbPort{
            border: 2px black solid;
            border-radius: 2rem;
            height: 18px;
            width: 50px;
        }
    }
</style>