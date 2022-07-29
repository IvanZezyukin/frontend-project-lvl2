import _ from 'lodash';

const makeStructure = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    if (!(key in obj2)) {
      return { key, value: obj1[key], status: 'removed' };
    }
    if (!(key in obj1)) {
      return { key, value: obj2[key], status: 'added' };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, status: 'node', children: makeStructure(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, value: obj2[key], oldValue: obj1[key], status: 'updated',
      };
    }
    return { key, value: obj1[key], status: 'same' };
  });
};

export default makeStructure;
