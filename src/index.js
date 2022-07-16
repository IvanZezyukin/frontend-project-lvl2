import path from 'path';
import { cwd } from 'process';
import parsers from './parsers.js';
import newDiff from './compare.js';
import stylish from './stylish.js';

const index = (filepath1, filepath2) => {
  // формируем абсолютные пути к файлам
  const absoluteFilepath1 = path.resolve(cwd(), filepath1);
  const absoluteFilepath2 = path.resolve(cwd(), filepath2);
  // готовим файлы
  const parsedFile1 = parsers(absoluteFilepath1);
  const parsedFile2 = parsers(absoluteFilepath2);
  // сравниваем
  const compared = newDiff(parsedFile1, parsedFile2);
  // формируем и выводим структуру
  return stylish(compared);
};

export default index;
