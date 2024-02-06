import { CURRENT_PATH_TEXT } from '../config.js';
import { styledMessage } from './styledMessage.js';

const showCurrentPath = () => {
  console.log(
    `${styledMessage(`${CURRENT_PATH_TEXT} ${process.cwd()}`, 'blue')}`
  );
};
export { showCurrentPath };
