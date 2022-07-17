import stylish from './stylish.js';
import plain from './plain.js';

const formatters = (compared, format) => {
  let result = '';
  if (format === 'plain') {
    result = plain(compared);
  } else {
    result = stylish(compared);
  }
  return result;
};

export default formatters;
