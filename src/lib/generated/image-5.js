import meta from '$lib/assets/image-5.jpg?w=1280&metadata';
import srcset from '$lib/assets/image-5.jpg?w=1280;640;320&format=jpeg&srcset';
import srcsetWebp from '$lib/assets/image-5.jpg?w=1280;640;320&format=webp&srcset';

const { height, src, width } = meta;

const data = {
	alt: 'Picture os a person leaning forward into the cmaera arms raides and laughing.',
	title: 'Image 5',
	src,
	width,
	height,
	sources: [{ srcset: srcsetWebp, type: 'image/webp' },{ srcset, type: 'image/jpeg' }],
	placeholder: "data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAAqQovK//EACMQAAEDAgUFAAAAAAAAAAAAAAEAAgMEERITIUFhFBVRUqL/2gAIAQEAAT8AqGQMaXkFxxYub8LpqLcuUzJGzsppBeBpuJtxp6+V26+ub8hf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIRElH/2gAIAQIBAT8As+yf/8QAGREAAQUAAAAAAAAAAAAAAAAAAwABESEi/9oACAEDAQE/AHGKsQv/2Q=="
};
		
export { data as default };
			