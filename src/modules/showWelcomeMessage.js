import { styledMessage } from './styledMessage.js';

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
};

export { showWelcomeMessage };
