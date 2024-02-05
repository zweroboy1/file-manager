import { convertInputToArray } from './convertInputToArray.js';
import { showErrorMessage } from './showErrorMessage.js';
import { printOsInformation } from './printOsInformation.js';
import { executeLs } from './executeLs.js';
import { executeCd } from './executeCd.js';
import { executeUp } from './executeUp.js';
import { executeCat } from './executeCat.js';

import { INVALID_INPUT_MESSAGE } from '../config.js';

const COMMANDS = {
  os: printOsInformation,
  cd: executeCd,
  up: executeUp,
  ls: executeLs,
  cat: executeCat,
  add: () => {},
  rn: () => {},
  cp: () => {},
  mv: () => {},
  rm: () => {},
  hash: () => {},
  compress: () => {},
  decompress: () => {},
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
