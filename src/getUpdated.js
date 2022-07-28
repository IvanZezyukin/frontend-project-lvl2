import getObjectFromArrayWithPathValue from './getObjectFromArrayWithPathValue.js';

const getUpdated = (arr1, arr2) => {
  const result = [];
  arr1.forEach((obj) => {
    const obj2 = getObjectFromArrayWithPathValue(arr2, obj.path);
    if (Object.keys(obj2).length !== 0 && !Array.isArray(obj2.value) && obj.value !== obj2.value) {
      result.push({ ...obj2, status: 'updated', oldValue: obj.value });
    }
  });
  return result;
};

export default getUpdated;
