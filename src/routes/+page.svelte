<script>
	import Details from '$lib/components/Details.svelte';
	import Search from '$lib/components/Search.svelte';
	import { onMount } from 'svelte';
	import Card from '../lib/components/Card.svelte';
	let pokemons = [];

	onMount(callApi);
	function callApi() {
		fetch('https://beta.pokeapi.co/graphql/v1beta', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
          query samplePokeAPIquery {
  pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {pokemon_v2_evolutionchain: {pokemon_v2_pokemonspecies: {pokemon_v2_pokemonspeciesnames: {language_id: {_eq: 5}}}}}}, limit: 1008) {
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
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
        pokemon_v2_abilitynames(where: {language_id: {_eq: 5}}) {
          name
        }
      }
    }
    weight
    name
  }
  pokemon_v2_pokemonspeciesflavortext(where: {language_id: {_eq: 5}}) {
    flavor_text
  }
}
        `
			}),
			variable: {
				now: new Date().toISOString()
			}
		})
			.then((res) => res.json())
			.then((result) => {
				pokemons = result.data.pokemon_v2_pokemon;
				console.log('🚀 ~ file: +page.svelte:61 ~ .then ~ pokemons:', pokemons);
			});
	}
</script>

<main class="flex w-full h-screen">
	<section class="flex flex-wrap w-3/5 mt-11">
		<Search />
		<div class="flex flex-wrap w-full gap-8">
			{#each pokemons as pokemon}
				<Card {pokemon} />
			{/each}
		</div>
	</section>
	<section>
		{#each pokemons as pokemon}
			<Details {pokemon} />
		{/each}
	</section>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.700);
	}
</style>
