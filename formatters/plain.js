import stringifyForPlain from './stringifyForPlain.js';

// eslint-disable-next-line array-callback-return,consistent-return
const plain = (arr, parent = '') => arr.flatMap((obj) => {
  const path = parent + obj.key;
  switch (obj.status) {
    case 'removed': return `Property '${path}' was removed`;
    case 'added': return `Property '${path}' was added with value: ${stringifyForPlain(obj.value)}`;
    case 'same': return [];
    case 'updated': return `Property '${path}' was updated. From ${stringifyForPlain(obj.oldValue)} to ${stringifyForPlain(obj.value)}`;
    case 'node': return `${plain(obj.children, `${path}.`)}`;
    default: throw new Error('Unknown status in object!');
  }
}).join('\n');

export default plain;
