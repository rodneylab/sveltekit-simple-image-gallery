import { makeDirectory } from './src/lib/utilities/file.js';
import { dominantColour, lowResolutionPlaceholder, metadata } from './src/lib/utilities/image.js';
import fs, { promises as fsp } from 'fs';
import path from 'path';

const __dirname = path.resolve();
const maxWidth = 1280;
const imagesSizes = [maxWidth];
const imageOutputSizes = [];
const imageDensities = [0.25, 0.5, 1.0, 2.0];
imagesSizes.forEach((sizesElement) => {
	imageDensities.forEach((densitiesElement) =>
		imageOutputSizes.push(densitiesElement * sizesElement),
	);
});
imageOutputSizes.sort((a, b) => b - a);

async function generateImageMeta(sourcePromise) {
	try {
		const source = await sourcePromise;
		const metaPromises = [
			metadata({ source }),
			dominantColour({ source }),
			lowResolutionPlaceholder({ source }),
		];
		const [metadataResult, dominantColourObject, placeholder] = await Promise.all(metaPromises);
		const { format, width, height } = metadataResult;
		const { r, g, b } = dominantColourObject;
		const dominantColourValue = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
		return {
			dominantColour: dominantColourValue,
			placeholder,
			format,
			width,
			height,
		};
	} catch (error) {
		console.error(`Error in generateImageMeta, generate-responsive-image-data.js: ${error}`);
	}
}

async function generateGalleryData() {
	try {
		const fileData = await fsp.readFile('./src/lib/data/image.json');
		const images = JSON.parse(fileData);
		const imageMetaPromises = images.map(async (element) =>
			generateImageMeta(`./src/lib/assets/${element.filename}`),
		);
		const imageMeta = await Promise.all(imageMetaPromises);
		await makeDirectory('./src/lib/generated');
		imageMeta.forEach((element, index) => {
			const { alt, filename, title } = images[index];
			const { placeholder, width } = element;
			const imageSizesString = imageOutputSizes
				.filter((imageElement) => imageElement <= width)
				.join(';');
			const meta = `import meta from '$lib/assets/${filename}?w=${maxWidth}&as=meta:height;src;width';`;
			const srcset = `import srcset from '$lib/assets/${filename}?w=${imageSizesString}&format=jpeg&as=srcset';`;
			const srcsetWebp = `import srcsetWebp from '$lib/assets/${filename}?w=${imageSizesString}&format=webp&as=srcset';`;
			const metadata = `\nconst { height, src, width } = meta;`;
			const exportStatement = `
const data = {
	alt: '${alt.replace(/'/g, "\\'")}',
	title: '${title.replace(/'/g, "\\'")}',
	src,
	width,
	height,
	sources: [{ srcset: srcsetWebp, type: 'image/webp' },{ srcset, type: 'image/jpeg' }],
	placeholder: "${placeholder}"
};
		
export { data as default };
			`;

			const result = [meta, srcset, srcsetWebp, metadata, exportStatement].join('\n');
			fs.writeFileSync(
				path.join(__dirname, `src/lib/generated/${filename.split('.')[0]}.js`),
				result,
				'utf-8',
			);
		});
	} catch (error) {
		console.error(`Error in generate-responsive-image-data: ${error}`);
	}
}

generateGalleryData();
