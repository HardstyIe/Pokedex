<script>
	async function getAllNames() {
		let url = 'https://pokeapi.co/api/v2/pokemon/?limit=1008';
		let response = await fetch(url);
		let responseAsJson = await response.json();

		for (let i = 0; i < responseAsJson.results.length; i++) {
			pokemons.push({
				id: i + 1,
				name: responseAsJson.results[i].name,
				types: []
			});
		}

		getAllTypes();
	}

	/**fetch pokemon types */
	async function getAllTypes() {
		for (let i = 0; i < 18; i++) {
			let url = 'https://pokeapi.co/api/v2/type/' + (i + 1);
			let response = await fetch(url);
			let responseAsJson = await response.json();

			const pokemonInType = responseAsJson.pokemon;

			for (j = 0; j < pokemonInType.length; j++) {
				const pokemonId = pokemonInType[j].pokemon.url
					.replace('https://pokeapi.co/api/v2/pokemon/', '')
					.replace('/', '');

				if (pokemonId <= pokemons.length && pokemons[pokemonId]) {
					pokemons[pokemonId].types.push(responseAsJson.name);
				}
			}
		}
	}
</script>

<main class="flex w-full h-screen">
	<section>
		<div class="search">search</div>
		<div class="card">card</div>
	</section>
	<section>
		<!-- <Details /> -->
	</section>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.700);
	}
</style>
