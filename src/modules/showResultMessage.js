import { styledMessage } from './styledMessage.js';

const showResultMessage = (title = '', details = '') => {
  console.log(
    `${styledMessage(`${title}:`, 'yellow', 'bold')} ${styledMessage(
      `${details}`,
      'yellow'
    )}`
  );
};

export { showResultMessage };
