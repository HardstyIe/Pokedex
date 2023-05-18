<script>
	export let pokemon;

	const typeColors = {
		normal: '#BCBCAC',
		fighting: '#BC5442',
		flying: '#669AFF',
		poison: '#AB549A',
		ground: '#DEBC54',
		rock: '#BCAC66',
		bug: '#ABBC1C',
		ghost: '#6666BC',
		steel: '#ABACBC',
		fire: '#FF421C',
		water: '#2F9AFF',
		grass: '#78CD54',
		electric: '#FFCD30',
		psychic: '#FF549A',
		ice: '#78DEFF',
		dragon: '#7866EF',
		dark: '#785442',
		fairy: '#FFACFF',
		shadow: '#0E2E4C'
	};
</script>

<div class="relative flex flex-col items-center w-1/5 pt-10 rounded-2xl bg-slate-400">
	<img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
		alt="Photo de {pokemon.name}"
		class="absolute -top-14"
	/>
	<div class="relative flex flex-col items-center bottom-6">
		<p class="">N°{pokemon.id}</p>
		<h1 class="m-2">{pokemon.name}</h1>
		<div class="flex gap-2">
			{#each pokemon.pokemon_v2_pokemontypes as type}
				<p class="">{type.pokemon_v2_type.name}</p>
			{/each}
		</div>
	</div>
</div>
