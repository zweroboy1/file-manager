import { styledMessage } from './styledMessage.js';

const showErrorMessage = (title = '', details = '') => {
  console.log(
    `${styledMessage(title, 'red', 'bold')} ${styledMessage(
      `(${details})`,
      'red',
      'italic'
    )}`
  );
};

export { showErrorMessage };
