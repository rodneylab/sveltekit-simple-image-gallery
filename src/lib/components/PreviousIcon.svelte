<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let colour = undefined;
	export let label = 'previous icon';
	export let width = 32;
	export let height = width;
	export let ariaHidden = false;

	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'feather',
		icons: {
			'skip-back': {
				body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20L9 12l10-8v16zM5 19V5"/>',
			},
		},
		width: 24,
		height: 24,
	});

	// https://api.iconify.design/feather.json?icons=skip-back
</script>

<Icon
	{id}
	aria-label={label}
	{ariaHidden}
	icon="feather:skip-back"
	{width}
	{height}
	color={colour}
/>
