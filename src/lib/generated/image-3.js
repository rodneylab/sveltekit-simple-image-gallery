import meta from '$lib/assets/image-3.jpg?w=1280&as=meta:height;src;width';
import srcset from '$lib/assets/image-3.jpg?w=1280;640;320&format=jpeg&as=srcset';
import srcsetWebp from '$lib/assets/image-3.jpg?w=1280;640;320&format=webp&as=srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Head and shoulders shot of two people, one kissing the other on the cheek while the other smiles.',
	title: 'Image 3',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKZ1Tgq//8QAIxAAAgECBAcAAAAAAAAAAAAAAQIDAAQREhMiFSFBU2GR4f/aAAgBAQABPwC1ubhLYpKRhJEXVCMpU+K1Xfe0D5m3HnU7R5NeRcWSQBT0QVxCXtt7+1//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/ANpn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQASQf/aAAgBAwEBPwBqZP/Z',
};

export { data as default };
