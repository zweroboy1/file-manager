import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { copyFile } from '../utils/copyFile.js';
import { deleteFile } from '../utils/deleteFile.js';

const executeMv = async (params) => {
  if (params.length < 2) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `mv command should have 2 parameters, ex. "mv file1.txt file2.txt`
    );
    return;
  }

  try {
    const moveFilePath = await copyFile(params[0], params[1]);
    await deleteFile(params[0]);
    showResultMessage('File was moved to', moveFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeMv };
