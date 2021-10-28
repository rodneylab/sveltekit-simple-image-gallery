import meta from '$lib/assets/image-3.jpg?w=1280&metadata';
import srcset from '$lib/assets/image-3.jpg?w=1280;640;320&format=jpeg&srcset';
import srcsetWebp from '$lib/assets/image-3.jpg?w=1280;640;320&format=webp&srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Head and shoulders shot of two people, one kissing the other on the cheek while the other smiles.',
	title: 'Image 3',
	src,
	width,
	height,
	sources: [{ srcset: srcsetWebp, type: 'image/webp' },{ srcset, type: 'image/jpeg' }],
	placeholder: "data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALwVNGr/xAAiEAACAQMCBwAAAAAAAAAAAAABAgMABCIRExIVQVNhgeH/2gAIAQEAAT8AtLm4W2KykaSxF1QjhKnxW9M+Zt3JbI5Gp2jKb8iklHAU9EFcwl7ZPv7X/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAgEBPwDaZ//EABcRAQADAAAAAAAAAAAAAAAAAAEAEkH/2gAIAQMBAT8AamT/2Q=="
};
		
export { data as default };
			