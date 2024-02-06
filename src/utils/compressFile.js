import fs from 'fs';
import { createBrotliCompress } from 'zlib';
import { getFullPath } from './getFullPath.js';

const compressFile = async (srcFile, archiveFile) => {
  return new Promise(async (resolve, reject) => {
    const srcFilePath = getFullPath(srcFile);
    const archiveFilePath = getFullPath(archiveFile);

    try {
      const compressStream = createBrotliCompress();
      await fs.promises.access(srcFilePath, fs.constants.F_OK);
      const readStream = fs.createReadStream(srcFilePath);
      const writeStream = fs.createWriteStream(archiveFilePath);
      readStream.pipe(compressStream).pipe(writeStream);
      resolve(archiveFilePath);
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export { compressFile };
