<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	export let pokemons: allPokemonsQuery$result['pokemon_v2_pokemon'];
	let pokemonFiltered = [...pokemons];
	let SearchTerm = '';

	function SearchFilter() {
		return pokemons.filter((pokemonFiltered) => SearchTerm.toLowerCase().includes(SearchTerm));
		pokemonFiltered = pokemons;
	}
</script>

<input type="text" bind:value={SearchTerm} on:keydown={SearchFilter} />
