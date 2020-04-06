<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`${params.slug}.json`).then(r => r.json()).then(content => {
            
			return {content};
        });
    }
</script>

<script>
    import Article from "../components/Article.svelte"


    export let content;
    let {posts, actualTag} = content
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
	<title>Deep.Waves - { actualTag[0].name }</title>
</svelte:head>

<section>

{#each posts as post}
	<Article { post } />
{/each}

</section>