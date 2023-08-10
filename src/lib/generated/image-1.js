import meta from '$lib/assets/image-1.jpg?w=1280&as=meta:height;src;width';
import srcset from '$lib/assets/image-1.jpg?w=1280;640;320&format=jpeg&as=srcset';
import srcsetWebp from '$lib/assets/image-1.jpg?w=1280;640;320&format=webp&as=srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Profile headshot of person laughing.',
	title: 'Image 1',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAlsHl5N//xAAgEAACAgEEAwEAAAAAAAAAAAABAgMRAAQSIjETIUFh/9oACAEBAAE/ADN4YCuzc3u0Nr3kcauiOBQZQwGPpTPPFIz8AGfaB0B+4F1VCkWvnLP/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIx/9oACAECAQE/ABbA7P/EABcRAQEBAQAAAAAAAAAAAAAAAAECACH/2gAIAQMBAT8AsmVDm//Z',
};

export { data as default };
