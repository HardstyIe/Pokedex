<script lang="ts">
	import { graphql } from '$houdini';
	import Card from '$lib/components/Card.svelte';
	import Details from '$lib/components/Details.svelte';

	export let limit: number;
	export let offset: number = 0;
	export let searchText: string = '';
	let details = {};

	function onLoadMore() {
		limit += 20;
	}

	function onLoadLess() {
		limit -= 20;
	}

	export const _allPokemonsQueryVariables = () => {
		const params = { limit, offset, searchText: searchText ? `%${searchText}%` : '%' };
		return params;
	};

	const allPokemonsQuery = graphql(`
		query allPokemonsQuery($limit: Int!, $offset: Int!, $searchText: String!) @load {
			pokemon_v2_pokemon(limit: $limit, offset: $offset, where: { name: { _ilike: $searchText } }) {
				pokemon_v2_pokemontypes {
					pokemon_v2_type {
						pokemon_v2_typenames(where: { language_id: { _eq: 9 } }) {
							name
						}
						name
					}
				}
				pokemon_v2_pokemonstats {
					base_stat
				}
				id
				height
				pokemon_v2_pokemonabilities {
					pokemon_v2_ability {
						pokemon_v2_abilitynames(where: { language_id: { _eq: 9 } }) {
							name
						}
					}
				}
				weight
				pokemon_v2_pokemonspecy {
					pokemon_v2_evolutionchain {
						pokemon_v2_pokemonspecies(order_by: { id: asc }) {
							pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }, order_by: {}) {
								pokemon_species_id
								name
							}
							pokemon_v2_pokemonevolutions {
								min_level
							}
						}
					}
					pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }, order_by: {}) {
						pokemon_species_id
						name
					}
					pokemon_v2_pokemonspeciesflavortexts(
						where: { version_id: { _eq: 11 }, language_id: { _eq: 9 } }
					) {
						flavor_text
					}
				}
			}
		}
	`);
	$: pokemons = $allPokemonsQuery.data?.pokemon_v2_pokemon;
</script>

<div class="grid grid-cols-2" id="pokeList">
	<section>
		<div class="flex flex-wrap content-center justify-center gap-8">
			{#if typeof pokemons === 'undefined'}
				<p />
			{:else}
				{#each pokemons as pokemon}
					<Card {pokemon} />
				{/each}
			{/if}
		</div>

		<div class="w-full mt-12 text-center">
			<button on:click={onLoadMore} class="p-2 bg-slate-200 rounded-xl">Load more..</button>
			<button on:click={onLoadLess} class="p-2 bg-slate-200 rounded-xl">Load less..</button>
		</div>
	</section>
	<section class="flex flex-col items-center">
		{#if typeof pokemons === 'undefined'}
			<p />
		{:else}
			{#each pokemons as pokemon}
				<Details {pokemon} />
			{/each}
		{/if}
	</section>
</div>
