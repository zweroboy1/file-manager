import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { getFullPath } from './getFullPath.js';

const copyFile = async (srcFilename, targetDirectory) => {
  return new Promise(async (resolve, reject) => {
    try {
      const srcFilenamePath = getFullPath(srcFilename);
      const dstFilenamePath = path.join(
        getFullPath(targetDirectory),
        path.basename(srcFilenamePath)
      );
      await fs.promises.access(srcFilenamePath);
      try {
        await fs.promises.access(dstFilenamePath);
        throw new Error(`File already exists at ${dstFilenamePath}`);
      } catch (error) {
        if (error.code === 'ENOENT') {
          const readableStream = fs.createReadStream(srcFilenamePath, {
            encoding: 'utf8',
          });
          await fs.promises.mkdir(path.dirname(dstFilenamePath), {
            recursive: true,
          });
          const writeStream = fs.createWriteStream(dstFilenamePath, {
            encoding: 'utf8',
          });

          try {
            await pipeline(readableStream, writeStream);
          } catch (error) {
            throw new Error(error);
          }
          resolve(dstFilenamePath);
        } else {
          throw error;
        }
      }
    } catch (error) {
      reject(new Error('impossible paths'));
    }
  });
};

export { copyFile };
