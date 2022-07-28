const ifInArrayObjectWithPathValue = (arr, pathValue) => {
  let result = false;
  arr.forEach((obj) => {
    if (obj.path === pathValue) {
      result = true;
    }
  });
  return result;
};

export default ifInArrayObjectWithPathValue;
