import meta from '$lib/assets/image-2.jpg?w=1280&as=meta:height;src;width';
import srcset from '$lib/assets/image-2.jpg?w=1280;640;320&format=jpeg&as=srcset';
import srcsetWebp from '$lib/assets/image-2.jpg?w=1280;640;320&format=webp&as=srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Head and shoulder shot of a person laughing, facing the camera.',
	title: 'Image 2',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/9oADAMBAAIQAxAAAAAd7CtDo//EACEQAAECBgIDAAAAAAAAAAAAAAIAAQMEERITIiEjUWFy/9oACAEBAAE/AIU6WjUu1F3eqzh5ZSgvFCIXHUFxfHpZyZf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AxL//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIREv/aAAgBAwEBPwDCklR//9k=',
};

export { data as default };
