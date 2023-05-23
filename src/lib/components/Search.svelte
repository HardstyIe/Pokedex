<script lang="ts">
	export let value = '';

	const onKeydown = debounce(updateValue, 750);

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
	}
</script>

<input
	type="text"
	class="w-3/5 p-2 px-4 rounded-lg"
	placeholder="Search your pokemon"
	on:keydown={onKeydown}
/> <i class="-ml-8 fa fa-search" />
