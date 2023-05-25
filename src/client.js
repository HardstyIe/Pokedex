import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'https://beta.pokeapi.co/graphql/v1beta'

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
