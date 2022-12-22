<script>
	import GameCard from './GameCard.svelte';

	/**
	 * @type {any}
	 */
	export let games;
	console.log(games);
</script>

<h1>Games</h1>
<div class="games">
	{#each games as game}
		<GameCard {game} />
	{/each}
</div>

<style>
	h1 {
		padding: 0 1rem;
	}
	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
	}
</style>
