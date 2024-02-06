import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { compressFile } from '../utils/compressFile.js';

const executeCompress = async (params) => {
  if (params.length < 2) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `compress command should have 2 parameters, ex. "compress file.txt file.br`
    );
    return;
  }

  try {
    const compressedFilePath = await compressFile(params[0], params[1]);
    showResultMessage('File was compressed', compressedFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  }
};

export { executeCompress };
