<template>
	<div>
		<div class="flex contentMid gap-12 pb-12">
			<div>
				<div class=" w-7 h-7 rounded-full bg-black mb-4"></div>
				<p>Bork Ego vero volo in virtute vim esse quam maximam; Quasi ego id curem, quid ille aiat aut neget. Si enim ita est, vide ne facinus facias, cum mori suadeas. Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit.</p>
			</div>
			<div>
				<div class=" w-7 h-7 rounded-full bg-black mb-4"></div>
				<p>Bork Ego vero volo in virtute vim esse quam maximam; Quasi ego id curem, quid ille aiat aut neget. Si enim ita est, vide ne facinus facias, cum mori suadeas. Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit.</p>
			</div>
		</div>
		<hr class=" border-zinc-400 pb-12">
		<div class="flex screenSpecs contentMid flex-wrap justify-between pb-12">
			<div class="w-1/3 mb-4">
				<p>600</p>
				<p>Lorem ipsum dolor</p>
			</div>
			<div class="w-1/3  mb-4">
				<p>1000</p>
				<p>Lorem ipsum dolor</p>
			</div>
			<div class="w-1/3  mb-4">
				<p>1600</p>
				<p>Lorem ipsum dolor</p>
			</div>
			<div class="w-1/3 specReverce">
				<p>Loremipsum </p>
				<p>1.000.000:1</p>
			</div>
			<div class="w-1/3">
				<p>1.000.000.000</p>
				<p>Lorem</p>
			</div>
			<div class="w-1/3">
			</div>
		</div>
		<hr class=" border-zinc-400 pb-12">
		<div class="contentMid ">
			<h3 class="subTitle">Student levantur vitiis</h3>
		</div>
		<img class="screenImage" src="/ImagesExploadeImages/ExploadimageMain.png" />
		<div class="contentMid ">
			<p class="lg:w-1/2 mainText w-full"><span class="heightlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ea possunt paria non esse. Equidem e Cn. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Duo Reges: constructio interrete. Quid Zeno?</span></p>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
.mainText{
	color: hsla(0, 0%, 0%, 1);
	font-size: 21px;
	font-weight: 600;
	.heightlight{
		color: hsla(0, 0%, 0%, 0.7);
	}
}
.screenSpecs{
	p:first-child{
		color: black;
		font-size: 28px;
	}
	p:last-child{
		color:hsl(0, 0%, 65%);
		font-size: 21px;
	}
	.specReverce{
		p:last-child{
		color: black;
		font-size: 28px;
	}
	p:first-child{
		color:hsl(0, 0%, 65%);
		font-size: 21px;
	}
	}
}
.subTitle{
		font-size: 32px;
		font-weight: 500;
	}
.screenImage{
	width: auto;
	height: 700px;
}
@media (max-width:1300px) {
	.screenImage{
		height: auto;
	}
}
</style>