import getObjectFromArrayWithPathValue from './getObjectFromArrayWithPathValue.js';

const getParentStatus = (obj, arr) => {
  const indexOfLastDot = obj.path.lastIndexOf('.');
  const path = obj.path.slice(0, indexOfLastDot);
  const parent = getObjectFromArrayWithPathValue(arr, path);
  return parent.status;
};

export default getParentStatus;
