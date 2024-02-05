import os from 'os';
import readline from 'readline/promises';
import { getUsernameFromArgs } from './modules/getUsernameFromArgs.js';
import { showWelcomeMessage } from './modules/showWelcomeMessage.js';
import { showExitMessage } from './modules/showExitMessage.js';
import { showCurrentPath } from './modules/showCurrentPath.js';
import { handleInput } from './modules/handleInput.js';
import { PROMPT_TEXT, EXIT_COMMAND } from './config.js';

console.clear();
process.chdir(os.homedir());

const username = getUsernameFromArgs();
showWelcomeMessage(username);
showCurrentPath();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  if (input.trim().toLowerCase() === EXIT_COMMAND) {
    rl.close();
  }
  handleInput(input).then(() => rl.prompt());
});

rl.on('close', () => {
  showExitMessage(username);
  process.exit(0);
});

rl.prompt();
