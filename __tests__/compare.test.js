import compare from '../src/compare.js';

test('first', () => {
  expect(compare('../files/file1.json', '../files/file2.json')).toEqual('');
});
