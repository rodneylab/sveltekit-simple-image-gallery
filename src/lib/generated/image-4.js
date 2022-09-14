import meta from '$lib/assets/image-4.jpg?w=1280&metadata';
import srcset from '$lib/assets/image-4.jpg?w=2560;1280;640;320&format=jpeg&srcset';
import srcsetWebp from '$lib/assets/image-4.jpg?w=2560;1280;640;320&format=webp&srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Head and shoulders shot of a person wiht a beach backdrop.  The person has their eyes closed and head tipped back, drinking the moment and smiling.',
	title: 'Image 4',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAC0x4f/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEEAxESFEFRU6H/2gAIAQEAAT8AGZQZ8LEQ87rVR+svF//EABgRAAIDAAAAAAAAAAAAAAAAAAEDABEi/9oACAECAQE/AA5lDU//xAAYEQACAwAAAAAAAAAAAAAAAAAAAxETMf/aAAgBAwEBPwCpc4f/2Q==',
};

export { data as default };
