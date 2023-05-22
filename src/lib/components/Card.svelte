<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	import { typeColors } from '$lib/typeColor';
	export let pokemon: allPokemonsQuery$result['pokemon_v2_pokemon'][0];
</script>

<div class="relative flex flex-col items-center w-1/5 pt-10 rounded-2xl bg-slate-400" id="pokeCard">
	<img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
		alt="Photo de {pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain
			?.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemonspeciesnames[0].name}"
		class="absolute -top-14"
	/>
	<div class="relative flex flex-col items-center bottom-6">
		<p class="">N°{pokemon.id}</p>
		<h1 class="m-2">
			{pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames[0].name}
		</h1>
		<div class="flex gap-2">
			{#each pokemon.pokemon_v2_pokemontypes as type}
				{#if type.pokemon_v2_type?.name}
					<p class="" style="background-color:{typeColors[type.pokemon_v2_type?.name]};">
						{type.pokemon_v2_type?.pokemon_v2_typenames[0].name}
					</p>
				{/if}
			{/each}
		</div>
	</div>
</div>
