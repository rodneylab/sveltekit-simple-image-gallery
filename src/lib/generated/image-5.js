import meta from '$lib/assets/image-5.jpg?w=1280&as=meta:height;src;width';
import srcset from '$lib/assets/image-5.jpg?w=1280;640;320&format=jpeg&as=srcset';
import srcsetWebp from '$lib/assets/image-5.jpg?w=1280;640;320&format=webp&as=srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Picture os a person leaning forward into the cmaera arms raides and laughing.',
	title: 'Image 5',
	src,
	width,
	height,
	sources: [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset, type: 'image/jpeg' },
	],
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAAoSovK//EACQQAAEDAgQHAAAAAAAAAAAAAAEAAgMEERIhQWETFBUjUVKi/9oACAEBAAE/AKhkDGl5aXHFi3vsuWotS5TMkE7KaQdhpuJtRl6+V06+fE+Qv//EABcRAAMBAAAAAAAAAAAAAAAAAAACElH/2gAIAQIBAT8Ap9P/xAAZEQABBQAAAAAAAAAAAAAAAAADAAERISL/2gAIAQMBAT8AcYqzC//Z',
};

export { data as default };
