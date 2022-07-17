import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import index from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Flat json comparison', () => {
  expect(index(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFile('result.json'));
});
test('Flat yaml comparison', () => {
  expect(index(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish')).toEqual(readFile('result.json'));
});
test('Recursive json comparison', () => {
  expect(index(getFixturePath('file2-1.json'), getFixturePath('file2-2.json'), 'stylish')).toEqual(readFile('result2'));
});
