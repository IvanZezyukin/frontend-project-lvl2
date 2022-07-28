import ifInArrayObjectWithPathValue from './ifInArrayObjectWithPathValue.js';

const getDeleted = (arr1, arr2) => {
  const result = [];
  arr1.forEach((obj) => {
    if (!ifInArrayObjectWithPathValue(arr2, obj.path)) {
      result.push({ ...obj, status: 'deleted' });
    }
  });
  return result;
};

export default getDeleted;
