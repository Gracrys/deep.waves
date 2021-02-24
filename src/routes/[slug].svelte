<script context="module">
import { onMount } from 'svelte';

	export async function preload({ params, query }) {
        const res = await this.fetch(`${params.slug}.json`)
        const content = await res.json()
				console.log(params.slug)
        if (res.status === 200) {
        	 // await this.redirect(200 , params.slug)
					// return this.redirect(200, params.slug) ;
            return  { content };
		} else {

			this.error(res.status, content.message);
		}
    }
</script>

<script>
    export let content;
  
import { goto } from '@sapper/app';
// function async go(x){
// 	console.log(x.target.a)
// }	
	import Article from "../components/Article.svelte"

		let {posts, actualTag} = content 
</script>


<style lang="sass">
h1
	font-family: Lustria
	max-width: calc(90% + 2rem)
	font-weight: bold
	margin: auto
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

<h1> { actualTag[0].name }</h1>
<section>
		{#each posts as post}
			<Article { post } />
		{/each}
</section>