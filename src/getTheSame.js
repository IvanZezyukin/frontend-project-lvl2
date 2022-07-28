import getObjectFromArrayWithPathValue from './getObjectFromArrayWithPathValue.js';

const getTheSame = (arr1, arr2) => {
  const result = [];
  arr1.forEach((obj) => {
    const obj2 = getObjectFromArrayWithPathValue(arr2, obj.path);
    if (Object.keys(obj2).length !== 0 && Array.isArray(obj2.value) && Array.isArray(obj.value)) {
      result.push({ ...obj, status: 'same' });
    }
    // eslint-disable-next-line max-len
    if (Object.keys(obj2).length !== 0 && !Array.isArray(obj2.value) && !Array.isArray(obj.value) && obj2.value === obj.value) {
      result.push({ ...obj, status: 'same' });
    }
  });
  return result;
};

export default getTheSame;
