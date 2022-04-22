<script>
  import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

  export let colour = undefined;
  export let label = 'next icon';
  export let width = 32;
  export let height = width;
  export let ariaHidden = false;

  const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

  addCollection({
    prefix: 'feather',
    icons: {
      'skip-forward': {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 4l10 8l-10 8V4zm14 1v14"/>',
      },
    },
    width: 24,
    height: 24,
  });

  // https://api.iconify.design/feather.json?icons=skip-forward
</script>

<Icon
  {id}
  aria-label={label}
  {ariaHidden}
  icon="feather:skip-forward"
  {width}
  {height}
  color={colour}
/>
