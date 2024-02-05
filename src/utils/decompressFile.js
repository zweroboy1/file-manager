import fs from 'fs';
import { createBrotliDecompress } from 'zlib';
import { getFullPath } from './getFullPath.js';

const decompressFile = async (archiveFile, targetFile) => {
  return new Promise(async (resolve, reject) => {
    const archiveFilePath = getFullPath(archiveFile);
    const targetFileFilePath = getFullPath(targetFile);

    try {
      const decompressStream = createBrotliDecompress();
      await fs.promises.access(archiveFilePath, fs.constants.R_OK);
      const readStream = fs.createReadStream(archiveFilePath);
      const writeStream = fs.createWriteStream(targetFileFilePath);
      readStream.pipe(decompressStream).pipe(writeStream);
      resolve(archiveFilePath);
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export { decompressFile };
