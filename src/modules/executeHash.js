import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { getHash } from '../utils/getHash.js';

const executeHash = async (params) => {
  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `hash command should have a parameter, ex. "hash file.txt"`
    );
    return;
  }

  try {
    const hash = await getHash(params[0]);
    showResultMessage('File hash (sha256)', hash);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  }
};

export { executeHash };
