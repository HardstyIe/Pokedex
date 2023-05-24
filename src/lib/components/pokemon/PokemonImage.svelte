<script lang="ts">
	export let id: number;
</script>

{#if id >= 650}
	<img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/{id}.png"
		alt="Image de {id}"
		class="absolute -top-14 h-28"
	/>
{:else}
	<img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/{id}.gif"
		alt="Image de {id}"
		class="absolute -top-14 h-28"
	/>
{/if}
