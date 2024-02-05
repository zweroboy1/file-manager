import { getUsernameFromArgs } from './modules/getUsernameFromArgs.js';
import { showWelcomeMessage } from './modules/showWelcomeMessage.js';
import { showExitMessage } from './modules/showExitMessage.js';

const username = getUsernameFromArgs();
showWelcomeMessage(username);
showExitMessage(username);
