import { executeCd } from './executeCd.js';

const executeUp = async () => {
  await executeCd(['..']);
};

export { executeUp };
