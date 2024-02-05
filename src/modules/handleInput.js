import { convertInputToArray } from './convertInputToArray.js';
import { showErrorMessage } from './showErrorMessage.js';
import { printOsInformation } from './printOsInformation.js';
import { INVALID_INPUT_MESSAGE } from '../config.js';

const COMMANDS = { os: printOsInformation };

const handleInput = (input) => {
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

  COMMANDS[currentCommand](params);
};

export { handleInput };
