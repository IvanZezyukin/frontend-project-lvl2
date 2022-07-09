import path from 'path';
import { cwd } from 'process';
import parsers from './parsers.js';
import compare from './compare.js';

const index = (filepath1, filepath2) => {
  // формируем абсолютные пути к файлам
  const absoluteFilepath1 = path.resolve(cwd(), filepath1);
  const absoluteFilepath2 = path.resolve(cwd(), filepath2);
  // парсим файлы
  const parsedFile1 = parsers(absoluteFilepath1);
  const parsedFile2 = parsers(absoluteFilepath2);
  // сравниваем
  const result = compare(parsedFile1, parsedFile2);
  return result;
};

export default index;
