import ifInArrayObjectWithPathValue from './ifInArrayObjectWithPathValue.js';

const getAdded = (arr1, arr2) => {
  const result = [];
  arr2.forEach((obj) => {
    if (!ifInArrayObjectWithPathValue(arr1, obj.path)) {
      result.push({ ...obj, status: 'added' });
    }
  });
  return result;
};

export default getAdded;
