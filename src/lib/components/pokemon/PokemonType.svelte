<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';
	import { typeColors } from '$lib/typeColor';

	export let type: allPokemonsQuery$result['pokemon_v2_pokemon'][0]['pokemon_v2_pokemontypes'][0];
</script>

{#if type.pokemon_v2_type?.name}
	<p class="p-2 rounded-xl" style="background-color:{typeColors[type.pokemon_v2_type?.name]};">
		{type.pokemon_v2_type?.pokemon_v2_typenames[0].name}
	</p>
{/if}
