import fs from 'fs/promises';
import { getFullPath } from './getFullPath.js';
import { showResultMessage } from '../modules/showResultMessage.js';

const createFile = async (filename) => {
  const filePath = getFullPath(filename);

  try {
    await fs.writeFile(filePath, '');
    showResultMessage('Success', `file ${filePath} is created!`);
  } catch (error) {
    throw new Error(error.message);
  }
};
export { createFile };
