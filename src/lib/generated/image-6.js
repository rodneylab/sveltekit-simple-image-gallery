import meta from '$lib/assets/image-6.jpg?w=1280&metadata';
import srcset from '$lib/assets/image-6.jpg?w=1280;640;320&format=jpeg&srcset';
import srcsetWebp from '$lib/assets/image-6.jpg?w=1280;640;320&format=webp&srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Upper body shot of a person, arms crossed with a neutral expression',
	title: 'Image 6',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMFBv/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAHHC0R//xAAeEAEAAgIBBQAAAAAAAAAAAAABABICA0IEBSEikf/aAAgBAQABPwDf3Hp7a6ZIcysN2CD6M2ZpTy2QGXwOT8n/xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8AdH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIx/9oACAEDAQE/AJcrT//Z',
};

export { data as default };
