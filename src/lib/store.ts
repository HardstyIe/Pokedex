import type { allPokemonsQuery$result } from '$houdini';
import { writable } from 'svelte/store';

export const status =
	writable<allPokemonsQuery$result['pokemon_v2_pokemon'][0]['pokemon_v2_pokemonstats']>();
