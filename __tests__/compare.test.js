import compare from '../src/compare.js';

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('first', () => {
  expect(compare('../files/file1.json', '../files/file2.json')).toEqual(result);
});
