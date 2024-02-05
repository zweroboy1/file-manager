import { styledMessage } from './styledMessage.js';
import { INFORMATION_PROMPT } from '../config.js';

const showWelcomeMessage = (username) => {
  console.log(
    `${styledMessage(
      'Welcome to the File Manager, ',
      'green',
      'bold'
    )}${styledMessage(username, 'blue', 'bold')}${styledMessage(
      '!',
      'green',
      'bold'
    )}`
  );
  console.log(INFORMATION_PROMPT);
};

export { showWelcomeMessage };
