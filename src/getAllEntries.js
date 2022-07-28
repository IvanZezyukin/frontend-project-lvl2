const getAllEntries = (arr) => {
  const result = [];
  // eslint-disable-next-line no-shadow
  const pushAllEntries = (arr, path = '', level = 1) => {
    arr.forEach(({ key, value }) => {
      if (!Array.isArray(value)) {
        result.push({
          key, value, hasChild: false, path: path === '' ? key : `${path}.${key}`, level, parent: path,
        });
      } else {
        result.push({
          key, value, hasChild: true, path: path === '' ? key : `${path}.${key}`, level, parent: path,
        });
        pushAllEntries(value, path === '' ? key : `${path}.${key}`, level + 1);
      }
    });
  };
  pushAllEntries(arr);
  return result;
};

export default getAllEntries;
