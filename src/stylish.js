const stylish = (arrOfDiff, spaces = 0) => {
  let result = '';
  result += '{\n';
  arrOfDiff = arrOfDiff.sort((a, b) => a.key.localeCompare(b.key));
  arrOfDiff.map(({prefix, key, value}) => {
    if (Array.isArray(value)) {
      const res = stylish(value, spaces + 1);
      result += `${'    '.repeat(spaces)}${prefix}${key}:${res === '' ? '' : ' '}${res}\n`;
    } else {
      result += `${'    '.repeat(spaces)}${prefix}${key}:${value === '' ? '' : ' '}${value}\n`;
    }
  });
  result += `${'    '.repeat(spaces)}}`;
  return result;
};

export default stylish;
