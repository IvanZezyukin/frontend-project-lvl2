import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import index from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Flat json comparison', () => {
  expect(index(getFixturePath('flat-file1.json'), getFixturePath('flat-file2.json'), 'stylish')).toEqual(readFile('flat-result.json'));
});
test('Flat yaml comparison', () => {
  expect(index(getFixturePath('flat-file1.yaml'), getFixturePath('flat-file2.yaml'), 'stylish')).toEqual(readFile('flat-result.json'));
});
test('Recursive json comparison', () => {
  expect(index(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFile('result_stylish.txt'));
});
test('Plain format output for yaml', () => {
  expect(index(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(readFile('result_plain.txt'));
});
