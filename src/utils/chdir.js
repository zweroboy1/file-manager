import { getFullPath } from './getFullPath.js';

const chdir = async (folder) => {
  const fullPath = getFullPath(folder);
  try {
    process.chdir(fullPath);
  } catch {
    throw new Error(`no such directory - ${fullPath}`);
  }
};

export { chdir };
