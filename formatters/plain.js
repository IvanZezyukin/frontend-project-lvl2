import _ from 'lodash';

const stringifyForPlain = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

const plain = (arr, parent = '') => {
  // eslint-disable-next-line array-callback-return,consistent-return
  const result = arr.flatMap((obj) => {
    const path = `${parent}${obj.key}`;
    if (obj.status === 'removed') {
      return `Property '${path}' was removed`;
    }
    if (obj.status === 'added') {
      return `Property '${path}' was added with value: ${stringifyForPlain(obj.value)}`;
    }
    if (obj.status === 'same') {
      return [];
    }
    if (obj.status === 'updated') {
      return `Property '${path}' was updated. From ${stringifyForPlain(obj.oldValue)} to ${stringifyForPlain(obj.value)}`;
    }
    if (obj.status === 'node') {
      return `${plain(obj.children, `${path}.`)}`;
    }
  });
  return result.join('\n');
};

export default plain;
