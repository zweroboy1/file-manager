import path from 'path';

const getFullPath = (inputPath) => {
  const currentDirectory = process.cwd();

  const fullPath = path.isAbsolute(inputPath)
    ? inputPath
    : path.join(currentDirectory, inputPath);
  const resultPath = path.normalize(fullPath);
  return resultPath;
};

export { getFullPath };
