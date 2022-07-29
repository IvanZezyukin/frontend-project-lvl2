import path from 'path';
import { cwd } from 'process';
import parsers from './parsers.js';
import formatters from '../formatters/index.js';
import makeStructure from './makeStructure.js';

const index = (filepath1, filepath2, format) => {
  // формируем абсолютные пути к файлам
  const absoluteFilepath1 = path.resolve(cwd(), filepath1);
  const absoluteFilepath2 = path.resolve(cwd(), filepath2);
  // готовим файлы
  const parsedFile1 = parsers(absoluteFilepath1);
  const parsedFile2 = parsers(absoluteFilepath2);
  // формируем структуру со сравнением
  const structure = makeStructure(parsedFile1, parsedFile2);
  // формируем и выводим структуру
  return formatters(structure, format);
};

export default index;
