<script lang="ts">
	import { graphql } from '$houdini';
	import Card from '$lib/components/Card.svelte';
	import Details from '$lib/components/Details.svelte';

	export let limit: number;
	export let offset: number = 0;
	export let searchText: string = '';

	export const _allPokemonsQueryVariables = () => {
		return { limit, offset, searchText: searchText ? `%${searchText}%` : '%' };
	};

	const allPokemonsQuery = graphql(`
		query allPokemonsQuery($limit: Int!, $offset: Int!, $searchText: String!) @load {
			pokemon_v2_pokemon(limit: $limit, offset: $offset, where: { name: { _ilike: $searchText } }) {
				pokemon_v2_pokemontypes {
					pokemon_v2_type {
						pokemon_v2_typenames(where: { language_id: { _eq: 5 } }) {
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
						pokemon_v2_abilitynames(where: { language_id: { _eq: 5 } }) {
							name
						}
					}
				}
				weight
				pokemon_v2_pokemonspecy {
					pokemon_v2_evolutionchain {
						pokemon_v2_pokemonspecies(order_by: { id: asc }) {
							pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 5 } }, order_by: {}) {
								pokemon_species_id
								name
							}
							pokemon_v2_pokemonevolutions {
								min_level
							}
						}
					}
					pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 5 } }, order_by: {}) {
						pokemon_species_id
						name
					}
					pokemon_v2_pokemonspeciesflavortexts(
						where: { version_id: { _eq: 17 }, language_id: { _eq: 5 } }
					) {
						flavor_text
					}
				}
			}
		}
	`);
	$: pokemons = $allPokemonsQuery.data?.pokemon_v2_pokemon;
	console.log('🚀 ~ file: List.svelte:64 ~ pokemons:', pokemons);
</script>

{#if $allPokemonsQuery.fetching}
	<h1>loading...</h1>
{:else}
	<div class="grid grid-cols-2">
		<section>
			<div class="flex flex-wrap w-full gap-8">
				{#if typeof pokemons === 'undefined'}
					<p>Pas de correspondance.</p>
				{:else}
					{#each pokemons as pokemon}
						<Card {pokemon} />
					{/each}
				{/if}
			</div>
		</section>
		<section>
			{#if typeof pokemons === 'undefined'}
				<p>Pas de correspondance.</p>
			{:else}
				{#each pokemons as pokemon}
					<Details {pokemon} />
				{/each}
			{/if}
		</section>
	</div>
{/if}
