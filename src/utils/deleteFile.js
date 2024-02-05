import fs from 'fs';
import { getFullPath } from './getFullPath.js';

const deleteFile = async (filename) => {
  return new Promise(async (resolve, reject) => {
    const filePath = getFullPath(filename);
    try {
      await fs.promises.unlink(filePath);
      resolve(filePath);
    } catch {
      reject(new Error(`no such file - ${filePath}`));
    }
  });
};

export { deleteFile };
