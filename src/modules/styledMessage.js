const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

const STYLES = {
  bold: '\x1b[1m',
  italic: '\x1b[3m',
};

const RESET = '\x1b[0m';

const styledMessage = (message, color = '', style = '') => {
  const currentColor = COLORS[color] ?? '';
  const currentStyle = STYLES[style] ?? '';

  return `${currentColor}${currentStyle}${message}${RESET}`;
};

export { styledMessage };
