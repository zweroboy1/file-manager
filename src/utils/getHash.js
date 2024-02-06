import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';
import { getFullPath } from './getFullPath.js';

const getHash = async (filename) => {
  return new Promise(async (resolve, reject) => {
    const filePath = getFullPath(filename);
    const readStream = fs.createReadStream(filePath);
    const hash = createHash('sha256');
    try {
      await pipeline(readStream, hash);
      resolve(hash.digest('hex'));
    } catch {
      reject(new Error(`no such file - ${filePath}`));
    }
  });
};

export { getHash };
