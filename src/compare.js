const compare = (parsedFile1, parsedFile2) => {
  const result = [];

  // ищем одинаковое
  for (const item in parsedFile2) {
    if (parsedFile2[item] === parsedFile1[item]) {
      const obj = { sort: `${item[0]}`, lines: [] };
      obj.lines.push(['   ', `${item}: ${parsedFile1[item]}`]);
      result.push(obj);
    }
  }

  // ищем измененные
  for (const item in parsedFile2) {
    if (item in parsedFile1 && parsedFile2[item] !== parsedFile1[item]) {
      const obj = { sort: `${item[0]}`, lines: [] };
      obj.lines.push(['  -', `${item}: ${parsedFile1[item]}`]);
      obj.lines.push(['  +', `${item}: ${parsedFile2[item]}`]);
      result.push(obj);
    }
  }

  // ищем добавленные
  for (const item in parsedFile2) {
    if (!(item in parsedFile1)) {
      const obj = { sort: `${item[0]}`, lines: [] };
      obj.lines.push(['  +', `${item}: ${parsedFile2[item]}`]);
      result.push(obj);
    }
  }

  // ищем удаленные
  for (const item in parsedFile1) {
    if (!(item in parsedFile2)) {
      const obj = { sort: `${item[0]}`, lines: [] };
      obj.lines.push(['  -', `${item}: ${parsedFile1[item]}`]);
      result.push(obj);
    }
  }

  // организовываем вывод
  result.sort((a, b) => a.sort.localeCompare(b.sort));
  let stringResult = '';
  stringResult += '{\n';
  for (const item of result) {
    for (const item2 of item.lines) {
      stringResult += `${item2[0]} ${item2[1]}\n`;
    }
  }
  stringResult += '}';
  console.log(stringResult);

  return stringResult;
};

export default compare;
