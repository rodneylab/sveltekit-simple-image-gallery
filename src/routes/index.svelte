<script>
  import { browser } from '$app/env';
  import RibbonGallery from '$lib/components/RibbonGallery.svelte';
  import '@fontsource/inter/latin.css';
  import { onMount } from 'svelte';
  import lazyload from 'vanilla-lazyload';

  export let data;

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
  <html lang="en-GB" />
  <meta
    name="description"
    content="Demo site for basic responsive image library with a ribbon layout"
  />
</svelte:head>

<div class="container">
  <header class="header"><h1>Basic Responsive Ribbon Gallery</h1></header>
  <main><RibbonGallery {data} /></main>
</div>

<style>
  :global(html) {
    font-family: Inter;
    background: #006e90;
    min-height: 100vh;
  }

  :global(body) {
    margin: 0;
  }

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
