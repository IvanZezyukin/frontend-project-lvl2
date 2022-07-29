import stylish from './stylish.js';
import plain from './plain.js';
import jsonFormatter from './jsonFormatter.js';

const formatters = (compared, format) => {
  let result;
  if (format === 'plain') {
    result = plain(compared);
  } else if (format === 'json') {
    result = jsonFormatter(compared);
  } else {
    result = stylish(compared);
  }
  return result;
};

export default formatters;
