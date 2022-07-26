const plain = (compared, path = '') => {

  /*
  // ниже частично рабочий код не удалять!
  let result = '';
  compared = compared.sort((a, b) => a.key.localeCompare(b.key));

  compared.forEach((obj) => {
    if (obj.prefix === '  - ') {
      result += `- Property '${obj.key}' was removed\n`;
    }
    if (obj.prefix === '  + ') {
      result += `- Property '${obj.key}' was added with value: ${Array.isArray(obj.value) ? '[complex value]' : `'${obj.value}'\n`}`;
    }
    if (obj.prefix === '    ') {
      const getPath = ({ key, value }) => {
        let res = '';
        if (Array.isArray(value)) {
          value.sort((a, b) => a.key.localeCompare(b.key)).forEach((obj) => {
            res += key;
            res += '.';
            res += getPath(obj);
          });
        } else {
          res += key;
          res += '\n';
        }
        return res;
      };
      result += getPath(obj);
      result += '\n';
    }
  });

  return result;
   */




};

export default plain;
