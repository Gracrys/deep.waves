<script lang="typescript">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher();

	function toggleMenu() {

		open = !open
		dispatch('open', {
			open
		});
	}
	export let open : Boolean = false;
</script>

<style lang="sass">
.header
	max-width: 90%
	margin: 1rem auto 
	display: flex
	justify-content: space-between
	width: 100%
	align-items: center
	a.logo-over
		width: 70px
		transition: width 0.6s
		&.open
			visibility: hidden
			width: 0
			overflow: hidden
			position: absolute
		img
			width: 100%
	dialog
		max-height: 35px
		padding: 0 0.6rem
		height: 100%
		width: 70%
		background-image:  linear-gradient(to bottom, #333 0%, #333 1%,#fff0 100%)
		background: #232323
		display: block
		border: none
		border-radius: 2px
		display: flex
		place-content: center
		flex-direction: column
		position: relative
		margin: 0
		transition: width 0.6s
		&.open
			width: 90%
		h2
			text-align: center
			font-family: Lustria
			color: var(--text)
			margin: 0
	button.menu
		width: 50px
		max-width: 50px
		min-width: 50px
		background: transparent
		border: none
		display: flex
		align-items: center
		cursor: pointer
	@media screen and (max-width: 830px)
		dialog
			position: fixed
			width: 90%
			margin: auto
			bottom: 0
			&.open
				display: none
					

</style>

<header class="header">
	<a href="" class="logo-over" class:open><img src="iceberg.png" alt="logo" class="logo" ></a>
	<dialog class:open>
		<h2>Welcome...</h2>
	</dialog>
	<button class="menu btn" id="menu-btn" on:click={toggleMenu}>
		<img src="/icons/menu.svg" alt="menu">
	</button>
</header>