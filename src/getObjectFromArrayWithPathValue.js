const getObjectFromArrayWithPathValue = (arr, pathValue) => {
  const result = {};
  arr.forEach((obj) => {
    if (obj.path === pathValue) {
      Object.assign(result, obj);
    }
  });
  return result;
};

export default getObjectFromArrayWithPathValue;
