<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	import PokemonAbilities from './pokemon/PokemonAbilities.svelte';
	import PokemonEvolutionChain from './pokemon/PokemonEvolutionChain.svelte';
	import PokemonImage from './pokemon/PokemonImage.svelte';
	import PokemonStatus from './pokemon/PokemonStatus.svelte';
	import PokemonType from './pokemon/PokemonType.svelte';

	export let pokemon: allPokemonsQuery$result['pokemon_v2_pokemon'][0];
	$: specy = pokemon.pokemon_v2_pokemonspecy;
</script>

<div class="fixed">
	<div
		class="relative flex flex-col items-center justify-center w-3/4 mt-8 rounded-xl py-14 bg-slate-500"
	>
		<PokemonImage id={pokemon.id} />
		<p class="text-lg">N°{pokemon.id}</p>
		<h1 class="text-2xl capitalize">
			{pokemon.name}
		</h1>
		<div class="flex gap-2">
			{#each pokemon.pokemon_v2_pokemontypes as type}
				<PokemonType {type} />
			{/each}
		</div>
		<p class="mt-3">Pokedex Entry:</p>
		{#if pokemon.id >= 650}
			<p />
		{:else}
			<p class="w-3/5 my-5">
				{#if specy}
					{#each specy?.pokemon_v2_pokemonspeciesflavortexts as flavortexts}
						{flavortexts.flavor_text}
					{/each}
				{/if}
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
			<PokemonAbilities abilities={pokemon.pokemon_v2_pokemonabilities} />
		</div>
		<div class="flex flex-col w-full h-full m-auto div">
			<PokemonStatus status={pokemon.pokemon_v2_pokemonstats} />
		</div>
		<div class="container flex items-center justify-center">
			<PokemonEvolutionChain {specy} />
		</div>
	</div>
</div>
