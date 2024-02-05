import fs from 'fs';
import { getFullPath } from './getFullPath.js';

const read = (filename) => {
  return new Promise((resolve, reject) => {
    const filePath = getFullPath(filename);

    const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      resolve(chunk);
    });

    readableStream.on('error', () => {
      reject(new Error(`no such file - ${filePath}`));
    });
  });
};

export { read };
