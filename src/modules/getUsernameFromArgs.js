import { DEFAULT_USERNAME } from '../config.js';

const getUsernameFromArgs = () => {
  const usernamePrefix = '--username=';
  const usernames = process.argv
    .filter((arg) => arg.startsWith(usernamePrefix))
    .map((name) => name.replace(usernamePrefix, ''));
  const username = usernames.length
    ? usernames[usernames.length - 1]
    : DEFAULT_USERNAME;
  return username;
};

export { getUsernameFromArgs };
