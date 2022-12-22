<script>
	/**
	 * @type {{ background_image: any; name: any; rating: any; playtime: any; }}
	 */
	export let game;
</script>

<div class="game-card">
	<img src={game.background_image} alt={game.name} />
	<div>
		<h2>{game.name}</h2>
		<p>Rating : {game.rating}</p>
		<p>Play Time : {game.playtime} hrs</p>
	</div>
</div>

<style>
	h2 {
		font-size: 0.9rem;
	}

	p {
		font-size: 0.7rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
	.game-card {
		border: 1px solid #ddd;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
