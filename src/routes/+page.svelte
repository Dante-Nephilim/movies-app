<script>
	/** @type {import('./$types').PageData} */
	import Games from '../components/Games.svelte';
	/**
	 * @type {any}
	 */
	export let data;
</script>

<section>
	<Games games={data.props.games} />
</section>
