import { makeDirectory } from './file.js';
import fs, { promises as fsp } from 'fs';
import path from 'path';
import sharp from 'sharp';

export const IMAGE_DIR = '/src/lib/assets/';
export const IMAGE_PUBLIC_DIR = '/assets/';

export const dominantColour = async ({ source }) => {
	try {
		const image = sharp(source);
		const { dominant } = await image.stats();
		return dominant;
	} catch (error) {
		console.error(`Error determining dominant colour (${error}): `, source);
	}
};

export const getImage = async ({ sourceUrl }) => {
	const startIndex = sourceUrl.indexOf('/uploads/') + 9;
	const folders = path.dirname(sourceUrl.slice(startIndex));
	const filename = path.basename(sourceUrl);
	const __dirname = path.resolve();
	const destinationDirectory = path.join(__dirname, IMAGE_DIR, folders);
	await makeDirectory(destinationDirectory);

	const destinationPath = path.join(destinationDirectory, filename);

	const downloadImage = async () => {
		const response = await fetch(sourceUrl, {
			method: 'GET',
		});
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		await fsp.writeFile(destinationPath, buffer);
	};

	if (!fs.existsSync(destinationPath)) {
		await downloadImage();
	}
	return destinationPath;
};

export const lowResolutionPlaceholder = async ({ source }) => {
	try {
		const image = sharp(source);
		const buffer = await image
			.resize(10)
			.jpeg({
				quality: 50,
				progressive: true,
				optimiseScans: true,
				chromaSubsampling: '4:2:0',
				trellisQuantisation: true,
				quantisationTable: 2,
			})
			.toBuffer({ resolveWithObject: false });
		return `data:image/jpeg;base64,${(await buffer).toString('base64')}`;
	} catch (error) {
		console.error(`Error generating low resolution placeholder (${error}): `, source);
	}
};

export const metadata = async ({ source }) => {
	try {
		const image = sharp(source);
		const { format, height, width } = await image.metadata();
		return { format, height, width };
	} catch (error) {
		console.error(`Error determining image meta: (${error})`, source);
	}
};
