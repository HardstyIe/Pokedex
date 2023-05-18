<script>
	import { operationStore, query, setClient } from '@urql/svelte';
	import client from '../../client';
	import Card from '../lib/components/Card.svelte';
	import Search from '../lib/components/Search.svelte';
	setClient(client);

	const currentPost = operationStore(
		`
    
  `
	);

	query(currentPost);
</script>

<main class="flex w-full h-screen">
	<section class="flex flex-wrap w-3/5 mt-11">
		<Search />
		<div class="flex w-1/5 poke-wrapper h-fit">
			<Card />
		</div>
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
