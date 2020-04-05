<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';

	export let segment;
	 let open;

	let toggleMenu = e => open = e.detail.open
</script>

<style lang="sass" global>
	@import "../sass/app.sass"
	
</style>

<Nav {segment} {open}/>

<main>
	<Header on:open={toggleMenu}></Header>
	<slot></slot>
</main>