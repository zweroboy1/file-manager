import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { renameFile } from '../utils/renameFile.js';

const executeRn = async (params) => {
  if (params.length < 2) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `rn command should have 2 parameters, ex. "rn file1.txt file2.txt`
    );
    return;
  }

  try {
    const renamedFilePath = await renameFile(params[0], params[1]);
    showResultMessage('File was renamed to', renamedFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeRn };
