<script lang="ts">
	import List from '$lib/components/List.svelte';
	import Search from '$lib/components/Search.svelte';

	let limit = 25;
	let offset = 0;
	let searchText = '';

	function onLoadMore() {
		offset += 15;
	}
</script>

<main class="w-full h-screen p-4">
	<section class="mb-20 text-center">
		<Search bind:value={searchText} />
		<button on:click={onLoadMore}>Load more..</button>
	</section>
	<section>
		<List {limit} {offset} {searchText} />
	</section>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.700);
	}
</style>
