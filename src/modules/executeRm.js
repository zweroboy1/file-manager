import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { INVALID_INPUT_MESSAGE, FAILED_OPERATION_MESSAGE } from '../config.js';

import { deleteFile } from '../utils/deleteFile.js';

const executeRm = async (params) => {
  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `rm command should have a parameter, ex. "rm 'bad file.txt'"`
    );
    return;
  }

  try {
    const deletedFilePath = await deleteFile(params[0]);
    showResultMessage('File was deleted', deletedFilePath);
  } catch (error) {
    showErrorMessage(FAILED_OPERATION_MESSAGE, error.message);
  }
};

export { executeRm };
