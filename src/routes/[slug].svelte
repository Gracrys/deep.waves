<script context="module">
	export async function preload({ params, query }) {
        const res = await this.fetch(`${params.slug}.json`)
        const content = await res.json()

        if (res.status === 200) {
            return { content };
		} else {
			this.error(res.status, content.message);
		}
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