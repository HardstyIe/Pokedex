<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';

	export let status: allPokemonsQuery$result['pokemon_v2_pokemon'][0]['pokemon_v2_pokemonstats'];
</script>

<h1 class="flex justify-center">Stats</h1>
<div class="flex m-auto stats-info">
	<div>
		<div class="mr-4 stats-hp">HP</div>
		<div class="mr-4 stats-hp">{status[0].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-atk">ATK</div>
		<div class="mr-4 stats-atk">{status[1].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-def">DEF</div>
		<div class="mr-4 stats-def">{status[2].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-speA">SpA</div>
		<div class="mr-4 stats-speA">{status[3].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-speD">SpD</div>
		<div class="mr-4 stats-speD">{status[4].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-speed">SPD</div>
		<div class="mr-4 stats-speed">{status[5].base_stat}</div>
	</div>

	<div>
		<div class="mr-4 stats-total">TOT</div>
		<div class="mr-4 stats-total">
			{status.reduce((previous, current) => {
				return previous + current.base_stat;
			}, 0)}
		</div>
	</div>
</div>
