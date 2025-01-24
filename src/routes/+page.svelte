<script>
	import { browser } from '$app/environment';
	import RibbonGallery from '$lib/components/RibbonGallery.svelte';
	import '$lib/styles/global.css';
	import '@fontsource/inter/latin.css';
	import { onMount } from 'svelte';
	import lazyload from 'vanilla-lazyload';

	/** @type {{import('./$types').PageData}} */
	let { data } = $props();

	onMount(() => {
		if (browser) {
			document.lazyloadInstance = new lazyload();
		}
	});

	// import image data for caching images
	(async () => {
		import.meta.glob('../lib/generated/*.js');
	})();
</script>

<svelte:head>
	<title>Basic Responsive Ribbon Gallery</title>
	<meta
		name="description"
		content="Demo site for basic responsive image library with a ribbon layout"
	/>
</svelte:head>

<div class="container">
	<header class="header"><h1>Basic Responsive Ribbon Gallery</h1></header>
	<main><RibbonGallery data={data.data} /></main>
</div>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
	}

	.header {
		background: #01200f;
		color: #eef5db;
		font-weight: 900;
		padding: 1rem 1.5rem;
	}
</style>
