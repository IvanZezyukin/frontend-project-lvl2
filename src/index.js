import path from 'path';
import { cwd } from 'process';
import parsers from './parsers.js';
import newDiff from './compare.js';
import formatters from '../formatters/index.js';
import makeStructure from './makeStructure.js';
import getAllEntries from './getAllEntries.js';

const index = (filepath1, filepath2, format) => {
  // формируем абсолютные пути к файлам
  const absoluteFilepath1 = path.resolve(cwd(), filepath1);
  const absoluteFilepath2 = path.resolve(cwd(), filepath2);
  // готовим файлы
  const parsedFile1 = parsers(absoluteFilepath1);
  const parsedFile2 = parsers(absoluteFilepath2);
  // переделываем структуру файлов
  const structure1 = makeStructure(parsedFile1);
  const structure2 = makeStructure(parsedFile2);
  // расхлопываем объекты в структуре
  const allEntries1 = getAllEntries(structure1);
  const allEntries2 = getAllEntries(structure2);
  // сравниваем
  const compared = newDiff(allEntries1, allEntries2);
  // формируем и выводим структуру
  return formatters(compared, format);
};

export default index;
