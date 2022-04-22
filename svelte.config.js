import { imagetools } from 'vite-imagetools';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { default: true },
    vite: {
      plugins: [imagetools({ force: true })],
    },
  },
};

export default config;
