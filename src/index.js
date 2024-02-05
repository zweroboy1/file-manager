import readline from 'readline';
import { getUsernameFromArgs } from './modules/getUsernameFromArgs.js';
import { showWelcomeMessage } from './modules/showWelcomeMessage.js';
import { showExitMessage } from './modules/showExitMessage.js';
import { PROMPT_TEXT, EXIT_COMMAND } from './config.js';

const username = getUsernameFromArgs();
showWelcomeMessage(username);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(PROMPT_TEXT);

rl.on('line', (input) => {
  console.log(`Received: ${input}`);

  if (input.trim().toLowerCase() === EXIT_COMMAND) {
    rl.close();
  }
  rl.prompt();
});

rl.on('close', () => {
  showExitMessage(username);
  process.exit(0);
});

rl.prompt();
