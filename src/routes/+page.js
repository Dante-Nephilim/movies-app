/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`https://api.rawg.io/api/games?key=7efc34af4c854b8188f6d86e8f8a14a4`);
	const data = await res.json();
	if (res.ok) {
		console.log(data.results);
		return {
			props: { games: data.results }
		};
	}
}
