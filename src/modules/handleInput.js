import { convertInputToArray } from './convertInputToArray.js';
import { showErrorMessage } from './showErrorMessage.js';
import { executeOs } from './executeOs.js';
import { executeLs } from './executeLs.js';
import { executeCd } from './executeCd.js';
import { executeUp } from './executeUp.js';
import { executeCat } from './executeCat.js';
import { executeAdd } from './executeAdd.js';
import { executeRm } from './executeRm.js';
import { executeHash } from './executeHash.js';
import { executeCompress } from './executeCompress.js';
import { executeDecompress } from './executeDecompress.js';

import { INVALID_INPUT_MESSAGE } from '../config.js';

const COMMANDS = {
  os: executeOs,
  cd: executeCd,
  up: executeUp,
  ls: executeLs,
  cat: executeCat,
  add: executeAdd,
  rn: () => {},
  cp: () => {},
  mv: () => {},
  rm: executeRm,
  hash: executeHash,
  compress: executeCompress,
  decompress: executeDecompress,
};

const handleInput = async (input) => {
  const inputData = convertInputToArray(input);
  if (inputData.length === 0) {
    return;
  }
  const [currentCommand, ...params] = inputData;
  if (!(currentCommand in COMMANDS)) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `Unknown command "${inputData[0]}"`
    );
    return;
  }
  try {
    await COMMANDS[currentCommand](params);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

export { handleInput };
