<script lang="ts">
	export let value = '';
	import { type allPokemonsQuery$result } from '$houdini';
	type Pokemon = allPokemonsQuery$result['pokemon_v2_pokemon'][0];
	const onKeydown = debounce(updateValue, 750);
	export let pokemon: allPokemonsQuery$result['pokemon_v2_pokemon'][0];
	export let searchText: string = '';
	function debounce(func: (...args: any) => void, timeout = 300) {
		let timer: NodeJS.Timeout;
		return (...args: any) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				// @ts-ignore
				func.apply(this, args);
			}, timeout);
		};
	}

	function updateValue(event: KeyboardEvent) {
		// @ts-ignore
		value = event.target!.value;
		if (searchText == '') {
			return pokemon;
		}
	}
</script>

<input
	type="text"
	class="w-4/5 p-2 px-4 rounded-lg"
	placeholder="Search your pokemon"
	on:keydown={onKeydown}
/>
<i class="-ml-8 fa fa-search" />
