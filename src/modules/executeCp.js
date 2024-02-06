import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { copyFile } from '../utils/copyFile.js';

const executeCp = async (params) => {
  if (params.length < 2) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `cp command should have 2 parameters, ex. "cp file1.txt file2.txt`
    );
    return;
  }

  try {
    const copiedFilePath = await copyFile(params[0], params[1]);
    showResultMessage('File was copied to', copiedFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeCp };
