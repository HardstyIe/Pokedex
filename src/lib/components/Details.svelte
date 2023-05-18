<script>
	export let pokemon;
	const abilities = pokemon.pokemon_v2_pokemonabilities;
	const baseStats = pokemon.pokemon_v2_pokemonstats.base_stat;
</script>

<div class="relative flex flex-col items-center justify-center">
	{#if pokemon.id >= 650}
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/{pokemon.id}.png"
			alt="Image de {pokemon.name}"
			class="absolute -top-14"
		/>
	{:else}
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/{pokemon.id}.gif"
			alt="Image de {pokemon.name}"
			class="absolute -top-14"
		/>
	{/if}
	<p class="text-xs">N°{pokemon.id}</p>
	<h1 class="text-2xl">{pokemon.name}</h1>
	<div class="flex gap-2">
		{#each pokemon.pokemon_v2_pokemontypes as type}
			<p class="">{type.pokemon_v2_type.name}</p>
		{/each}
	</div>
	<p class="">Pokedex entry:</p>
	<p class="">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae soluta, ducimus quia
		explicabo qui quas voluptatem libero doloremque tenetur aspernatur
	</p>
	<div class="flex justify-around w-4/5 weight-height">
		<div>
			<h1>Height</h1>
			<p>{pokemon.height / 10} M</p>
		</div>
		<div>
			<h1>Weight</h1>
			<p>{pokemon.weight / 10} Kg</p>
		</div>
	</div>
	<div class="w-4/5">
		<h1 class="text-center">Abilities</h1>
		<div class="flex justify-around w-full">
			{#each abilities as abilityName}
				<p class="">{abilityName.pokemon_v2_ability.pokemon_v2_abilitynames[0].name}</p>
			{/each}
		</div>
	</div>

	<div class="flex flex-col w-full h-full m-auto div">
		<h1 class="flex justify-center">stats</h1>
		<div class="flex m-auto stats-info">
			<div>
				<div class="mr-4 stats-hp">HP</div>
				<div class="mr-4 stats-hp">50</div>
			</div>

			<div>
				<div class="mr-4 stats-atk">ATK</div>
				<div class="mr-4 stats-atk">50</div>
			</div>

			<div>
				<div class="mr-4 stats-def">DEF</div>
				<div class="mr-4 stats-def">48</div>
			</div>

			<div>
				<div class="mr-4 stats-speA">SpA</div>
				<div class="mr-4 stats-speA">65</div>
			</div>

			<div>
				<div class="mr-4 stats-speD">SpD</div>
				<div class="mr-4 stats-speD">50</div>
			</div>

			<div>
				<div class="mr-4 stats-speed">SPD</div>
				<div class="mr-4 stats-speed">55</div>
			</div>

			<div>
				<div class="mr-4 stats-total">TOT</div>
				<div class="mr-4 stats-total">320</div>
			</div>
		</div>
	</div>

	<div class="container flex items-center">
		<img
			src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
			alt=""
		/>
		<div class="evol-lvl">
			<p>Lv. 16</p>
			<p class="text-center">&#x2794;</p>
		</div>
		<img
			src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
			alt=""
		/>
		<div class="evol-lvl">
			<p>Lv. 36</p>
			<p class="text-center">&#x2794;</p>
		</div>
		<img
			src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
			alt=""
		/>
	</div>
</div>
