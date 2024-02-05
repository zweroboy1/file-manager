import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { decompressFile } from '../utils/decompressFile.js';

const executeDecompress = async (params) => {
  if (params.length < 2) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `decompress command should have 2 parameters, ex. "decompress file.br file.txt`
    );
    return;
  }

  try {
    const compressedFilePath = await decompressFile(params[0], params[1]);
    showResultMessage('File was compressed', compressedFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  }
};

export { executeDecompress };
