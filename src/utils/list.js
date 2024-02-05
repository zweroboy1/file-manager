import fs from 'fs/promises';
import { FAILED_OPERATION_MESSAGE } from '../config.js';

const list = async (folder) => {
  try {
    const directoryData = await fs.readdir(folder, {
      withFileTypes: true,
    });

    const directoryList = directoryData
      .map((entry) => {
        const fileType = entry.isDirectory() ? 'directory' : 'file';
        return { Name: entry.name, Type: fileType };
      })
      .sort((a, b) => {
        const orderFactor = ['directory', 'file'];
        return (
          orderFactor.indexOf(a.Type) - orderFactor.indexOf(b.Type) ||
          a.Name.localeCompare(b.Name)
        );
      });

    return directoryList;
  } catch (error) {
    throw new Error(FAILED_OPERATION_MESSAGE);
  }
};

export { list };
