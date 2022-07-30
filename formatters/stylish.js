import _ from 'lodash';

const stringify = (data, level) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const result = Object.entries(data).map(([key, value]) => `${'    '.repeat(level + 1)}${key}: ${stringify(value, level + 1)}`);
  return ['{', ...result, `${'    '.repeat(level)}}`].join('\n');
};

const makeLine = (key, value, status, level, stringifyLevel = level) => {
  const sign = {
    removed: '  - ',
    added: '  + ',
    same: '    ',
    updated: '    ',
    node: '    ',
  };
  const spaces = '    '.repeat(level - 1);
  return `${spaces}${sign[status]}${key}: ${stringify(value, stringifyLevel)}`;
};

const stylish = (arr, level = 1) => {
  // eslint-disable-next-line array-callback-return,consistent-return
  const result = arr.map((obj) => {
    if (obj.status === 'updated') {
      return [makeLine(obj.key, obj.oldValue, 'removed', level), makeLine(obj.key, obj.value, 'added', level)].join('\n');
    }
    if (obj.status === 'node') {
      return `${'    '.repeat(level)}${obj.key}: ${stylish(obj.children, level + 1)}`;
    }
    return makeLine(obj.key, obj.value, obj.status, level);
  });
  return `{\n${result.join('\n')}\n${'    '.repeat(level - 1)}}`;
};

export default stylish;
