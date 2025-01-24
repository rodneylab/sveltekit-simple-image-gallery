<script lang="ts">
	let {
		colour = undefined,
		label = 'previous',
		width = 16,
		height = width,
		ariaHidden = false,
	}: {
		colour?: string | undefined;
		label?: string;
		width?: number;
		height?: number;
		ariaHidden?: boolean;
	} = $props();
</script>

<div class="logo">
	<svg
		aria-label={label}
		aria-hidden={ariaHidden}
		role="img"
		{width}
		{height}
		viewBox="0 0 24 24"
		fill={colour}
	>
		<use href="/sprite.svg#previous" />
	</svg>
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
	}
</style>
