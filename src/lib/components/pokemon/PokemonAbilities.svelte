<script lang="ts">
	import type { allPokemonsQuery$result } from '$houdini';

	export let abilities: allPokemonsQuery$result['pokemon_v2_pokemon'][0]['pokemon_v2_pokemonabilities'];
</script>

<h1 class="text-center">Talents</h1>
<div class="flex justify-around w-full">
	{#each abilities as ability}
		{#if ability.pokemon_v2_ability}
			{#each ability.pokemon_v2_ability.pokemon_v2_abilitynames as abilityname}
				<p class="">{abilityname.name}</p>
			{/each}
		{/if}
	{/each}
</div>
