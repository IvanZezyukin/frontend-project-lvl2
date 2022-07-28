const getValue = (value) => {
  let result = value;
  if (Array.isArray(value)) {
    result = '[complex value]';
  }
  if (typeof value === 'string') {
    result = `'${value}'`;
  }
  return result;
};

export default getValue;
