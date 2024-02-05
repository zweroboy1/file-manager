import path from 'path';

const chdir = async (folder) => {
  const currentDirectory = process.cwd();

  const fullPath = path.isAbsolute(folder)
    ? folder
    : path.join(currentDirectory, folder);
  const resultPath = path.normalize(fullPath);
  try {
    process.chdir(resultPath);
  } catch {
    throw new Error(`no such directory - ${resultPath}`);
  }
};

export { chdir };
