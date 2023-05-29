<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	import { typeColors } from '$lib/typeColor';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let pokemon: allPokemonsQuery$result['pokemon_v2_pokemon'][0];

	function onClick() {
		dispatch('click', pokemon);
	}
</script>

<button
	class="relative flex flex-wrap items-center justify-center w-full pt-10 mb-8 rounded-2xl bg-slate-400"
	on:click={onClick}
>
	<img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
		alt="Photo de {pokemon.name}"
		class="absolute -top-14"
	/>
	<div class="relative flex flex-col items-center bottom-6">
		<p class="">N°{pokemon.id}</p>
		<h1 class="m-2 capitalize">
			{pokemon.name}
		</h1>
		<div class="flex gap-2">
			{#each pokemon.pokemon_v2_pokemontypes as type}
				{@const pokemonType = type.pokemon_v2_type}
				{#if pokemonType}
					<p class="p-2 rounded-xl" style="background-color:{typeColors[pokemonType.name]};">
						{pokemonType.pokemon_v2_typenames[0].name}
					</p>
				{/if}
			{/each}
		</div>
	</div>
</button>
