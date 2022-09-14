import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		const images = import.meta.glob('../lib/generated/*.js');
		const imageDataPromises = Object.keys(images).map((path) => images[path]());
		const imageData = await Promise.all(imageDataPromises);
		const imageDataArray = imageData.map((element) => element.default);

		return {
			data: imageDataArray,
		};
	} catch (err) {
		console.error('Error: ', err);
		throw error(500, `Error in index.js data retrieval: ${err}`);
	}
}
