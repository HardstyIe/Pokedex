<script lang="ts">
	import List from '$lib/components/List.svelte';
	import Search from '$lib/components/Search.svelte';
	let limit = 20;
	let offset = 0;
	let searchText = '';
</script>

<main class="w-full h-screen p-4">
	<!-- <section>
		<Nav />
	</section> -->
	<section class="mt-5 mb-20 text-center">
		<Search bind:value={searchText} />
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
