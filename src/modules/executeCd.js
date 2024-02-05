import { showErrorMessage } from './showErrorMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { chdir } from '../utils/chdir.js';

const executeCd = async (params) => {
  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `cd command should have a parameter, ex. "cd 'folder name'"`
    );
    return;
  }
  try {
    await chdir(params[0]);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeCd };
