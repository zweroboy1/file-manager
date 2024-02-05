import { styledMessage } from './styledMessage.js';

const showExitMessage = (username) => {
  console.log(
    `${styledMessage(
      'Thank you for using File Manager, ',
      'green',
      'bold'
    )}${styledMessage(username, 'blue', 'bold')}${styledMessage(
      ', goodbye!',
      'green',
      'bold'
    )}`
  );
};

export { showExitMessage };
