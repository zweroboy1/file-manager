import { convertInputToArray } from './convertInputToArray.js';
import { showErrorMessage } from './showErrorMessage.js';
import { getOsInformation } from './getOsInformation.js';

const COMMANDS = { os: getOsInformation };

const handleInput = (input) => {
  const inputData = convertInputToArray(input);
  if (inputData.length === 0) {
    return;
  }
  const [currentCommand, ...params] = inputData;
  if (!(currentCommand in COMMANDS)) {
    showErrorMessage('Invalid input', `Unknown command "${inputData[0]}"`);
    return;
  }

  COMMANDS[currentCommand](params);
};

export { handleInput };
