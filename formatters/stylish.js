import _ from 'lodash';

const stringify = (data, level) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const result = Object.entries(data).map(([key, value]) => `${'    '.repeat(level + 1)}${key}: ${stringify(value, level + 1)}`);
  return ['{', ...result, `${'    '.repeat(level)}}`].join('\n');
};

const stylish = (arr, level = 1) => {
  // eslint-disable-next-line array-callback-return,consistent-return
  const result = arr.map((obj) => {
    if (obj.status === 'removed') {
      return `${'    '.repeat(level - 1)}  - ${obj.key}: ${stringify(obj.value, level)}`;
    }
    if (obj.status === 'added') {
      return `${'    '.repeat(level - 1)}  + ${obj.key}: ${stringify(obj.value, level)}`;
    }
    if (obj.status === 'same') {
      return `${'    '.repeat(level - 1)}    ${obj.key}: ${stringify(obj.value)}`;
    }
    if (obj.status === 'updated') {
      return [`${'    '.repeat(level - 1)}  - ${obj.key}: ${stringify(obj.oldValue, level)}`, `${'    '.repeat(level - 1)}  + ${obj.key}: ${stringify(obj.value, level)}`].join('\n');
    }
    if (obj.status === 'node') {
      return `${'    '.repeat(level)}${obj.key}: ${stylish(obj.children, level + 1)}`;
    }
  });
  return `{\n${result.join('\n')}\n${'    '.repeat(level - 1)}}`;
};

export default stylish;
