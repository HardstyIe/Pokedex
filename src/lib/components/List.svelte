<script lang="ts">
	import { graphql, type allPokemonsQuery$result } from '$houdini';
	import Card from '$lib/components/Card.svelte';
	import Details from '$lib/components/Details.svelte';
	import { status } from '../store';

	type Pokemon = allPokemonsQuery$result['pokemon_v2_pokemon'][0];

	export let limit: number;
	export let offset: number = 0;
	export let searchText: string = '';

	let selectedPokemon: Pokemon;

	function onPokemonClick(event: CustomEvent<Pokemon>) {
		selectedPokemon = event.detail;
		status.set(selectedPokemon.pokemon_v2_pokemonstats);
	}

	function onLoadMore() {
		limit += 20;
	}

	function onLoadLess() {
		limit -= 20;
	}

	export const _allPokemonsQueryVariables = () => {
		const params = {
			limit,
			offset,
			languageId: 9, //english
			searchText: searchText ? `%${searchText}%` : '%'
		};
		return params;
	};

	const allPokemonsQuery = graphql(`
		query allPokemonsQuery($limit: Int!, $offset: Int!, $languageId: Int!, $searchText: String!)
		@load {
			pokemon_v2_pokemon(limit: $limit, offset: $offset, where: { name: { _ilike: $searchText } }) {
				name
				pokemon_v2_pokemontypes {
					pokemon_v2_type {
						pokemon_v2_typenames(where: { language_id: { _eq: $languageId } }) {
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
						pokemon_v2_abilitynames(where: { language_id: { _eq: $languageId } }) {
							name
						}
					}
				}
				weight
				pokemon_v2_pokemonspecy {
					pokemon_v2_evolutionchain {
						pokemon_v2_pokemonspecies(order_by: { id: asc }) {
							pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: $languageId } }) {
								pokemon_species_id
								name
							}
							pokemon_v2_pokemonevolutions {
								min_level
							}
						}
					}
					pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: $languageId } }) {
						pokemon_species_id
						name
					}
					pokemon_v2_pokemonspeciesflavortexts(
						where: { version_id: { _eq: 11 }, language_id: { _eq: $languageId } }
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
			{#if pokemons}
				{#each pokemons as pokemon}
					<Card {pokemon} on:click={onPokemonClick} />
				{/each}
			{:else}
				<p />
			{/if}
		</div>

		<div class="w-full mt-12 text-center">
			<button on:click={onLoadMore} class="p-2 bg-slate-200 rounded-xl">Load more..</button>
			<button on:click={onLoadLess} class="p-2 bg-slate-200 rounded-xl">Load less..</button>
		</div>
	</section>
	<section class="flex flex-col items-center">
		{#if selectedPokemon}
			<Details pokemon={selectedPokemon} />
		{:else}
			<p />
		{/if}
	</section>
</div>
