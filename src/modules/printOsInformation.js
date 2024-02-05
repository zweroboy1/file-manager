import os from 'os';
import { showErrorMessage } from './showErrorMessage.js';
import { showResultMessage } from './showResultMessage.js';
import { INVALID_INPUT_MESSAGE } from '../config.js';

const printOsInformation = (params) => {
  const paramActions = {
    '--EOL': () => {
      showResultMessage('End of Line', JSON.stringify(os.EOL).slice(1, -1));
    },

    '--cpus': () => {
      const cpuCount = os.cpus().length;
      if (cpuCount === 0) {
        showErrorMessage('Error', `No info about CPUs available`);
        return;
      }
      showResultMessage('CPUs info', `${cpuCount} CPU(s)`);
      console.table(
        os.cpus().map((cpu) => ({
          model: cpu.model,
          clockRate: cpu.speed / 1000 + 'GHz',
        }))
      );
    },

    '--homedir': () => {
      showResultMessage('Home directory', os.homedir());
    },

    '--username': () => {
      showResultMessage('System user name', os.userInfo().username);
    },

    '--architecture': () => {
      showResultMessage('CPU architecture', os.arch());
    },
  };

  if (!params.length) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      'You should provide at least one parameter for "os" command'
    );
    return;
  }

  let hasValidParam = false;

  params.forEach((param) => {
    if (paramActions[param]) {
      paramActions[param]();
      hasValidParam = true;
    }
  });

  if (!hasValidParam) {
    showErrorMessage(
      INVALID_INPUT_MESSAGE,
      `You should provide at least one valid parameter for "os" command. The possible options are: ${Object.keys(
        paramActions
      ).join(', ')}`
    );
  }
};

export { printOsInformation };
