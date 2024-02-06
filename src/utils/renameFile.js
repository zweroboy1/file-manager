import fs from 'fs';
import path from 'path';
import { getFullPath } from './getFullPath.js';

const renameFile = async (srcPath, dstFilename) => {
  return new Promise(async (resolve, reject) => {
    try {
      const srcFilenamePath = getFullPath(srcPath);
      await fs.promises.access(srcFilenamePath);
      const dstFilenamePath = path.join(
        path.dirname(srcFilenamePath),
        path.basename(dstFilename)
      );

      try {
        await fs.promises.access(dstFilenamePath, fs.constants.F_OK);
        throw new Error(`File already exists at ${dstFilenamePath}`);
      } catch (error) {
        if (error.code === 'ENOENT') {
          await fs.promises.rename(srcFilenamePath, dstFilenamePath);
          resolve(dstFilenamePath);
        } else {
          throw error;
        }
      }
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export { renameFile };
