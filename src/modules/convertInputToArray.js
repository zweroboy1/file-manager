const convertInputToArray = (input) => {
  const result = [];
  const regex = /\s*("[^"]*"|'[^']*'|[^\s'"]+)\s*/g;

  let match;
  while ((match = regex.exec(input)) !== null) {
    result.push(match[1].replace(/['"]/g, ''));
  }

  return result;
};

export { convertInputToArray };
