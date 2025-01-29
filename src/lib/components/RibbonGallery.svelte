<script lang>
	import { browser } from '$app/environment';
	import NextIcon from '$lib/components/NextIcon.svelte';
	import PreviousIcon from '$lib/components/PreviousIcon.svelte';
	import { Image } from '@rodneylab/sveltekit-components';
	import { onMount } from 'svelte';

	let { data } = $props();

	let containerHeight = $state(0);
	let containerWidth = $state(0);

	let maxAspectRatio = $state(1.0);

	let aspectRatios = $derived(
		data.map((element) => {
			const { width, height } = element;
			const aspectRatio = width / height;
			if (aspectRatio > maxAspectRatio) {
				maxAspectRatio = aspectRatio;
			}
			return aspectRatio;
		}),
	);

	let height = $state(512);
	function calculateHeight() {
		if (containerHeight && containerWidth) {
			const maxHeight = containerHeight - 59;
			height =
				containerWidth / maxHeight < maxAspectRatio ? containerWidth / maxAspectRatio : maxHeight;
		}
	}

	onMount(() => {
		if (browser && document.lazyloadInstance) {
			document.lazyloadInstance.update();
			calculateHeight();
		}
	});

	let widths = $derived([
		...aspectRatios.map((element) => parseFloat((element * height).toFixed(2))),
	]);
	let sizes = $derived([...widths.map((element) => `${element}px`)]);
	let currentIndex = $state(0);
	let imageTitle = $derived(data[currentIndex].title);

	let imageCount = $derived(data.length);

	function advanceIndex() {
		currentIndex = (currentIndex + 1) % imageCount;
	}

	function regressIndex() {
		currentIndex = (currentIndex + imageCount - 1) % imageCount;
	}

	function prefersReducedMotion() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	function scrollToNextImage() {
		advanceIndex();
		if (prefersReducedMotion()) {
			document
				.getElementById(`image-${currentIndex + 1}`)
				.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'start' });
		} else {
			document
				.getElementById(`image-${currentIndex + 1}`)
				.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
		}
	}

	function scrollToPreviousImage() {
		regressIndex();
		if (prefersReducedMotion()) {
			document
				.getElementById(`image-${currentIndex + 1}`)
				.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'start' });
		} else {
			document
				.getElementById(`image-${currentIndex + 1}`)
				.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
		}
	}
</script>

<svelte:window onresize={calculateHeight} />
<div class="container" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
	<div class="ribbon">
		<section class="images">
			{#each data as { alt, src, sources, placeholder }, index}
				<div id={`image-${index + 1}`}>
					<Image
						{alt}
						width={widths[index]}
						{height}
						{src}
						{sources}
						{placeholder}
						sizes={sizes[index]}
						loading={index === 0 ? 'eager' : 'lazy'}
						importance={index === 0 ? 'high' : 'auto'}
						maxWidth="1280px"
					/>
				</div>
			{/each}
		</section>
	</div>
	<section class="info">
		<div class="controls">
			<span class="prev-next-button">
				<button
					onclick={() => {
						scrollToPreviousImage();
					}}><PreviousIcon /><span class="screen-reader-text">previous image</span></button
				></span
			>
			<p>{currentIndex + 1} of {imageCount}</p>
			<span class="prev-next-button">
				<button
					onclick={() => {
						scrollToNextImage();
					}}><NextIcon /><span class="screen-reader-text">next image</span></button
				></span
			>
		</div>
		<div class="title-text"><h1>{imageTitle}</h1></div>
	</section>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: calc(100vh - 7.12rem);
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}

	.ribbon {
		display: flex;
		width: 100%;
	}

	.images {
		display: flex;
		overflow: hidden;
	}

	.info {
		display: flex;
		align-items: center;
		margin: auto 1rem 1rem;
		color: #eef5db;
	}

	.info button {
		border-style: none;
		background: transparent;
	}

	.info p,
	.info h1 {
		margin-top: 0;
		margin-bottom: 0;
	}
	.info h1 {
		font-size: 1.563rem;
	}

	.controls {
		display: flex;
		align-items: center;
		padding-right: 0.5rem;
		width: max-content;
	}

	.controls .prev-next-button {
		display: flex;
		vertical-align: middle;
		color: #eef5db;
	}

	.controls button {
		color: #eef5db;
		padding: 0.75rem 0.5rem;
		cursor: pointer;
	}

	.screen-reader-text {
		border: 0;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		margin: -1px;
		width: 1px;
		overflow: hidden;
		position: absolute !important;
		word-wrap: normal !important;
	}
</style>
