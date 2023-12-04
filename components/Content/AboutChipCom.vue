<template>
	<div>
		<h2>Confusioque virtutum tamen</h2>
		<p class="mainText pt-12 contentMid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. <span class="heightlight">Cum praesertim illa perdiscere</span> ludus esset. Primum in nostrane potestate est, quid meminerimus? <span class="heightlight">At iam decimum annum in spelunca iacet.</span> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</p>
		<div class="chipsContainer flex justify-between w-full pt-12">
			<div class="chip flex flex-col gap-8">
				<div>
					<img src="/_nuxt/Assets/Images/chips/chip1.png">
				</div>
				<p>X-core CPU</p>
				<p>X-core GPU</p>
				<p>Up til x GB sammlet RAM</p>
			</div>
			<div class="chip flex flex-col gap-8">
				<div>
					<img src="/_nuxt/Assets/Images/chips/Chip2.png">
				</div>
				<p>X-core CPU</p>
				<p>X-core GPU</p>
				<p>Up til x GB sammlet RAM</p>
			</div>
			<div class="chip flex flex-col gap-8">
				<div>
					<img src="/_nuxt/Assets/Images/chips/Chip3.png">
				</div>
				<p>X-core CPU</p>
				<p>X-core GPU</p>
				<p>Up til x GB sammlet RAM</p>
			</div>
		</div>
		<h2 class="sectionTitle text-white pt-48">Uo modo autem philosophus loquitur.</h2>
		<ElementsImageExplodeCom></ElementsImageExplodeCom>
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
*{
	color: white;
}
h2{
	font-size: 80px;
	font-weight: 500;
	line-height: normal;
}
.mainText{
	color: hsla(0, 0%, 100%, 0.7);
	font-size: 21px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 100%, 1);
	}
}
.chip{
	font-size: 21px;
	font-weight: 600;
	&:nth-child(1){
		p{
			color: #58B187;
		}
	}
	&:nth-child(2){
		p{
			color: hsl(237, 80%, 70%);
		}
	}
	&:nth-child(3){
		p{
			color: #CC3CFF;
		}
	}
}
</style>