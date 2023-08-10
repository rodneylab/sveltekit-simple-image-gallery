import meta from '$lib/assets/image-6.jpg?w=1280&as=meta:height;src;width';
import srcset from '$lib/assets/image-6.jpg?w=1280;640;320&format=jpeg&as=srcset';
import srcsetWebp from '$lib/assets/image-6.jpg?w=1280;640;320&format=webp&as=srcset';

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
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAABxw18f/8QAIBABAAEDAwUAAAAAAAAAAAAAARIAAgMEBSERIkKBkf/aAAgBAQABPwDPuOnnjhch0ZkaMtiD2vusl/NnLJAanYeT8r//xAAXEQEAAwAAAAAAAAAAAAAAAAABABIx/9oACAECAQE/AGzk/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgABMf/aAAgBAwEBPwAo1s//2Q==',
};

export { data as default };
