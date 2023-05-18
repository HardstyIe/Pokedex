import { createClient } from '@urql/svelte';

export default createClient({
	url: 'https://beta.pokeapi.co/graphql/v1beta'
});
