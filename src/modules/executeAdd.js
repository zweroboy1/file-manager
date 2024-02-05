import { showErrorMessage } from './showErrorMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { createFile } from '../utils/createFile.js';

const executeAdd = async (params) => {
  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `add command should have a parameter, ex. "add new.txt"`
    );
    return;
  }

  try {
    await createFile(params[0]);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeAdd };
