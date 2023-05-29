<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';

	export let specy: allPokemonsQuery$result['pokemon_v2_pokemon'][0]['pokemon_v2_pokemonspecy'];
</script>

{#if specy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies}
	{#each specy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies as item}
		{#if item.pokemon_v2_pokemonevolutions[0]?.min_level}
			<p>
				Lv.{item.pokemon_v2_pokemonevolutions[0].min_level}
			</p>
		{/if}
		<img
			src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{item
				.pokemon_v2_pokemonspeciesnames[0].pokemon_species_id}.png"
			alt=""
			class="h-24"
		/>
	{/each}
{:else}
	<p>Pas d'évolution disponible</p>
{/if}
