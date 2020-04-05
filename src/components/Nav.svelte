<script>
	// export let segment;
	export let open = false;
	$: console.log(open)
</script>

<style lang="sass">

header
	width: 100%
	h2
		font-weight: bold
	.logo
		width: 80px
		margin: auto
	.logo-over
		display: flex
		flex-direction: column
		align-items: center
		text-align: center
		text-decoration: none
		color: var(--sky)
		> i
			margin: 1rem 0
			width: 80%

.sidebar-menu
	padding: 1rem
	width: 20vw
	height: 100vh
	position: relative
	margin-left: -20vw
	background: #0D0D0D
	transition: margin 0.6s
	&.open
		margin-left: 0
	> nav ul
		display: flex
		flex-direction: column
		align-items: center
		padding: 0
		> li
			margin 2rem 0

	@media screen and ( max-width: 820px )
		width: 240px
		min-width: 180px
		margin-left: calc(-240px - 2rem)
		&.open
			margin-left: 0 
</style>



<aside class="sidebar-menu" class:open>
	<header>
		<a href="" class="logo-over">
			<img src="/iceberg.png" alt="logo" class="logo">
			<h2>deep waves</h2>
			<i>Going deep into the iceberg of the music...</i>
		</a>
	</header>

	<nav>
		<ul>
			<a href="">#popo</a>
			<a href="">#pipi</a>
			<a href="">#caca</a>

			<!-- <li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
			<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<!-- <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
		</ul>
	</nav>

</aside>