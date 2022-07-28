const makeStructure = (obj) => {
  const result = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'object' || value === null) {
      result.push({ key, value });
    } else {
      result.push({ key, value: makeStructure(value) });
    }
  });
  return result;
};

export default makeStructure;
