<script lang="ts">
	import { graphql } from '$houdini';
	import Card from '$lib/components/Card.svelte';
	import Details from '$lib/components/Details.svelte';
	import Search from '$lib/components/Search.svelte';

	const allPokemonsQuery = graphql(`
		query allPokemonsQuery @load {
			pokemon_v2_pokemon(limit: 15) {
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
	console.log('🚀 ~ file: +page.svelte:47 ~ allPokemonsQuery:', $allPokemonsQuery);

	const pokemons = $allPokemonsQuery.data?.pokemon_v2_pokemon;
</script>

<main class="flex w-full h-screen">
	<section class="flex flex-wrap w-3/5 mt-11">
		<div class="w-full text-center search">
			{#if typeof pokemons === 'undefined'}
				<p>Pas de correspondance</p>
			{:else}
				<Search {pokemons} />
			{/if}
		</div>
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
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.700);
	}
</style>
