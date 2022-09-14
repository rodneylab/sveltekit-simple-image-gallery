import { promises as fsp } from 'fs';

export async function makeDirectory(directoryPath) {
	return fsp.mkdir(directoryPath, { recursive: true });
}
