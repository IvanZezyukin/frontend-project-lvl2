import _ from 'lodash';

const makeStructure = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);
  const result = [];
  sortedKeys.forEach((key) => {
    if (!(key in obj2)) {
      result.push({ key, value: obj1[key], status: 'removed' });
    } else
    if (!(key in obj1)) {
      result.push({ key, value: obj2[key], status: 'added' });
    } else
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      result.push({ key, status: 'node', children: makeStructure(obj1[key], obj2[key]) });
    } else
    if (!_.isEqual(obj1[key], obj2[key])) {
      result.push({
        key, value: obj2[key], oldValue: obj1[key], status: 'updated',
      });
    } else { result.push({ key, value: obj1[key], status: 'same' }); }
  });
  return result;
};

export default makeStructure;
