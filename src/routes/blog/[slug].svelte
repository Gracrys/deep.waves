<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style lang="sass">
	
	
	article
		max-width: 90%
		margin: auto

		figure
			float: left
			max-width: 30%
			margin: 0
			margin-right: 3rem
			h1
				line-height: 1
				font-size: 2rem
				font-weight: bold
			img
				width: 100%
			figcaption
				blockquote
					display: flex
					flex-wrap: wrap
					font-size: 0.8rem
					margin: 0
					i
						margin-right: 1rem


		@media screen and ( max-width: 820px )
			margin-bottom: 2rem
			figure	
				max-width: 100%
				border-bottom: 1px solid var(--text)
				width: 100%
				margin-bottom: 1rem
	

	.content :global(h2) 
		font-size: 1.4em
		font-weight: 500
	

	.content :global(pre) 
		background-color: #f9f9f9
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05)
		padding: 0.5em
		border-radius: 2px
		overflow-x: auto
	

	.content :global(pre) :global(code) 
		background-color: transparent
		padding: 0
	

	.content :global(ul) 
		line-height: 1.5
	

	.content :global(li) 
		margin: 0 0 0.5em 0
	
</style>

<svelte:head>
	<title>{post.title}</title>
	<meta property="og:title" content="{post.title}">
	<meta property="og:image" content="{post.img}">
	<meta property="og:description" content="{post.summary}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content="{post.img}" />
	<meta property="og:image:secure_url" content="{post.img}">
	<meta property="og:image:height" content="920">
	<meta property="og:image:width" content="920">
</svelte:head>

<article>

	<figure>

		<h1>{post.title}</h1>
		<img src="{post.img}" alt="">
		<figcaption>
			<blockquote>
			{#each post.tags as tag}
				<i>{tag}</i>
			{/each}
			</blockquote>
		</figcaption>
	</figure>

	<div class='content'>
		{@html post.html}
	</div>

</article>