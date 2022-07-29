import stylish from './stylish.js';
import plain from './plain.js';
import jsonFormatter from './jsonFormatter.js';

const formatters = (compared, format) => {
  if (format === 'plain') {
    return plain(compared);
  }
  if (format === 'json') {
    return jsonFormatter(compared);
  }
  return stylish(compared);
};

export default formatters;
