<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Article from "../components/Article.svelte"
	export let posts;

	let scrollH = (e) => {
		if(e.type != 'wheel')
		{
			return;
		}
		let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
		delta = delta * (-100);
		document.querySelector("section.svelte-6s3vya").scrollLeft -= delta;    

		e.preventDefault();
	}
</script>


<style lang="sass">
section
	display: flex
	max-width: calc(90% + 4rem)
	margin: auto
	overflow: hidden
	overflow-x: scroll
	scrollbar-color: var(--sky) var(--bg)
	scrollbar-width: thin
	@media screen and ( max-width: 820px )
		flex-direction: column
		height: auto
</style>



<svelte:head>
	<title>Deep.Waves</title>
</svelte:head>

<section on:wheel={scrollH}>
		{#each posts as post}
			<Article { post } />
		{/each}
</section>