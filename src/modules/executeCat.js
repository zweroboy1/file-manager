import { showErrorMessage } from './showErrorMessage.js';
import { showCurrentPath } from './showCurrentPath.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { read } from '../utils/read.js';

const executeCat = async (params) => {
  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `cat command should have a parameter, ex. "cat file.txt"`
    );
    return;
  }

  try {
    const data = await read(params[0]);
    console.log(data);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  } finally {
    showCurrentPath();
  }
};

export { executeCat };
