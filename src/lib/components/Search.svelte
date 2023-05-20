<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	export let pokemons: allPokemonsQuery$result['pokemon_v2_pokemon'];

	let SearchTerm = '';

	function SearchFilter() {
		return pokemons.filter((SearchTerm) => {});
	}
</script>

<input type="text" bind:value={SearchTerm} on:keydown={SearchFilter} />
