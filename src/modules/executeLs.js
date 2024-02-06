import { showResultMessage } from './showResultMessage.js';
import { showErrorMessage } from './showErrorMessage.js';
import { list } from '../utils/list.js';

const executeLs = async () => {
  const currentDirectory = process.cwd();
  showResultMessage('Directory list', currentDirectory);
  const directoryList = await list(currentDirectory);
  if (!directoryList.length) {
    showErrorMessage('The directory is empty!');
    return;
  }
  console.table(directoryList);
};

export { executeLs };
