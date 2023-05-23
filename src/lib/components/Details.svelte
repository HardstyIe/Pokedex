<script lang="ts">
	import { typeColors } from '$lib/typeColor';
	import type { allPokemonsQuery$result } from '$houdini';

	export let pokemon: allPokemonsQuery$result['pokemon_v2_pokemon'][number];

</script>

<div
	class="relative flex flex-col items-center justify-center w-3/4 mt-8 rounded-xl py-14 bg-slate-500"
	id="pokeDetails"
>
	{#if pokemon.id >= 650}
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/{pokemon.id}.png"
			alt="Image de {pokemon.id}"
			class="absolute -top-14 h-28"
		/>
	{:else}
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/{pokemon.id}.gif"
			alt="Image de {pokemon.id}"
			class="absolute -top-14 h-28"
		/>
	{/if}
	<p class="text-lg">N°{pokemon.id}</p>
	<h1 class="text-2xl">
		{pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames[0].name}
	</h1>
	<div class="flex gap-2">
		{#each pokemon.pokemon_v2_pokemontypes as type}
			{#if type.pokemon_v2_type?.name}
				<p
					class="p-2 rounded-xl"
					style="background-color:{typeColors[type.pokemon_v2_type?.name]};"
				>
					{type.pokemon_v2_type?.pokemon_v2_typenames[0].name}
				</p>
			{/if}
		{/each}
	</div>
	<p class="mt-3">Pokedex Entry:</p>
	{#if pokemon.id >= 650}
		<p />
	{:else}
		<p class="w-3/5 my-5">
			{pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text}
		</p>
	{/if}
	<div class="flex justify-around w-4/5 weight-height">
		<div>
			<h1>Height</h1>
			<p>{pokemon.height === null ? 'undefined' : pokemon.height / 10} M</p>
		</div>
		<div>
			<h1>Weight</h1>
			<p>{pokemon.weight === null ? 'undefined' : pokemon.weight / 10} Kg</p>
		</div>
	</div>
	<div class="w-4/5">
		<h1 class="text-center">Talents</h1>
		<div class="flex justify-around w-full">
			{#each pokemon.pokemon_v2_pokemonabilities as ability}
				<p class="">{ability.pokemon_v2_ability?.pokemon_v2_abilitynames[0].name}</p>
			{/each}
		</div>
	</div>

	<div class="flex flex-col w-full h-full m-auto div">
		<h1 class="flex justify-center">Stats</h1>
		<div class="flex m-auto stats-info">
			<div>
				<div class="mr-4 stats-hp">HP</div>
				<div class="mr-4 stats-hp">{pokemon.pokemon_v2_pokemonstats[0].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-atk">ATK</div>
				<div class="mr-4 stats-atk">{pokemon.pokemon_v2_pokemonstats[1].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-def">DEF</div>
				<div class="mr-4 stats-def">{pokemon.pokemon_v2_pokemonstats[2].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-speA">SpA</div>
				<div class="mr-4 stats-speA">{pokemon.pokemon_v2_pokemonstats[3].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-speD">SpD</div>
				<div class="mr-4 stats-speD">{pokemon.pokemon_v2_pokemonstats[4].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-speed">SPD</div>
				<div class="mr-4 stats-speed">{pokemon.pokemon_v2_pokemonstats[5].base_stat}</div>
			</div>

			<div>
				<div class="mr-4 stats-total">TOT</div>
				<div class="mr-4 stats-total">
					{pokemon.pokemon_v2_pokemonstats.reduce((previous, current) => {
						return previous + current.base_stat;
					}, 0)}
				</div>
			</div>
		</div>
	</div>

	<div class="container flex items-center justify-center">
		{#if pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies}
			{#each pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies as item}
				{#if item.pokemon_v2_pokemonevolutions[0]?.min_level}
					<p>
						Lv.{item.pokemon_v2_pokemonevolutions[0].min_level}
					</p>
				{/if}
				<img
					src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{item
						.pokemon_v2_pokemonspeciesnames[0].pokemon_species_id}.png"
					alt=""
					class="h-32"
				/>
			{/each}
		{:else}
			<p>Pas d'évolution disponible</p>
		{/if}
	</div>
</div>
