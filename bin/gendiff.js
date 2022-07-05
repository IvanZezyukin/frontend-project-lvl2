#!/usr/bin/env node

import { program } from 'commander';
// для отображения текущей директории
import { cwd } from 'process';
// для склейки пути к файлу
import * as path from 'path';
// для работы с файловой системой
import * as fs from 'fs';

const command = (filepath1, filepath2) => {
  // формируем абсолютные пути к файлам
  const absoluteFilepath1 = path.resolve(cwd(), filepath1);
  const absoluteFilepath2 = path.resolve(cwd(), filepath2);
  // пробуем читать файл
  const file1 = fs.readFileSync(absoluteFilepath1, 'utf8');
  const file2 = fs.readFileSync(absoluteFilepath2, 'utf8');
  // пробуем распарсить файл
  const parsedFile1 = JSON.parse(file1);
  const parsedFile2 = JSON.parse(file2);

  // дальше логика сравнения

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
  console.log('{');
  for (const item of result) {
    for (const item2 of item.lines) {
      console.log(`${item2[0]} ${item2[1]}`);
    }
  }
  console.log('}');
};

program
  .version('0.1')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(command)
  .parse(process.argv);

const options = program.opts();
if (options.format) console.log(`format!${options.format}`);
